package cn.gov.bjsat.dexc.app;

import cn.gov.bjsat.dexc.DexcConfig;
import cn.gov.bjsat.dexc.Utils;
import cn.gov.bjsat.dexc.kafka.IConsumerConnectorManager;
import cn.gov.bjsat.dexc.kafka.KafkaManager;
import cn.gov.bjsat.dexc.service.NodeService;
import org.apache.curator.framework.CuratorFramework;
import org.apache.curator.framework.recipes.cache.PathChildrenCacheEvent;
import org.apache.curator.framework.recipes.cache.PathChildrenCacheListener;
import org.apache.curator.framework.state.ConnectionState;
import org.apache.curator.framework.state.ConnectionStateListener;
import org.apache.curator.utils.ZKPaths;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Map;
import java.util.UUID;

/**
 * Created by grf11_000 on 2015/10/6.
 */

public class AppInstanceManager implements IAppInstanceManager {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    DexcConfig dexcConfig;

    @Autowired
    IAppInstanceRepository repository;

    @Autowired
    ZookeeperConnector zookeeperConnector;

    @Autowired
    private IConsumerConnectorManager consumerConnectorManager;

    @Autowired
    KafkaManager kafkaManager;

    @Autowired
    NodeService nodeService;

    public AppInstance registerApp(AppInstance instance) throws Exception {
        //查重
        AppInstance instanceByAppName = repository.findInstanceByAppName(instance.getAppName());
        if (instanceByAppName != null) {
            return instanceByAppName;
        }

        instance.setAppId(UUID.randomUUID().toString());
        instance.setAppKey(UUID.randomUUID().toString());
        instance.setTopicCBName(instance.getTopicName() + dexcConfig.getCallbackTopicPostfix());
        instance.setRunnerClassName(dexcConfig.getCallbackRunnerCln());
        instance.setRegDate(Utils.getDateString());

        //创建Topic
        //任务topic默认1个分区
        kafkaManager.createTopic(instance.getTopicName(), 1, instance.getStreamCount());
        kafkaManager.createTopic(instance.getTopicCBName(), instance.getPartitions(), instance.getStreamCount());
        repository.addInstance(instance);

        return instance;
    }

    public AppInstance updateApp(AppInstance instance) throws Exception {

        if (instance.getAppId() == null || instance.getAppKey() == null || instance.getAppName() == null) {
            return null;
        }

        //创建Topic
        //任务topic默认1个分区
        instance.setTopicCBName(instance.getTopicName() + "_CB");
        kafkaManager.createTopic(instance.getTopicName(), 1, instance.getStreamCount());
        kafkaManager.createTopic(instance.getTopicCBName(), instance.getPartitions(), instance.getStreamCount());
        repository.updateInstance(instance);

        return instance;
    }


    @Deprecated
    public AppInstance registerApp(String appName, String topicName, String appnameCN, String callbackRoute, Integer partitions, Integer streams) throws Exception {
        AppInstance instanceByAppName = repository.findInstanceByAppName(appName);
        if (instanceByAppName != null) {
            return instanceByAppName;
        }
        AppInstance instance = new AppInstance();
        instance.setAppId(UUID.randomUUID().toString());
        instance.setAppKey(UUID.randomUUID().toString());
        instance.setAppName(appName);
        instance.setAppNameCn(appnameCN);
        instance.setStreamCount(streams);
        instance.setTopicCBName(topicName + dexcConfig.getCallbackTopicPostfix());
        instance.setCallbackRoute(callbackRoute);
        instance.setTopicName(topicName);
        instance.setRunnerClassName(dexcConfig.getCallbackRunnerCln());
        //instance.setPartitions(Utils.getDateString());
        instance.setRegDate(Utils.getDateString());
        //TODO 事务控制


        kafkaManager.createTopic(instance.getTopicName(), instance.getStreamCount(), dexcConfig.getTopicReplications());
        kafkaManager.createTopic(instance.getTopicCBName(), instance.getStreamCount(), dexcConfig.getTopicReplications());

        repository.addInstance(instance);
        return instance;
    }

    public AppInstance registerApp(String appName, String appnameCN, String callbackRoute, Integer partitions) throws Exception {
        int streams = (int) Math.rint(partitions / 2); //并发数为分区数的一半，一个流至少能处理一个分区数据。
        return registerApp(appName, appName, appnameCN, callbackRoute, partitions, streams);
    }

    public void init() {

        try {
            repository.getAppRepositoryCache().start();
        } catch (Exception e) {
            logger.error("start appRepositoryCache error:{} ", e.getMessage());
            return;
        }
        logger.info("Start appRepositoryCache:{} ", dexcConfig.getAppPath());

        addListener();

        zookeeperConnector.addConnectionStateListener(new ConnectionStateListener() {
            public void stateChanged(CuratorFramework client, ConnectionState newState) {
                logger.debug("zookeeper的状态变化：{}", newState);
                //消除僵尸消费
                //consumerConnectorManager.clearZombieConsumer();
                if (newState == ConnectionState.CONNECTED || newState == ConnectionState.RECONNECTED) {
                    try {
                        logger.info("CuratorFramework state changed: {}，重新注册消费监听", newState);
                        addListener();
                    } catch (Exception e) {
                        logger.info("CuratorFramework watcherAppsPath field!");
                    }
                }
            }
        });

    }


    private void addListener() {
        PathChildrenCacheListener listener = new PathChildrenCacheListener() {
            public void childEvent(CuratorFramework client, PathChildrenCacheEvent event) throws Exception {
                switch (event.getType()) {
                    case CHILD_ADDED: {
                        String path = event.getData().getPath();
                        String nodeFromPath = ZKPaths.getNodeFromPath(path);
                        //遍历进行consumer抢占，如果不是锁结点
                        if (!nodeFromPath.endsWith(dexcConfig.getLockedPostfix())) {
                            logger.debug("实例已发现Node added: {}", nodeFromPath);
                            for (Map.Entry<String, AppInstance> entry : repository.getAllInstance().entrySet()) {
                                consumerConnectorManager.checkAndConsumer(entry.getValue());
                            }
                            nodeService.updateNodeThread();
                        }
                        break;
                    }
                    case CHILD_UPDATED: {
                        String path = event.getData().getPath();
                        String nodeFromPath = ZKPaths.getNodeFromPath(path);
                        logger.debug("实例被修改Node update: {}", nodeFromPath);
                        consumerConnectorManager.removeConsumer(nodeFromPath);
                        consumerConnectorManager.checkAndConsumer(repository.findInstanceByAppId(nodeFromPath));
                        break;
                    }
                    case CHILD_REMOVED: {
                        String path = event.getData().getPath();
                        String nodeFromPath = ZKPaths.getNodeFromPath(path);
                        logger.debug("实例被删除Node removed: {}", nodeFromPath);
                        //如果app instance被删除，取消对topic_bk的消费监听
                        if (!nodeFromPath.endsWith(dexcConfig.getLockedPostfix())) {
                            consumerConnectorManager.removeConsumer(nodeFromPath);
                        }
//                        else {
//                            logger.debug("实例消费锁被删除Node removed: {}，先删除消费变量然后进行消费锁抢占", nodeFromPath);
//                            consumerConnectorManager.removeConsumer(nodeFromPath.replace(dexcConfig.getLockedPostfix(), ""));
//                        }

                        //遍历进行consumer抢占，场景是某app的消费结点node 宕机了，锁会被删除，其它结点进行继续消费
//                       for (Map.Entry<String, AppInstance> entry : repository.getAllInstance().entrySet()) {
//                            consumerConnectorManager.checkAndConsumer(entry.getValue());
//                        }
                        nodeService.updateNodeThread();
                        break;
                    }
                }
            }
        };

        repository.getAppRepositoryCache().getListenable().addListener(listener);
        logger.debug("AppRepositoryCache addListener : {}", dexcConfig.getAppPath());
    }


    public void removeApp(String appId) throws Exception {
        AppInstance instance = repository.findInstanceByAppId(appId);
//        if (instance != null) {
//            consumerConnectorManager.distory(appId);
//        }
        repository.removeInstance(instance);

        //删除Topic
        kafkaManager.deleteTopic(instance.getTopicName());
        kafkaManager.deleteTopic(instance.getTopicCBName());

    }

    public AppInstance findAppInstanceByAppName(String appname) throws Exception {
        return repository.findInstanceByAppName(appname);
    }

    public AppInstance findAppInstanceByAppId(String appId) throws Exception {
        return repository.findInstanceByAppId(appId);
    }

    public Map<String, AppInstance> getAllRegistedApp() throws Exception {
        return repository.getAllInstance();
    }

}
