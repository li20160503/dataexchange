package cn.gov.bjsat.dexc.kafka;

import cn.bgonline.askit.module.base.spring.ApplicationContextUtils;
import kafka.consumer.ConsumerConfig;
import kafka.consumer.KafkaStream;
import kafka.javaapi.consumer.ConsumerConnector;
import org.apache.zookeeper.CreateMode;
import org.apache.zookeeper.data.Stat;
import cn.gov.bjsat.dexc.DexcConfig;
import cn.gov.bjsat.dexc.IResultCallback;
import cn.gov.bjsat.dexc.app.AppInstance;
import cn.gov.bjsat.dexc.app.ZookeeperConnector;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Component;
import scala.Int;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by grf11_000 on 2015/10/7.
 */

@Component
public class ConsumerConnectorManagerImpl implements IConsumerConnectorManager {

    public Map<String, ConsumerConnector> AppInstanceTopicConsumerPool = new HashMap<String, ConsumerConnector>();
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    DexcConfig dexcConfig;

    @Autowired
    ZookeeperConnector zookeeperConnector;

    @Autowired
    private ConsumerConfig4Spring consumerConfig4Spring;

    @Autowired
    private ThreadPoolTaskExecutor taskExecutor;


    public ConsumerConnector createConsumerConnector(AppInstance instance)
            throws ClassNotFoundException, IllegalAccessException, InstantiationException {

        ConsumerConnector existsConsumer = getConsumerByAppId(instance.getAppId());
        if (existsConsumer != null) {
            return existsConsumer;
        }

        Map<String, Integer> topicCountMap = new HashMap<String, Integer>();
        topicCountMap.put(instance.getTopicCBName(), instance.getPartitions());

        ConsumerConfig consumerConfig = consumerConfig4Spring.generateConsumerConfig(instance.getAppName());

        ConsumerConnector consumer;
        consumer = kafka.consumer.Consumer.createJavaConsumerConnector(consumerConfig);

        Map<String, List<KafkaStream<byte[], byte[]>>> consumerMap = consumer.createMessageStreams(topicCountMap);
        List<KafkaStream<byte[], byte[]>> streams = consumerMap.get(instance.getTopicCBName());

        //创建 消费线程
        Integer threadNumber = 1;
        for (final KafkaStream stream : streams) {
            taskExecutor.setThreadNamePrefix(instance.getAppName() + "-" + threadNumber.toString() + "==");
            IResultCallback _runner = (IResultCallback) Class.forName(instance.getRunnerClassName()).newInstance();
            _runner.initParameters(stream, threadNumber, instance);
            taskExecutor.execute(_runner);
            logger.debug("创建线程：{}, forTopic: {}, streams: {}", threadNumber, instance.getTopicCBName(), streams.size());
            threadNumber++;
        }

        AppInstanceTopicConsumerPool.put(instance.getAppId(), consumer);

        return consumer;

    }

    public void distory(String appId) {
        ConsumerConnector consumer;
        consumer = getConsumerByAppId(appId);
        consumer.shutdown();
    }

    public ConsumerConnector getConsumerByAppId(String appId) {
        if (AppInstanceTopicConsumerPool.containsKey(appId)) {
            return AppInstanceTopicConsumerPool.get(appId);
        } else
            return null;
    }


    /**
     * 检测并创建消费
     * 锁是否存在，如果不存在抢占锁，如果存在判断值是否为自己，是：监听，否：跳过
     *
     * @param instance
     */
    public void checkAndConsumer(AppInstance instance) {
        int poolCount = taskExecutor.getCorePoolSize();
        int activeCount = taskExecutor.getActiveCount();
        int reqThreadNum = instance.getPartitions();

        //是否已被消费
        Integer lockState = instanceConsumerBlocked(instance);
        if (lockState == 1) {
            return;
        }

        logger.debug("app name:{}, 创建消费checkAndConsumer:{} ,线程总数poolCount:{},活动线程activeCount:{},需要线程reqThreadNum:{} ", instance.getAppName(), instance.getAppId(), poolCount, activeCount, reqThreadNum);

        if (poolCount - activeCount > reqThreadNum) {

            //抢占消费锁，如果结点创建成功就创建TOPIC消费
            if(lockState == 0) {
                logger.debug("实例{} 没有消费锁，抢占: ", instance.getAppName());
                try {
                    zookeeperConnector.getZkClient()
                            .create()
                            .creatingParentContainersIfNeeded()
                            .withMode(CreateMode.PERSISTENT)
                            .forPath(getLockedPath(instance.getAppId()), dexcConfig.getApplicationUUID().getBytes());

                    try {
                        createConsumerConnector(instance);
                    } catch (Exception e) {
                        logger.error("创建消费失败create consumer error:{} , appid {}: ", e.getMessage(), instance.getAppId());
                       // removeLockedDataByNode(instance.getAppId());
                    }

                } catch (Exception e) {
                    logger.error(e.getMessage());
                }
            }
            //是自己的，重新建立TOPIC消费
            else if (lockState == -1){
                logger.debug("实例{} 有消费锁，是自己，进行Topic消费创建: ", instance.getAppName());
                try {
                    createConsumerConnector(instance);
                } catch (Exception e) {
                    logger.error("创建消费失败create consumer error:{} , appid {}: ", e.getMessage(), instance.getAppId());
                    //removeLockedDataByNode(instance.getAppId());
                }
            }

        }

    }


    /**
     * 判断是否已被消费
     *-1：是自己的，创建TOPIC消费
     * 1：不是自己的
     *0：没有消费锁
     * @param instance
     * @return
     */
    private Integer instanceConsumerBlocked(AppInstance instance) {
        try {

            //锁是否存在？
            Stat exists = zookeeperConnector.getZkClient().checkExists().forPath(getLockedPath(instance.getAppId()));
            if (exists == null) {
                return 0;
            }

            //锁已存在，判断是否为自己的锁?
            String nodeId = dexcConfig.getApplicationUUID();
            String nodeId2 = new String(zookeeperConnector.getZkClient().getData().forPath(getLockedPath(instance.getAppId())));
            if (nodeId2.equals(nodeId)) {
                return -1;
            }else
            {
                return 1;
            }

        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return 0;
    }

    private String getLockedPath(String appId) {
        return dexcConfig.getAppPath() + "/" + appId + dexcConfig.getLockedPostfix();
    }

    /**
     * 消除僵尸消费
     */
    public void clearZombieConsumer() {
        String nodeId = dexcConfig.getApplicationUUID();
        for (Map.Entry<String, ConsumerConnector> entry : AppInstanceTopicConsumerPool.entrySet()) {
            try {
                //如果锁已不存在
                Stat lockedStat = zookeeperConnector.getZkClient().checkExists().forPath(getLockedPath(entry.getKey()));
                if (lockedStat == null) {
                    removeConsumer(entry.getKey());
                    logger.debug("消除僵尸消费clearConsumer:{} ", entry.getKey());
                } else {
                    //如果锁不是自己的
                    String nodeId2 = new String(zookeeperConnector.getZkClient().getData().forPath(getLockedPath(entry.getKey())));
                    if (!nodeId.equals(nodeId2)) {
                        removeConsumer(entry.getKey());
                        logger.debug("消除僵尸消费clearConsumer:{} ", entry.getKey());
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            removeConsumer(entry.getKey());
        }
    }

    /**
     * 清除一个消费端，在LOCKED和实例被删除 之后
     *
     * @param appId
     */
    public void removeConsumer(String appId) {
        ConsumerConnector consumerConnector = getConsumerByAppId(appId);
        if (consumerConnector != null) {
            consumerConnector.shutdown();
            AppInstanceTopicConsumerPool.remove(appId);
            removeLockedDataByNode(appId);
//            try {
//                zookeeperConnector.getZkClient().delete().forPath(getLockedPath(appId));
//            } catch (Exception e) {
//                logger.debug("delete locked node filed:{} ", e.getMessage());
//            }
            logger.debug("删除消费removeConsumer:{} ", appId);
        } else {
            logger.debug("删除消费失败removeConsumer field :{} , not exists", appId);
        }
    }


    /**
     * 删除zk消费锁，需要判断是否为当前结点所消费
     */
    private void removeLockedDataByNode(String appId) {
        String nodeId = dexcConfig.getApplicationUUID();
        try {
            String nodeId2 = new String(zookeeperConnector.getZkClient().getData().forPath(getLockedPath(appId)));
            logger.info("删除结点：{} 对实例：{} 的消费锁，而实例被锁的Node为：{} ", nodeId, appId, nodeId2);
            if (nodeId2.equals(nodeId)) {
                zookeeperConnector.getZkClient().delete().forPath(getLockedPath(appId));
            }
        } catch (Exception e) {
            logger.debug("删除消费锁失败delete locked node filed:{} ", e.getStackTrace());
        }
    }


    public Boolean consumerIsExists(String groupName) {
        return AppInstanceTopicConsumerPool.containsKey(groupName);
    }


    public ConsumerConfig4Spring getConsumerConfig4Spring() {
        return consumerConfig4Spring;
    }


}
