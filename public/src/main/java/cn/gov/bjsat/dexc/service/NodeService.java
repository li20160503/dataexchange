package cn.gov.bjsat.dexc.service;

import org.apache.curator.framework.CuratorFramework;
import cn.gov.bjsat.dexc.DexcConfig;
import cn.gov.bjsat.dexc.app.AppInstance;
import cn.gov.bjsat.dexc.app.IAppInstanceRepository;
import cn.gov.bjsat.dexc.app.ZookeeperConnector;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.StringArrayPropertyEditor;
import org.springframework.context.annotation.Profile;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Component;

import java.util.*;

/**
 * Created by grf11_000 on 2015/10/19.
 */

@Component
public class NodeService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    private CuratorFramework zkClient;

    @Autowired
    DexcConfig dexcConfig;

    @Autowired
    private ThreadPoolTaskExecutor taskExecutor;

    @Autowired
    IAppInstanceRepository repository;

    @Autowired
    public void setZkClient(ZookeeperConnector zookeeperConnector) {
        this.zkClient = zookeeperConnector.getZkClient();
    }


    /**
     * 获取Node信息通过ID
     */
    public String getNodeInfo(String id) {
        String value = "";
        try {
            value = new String(zkClient.getData().forPath(dexcConfig.getHeadPath() + "/" + id));
        } catch (Exception e) {
            logger.error("获取getNodeInfo信息失败：{}", e.getMessage());
            return null;
        }
        return value;
    }

    /**
     * 获取Node信息通过App Instance
     */
    public String getNodeInfoByConsumerInstance(String id) {
        String value = "";
        try {
            String nodeid = new String(zkClient.getData().forPath(dexcConfig.getAppPath() + "/" + id + dexcConfig.getLockedPostfix()));
            value += nodeid + "||";
            value += new String(zkClient.getData().forPath(dexcConfig.getHeadPath() + "/" + nodeid));
        } catch (Exception e) {
            logger.error("获取getNodeInfo信息失败：{}", e.getMessage());
            return null;
        }
        return value;
    }

    /**
     * 获取所有在线数据回调处理Node服务
     */
    public List<Map<String, String>> getNodeHeadInfo() {
        List<Map<String, String>> nodes = new ArrayList<Map<String, String>>();
        try {
            List<String> keys = zkClient.getChildren().forPath(dexcConfig.getHeadPath());
            for (String key : keys) {
                String value = new String(zkClient.getData().forPath(dexcConfig.getHeadPath() + "/" + key));
                Map<String, String> node = new HashMap<String, String>();
                node.put("key", key);
                node.put("value", value);
                nodes.add(node);
            }
        } catch (Exception e) {
            logger.error("获取head信息失败：{}", e.getMessage());
            return null;
        }
        return nodes;
    }


    /**
     * 根据Node Id 获取其消费的App信息
     *
     * @param nodeid
     * @return
     */
    public List<AppInstance> getNodeConsumerInstance(String nodeid) {
        List<AppInstance> instances = new ArrayList<AppInstance>();
        try {
            List<String> keys = zkClient.getChildren().forPath(dexcConfig.getAppPath());
            for (String key : keys) {
                logger.debug("getNodeConsumerInstance key:{} ", key);
                if (key.endsWith(dexcConfig.getLockedPostfix())) {
                    String value = new String(zkClient.getData().forPath(dexcConfig.getAppPath() + "/" + key));
                    if (value.equals(nodeid)) {
                        String appId = key.replace(dexcConfig.getLockedPostfix(), "");
                        instances.add(repository.findInstanceByAppId(appId));
                    }
                }
            }
        } catch (Exception e) {
            logger.error("获取Node消费App Instanc信息失败：{}， Node: {}", e.getMessage(), nodeid);
            return null;
        }
        return instances;
    }


    /**
     * 根据Node Id 获取线程使用情况
     *
     * @param nodeid
     * @return
     */
    public Map<String, String> getNodeConfig(String nodeid) {

        Map<String, String> sb = new HashMap<String, String>();

        String nodePath = dexcConfig.getHeadPath() + "/" + nodeid;
        try {
            String[] nodeStr = (new String(zkClient.getData().forPath(nodePath))).split("\\|\\|");
            sb.put("CorePoolSize", nodeStr[4]);
            sb.put("ActiveCount", nodeStr[5]);
        } catch (Exception e) {
            logger.error("读取结点信息失败：{}, {}", e.getMessage(), nodeid);
        }

        return sb;

    }


    /**
     * 更新线程信息，更新线程被占用的情况，总数和活动线程。
     *
     * @return
     */
    public void updateNodeThread() {

        String threadInfo = String.valueOf(taskExecutor.getCorePoolSize()) + "||" + String.valueOf(taskExecutor.getActiveCount());

        String nodePath = dexcConfig.getHeadPath() + "/" + dexcConfig.getApplicationUUID();

        logger.debug("更新线程信息：{}", nodePath);

        try {
            String[] nodeStr = (new String(zkClient.getData().forPath(nodePath))).split("\\|\\|");
            String nodeInfo = nodeStr[0] + "||" + nodeStr[1] + "||" + nodeStr[2] + "||" + nodeStr[3] + "||" + threadInfo;
            zkClient.setData().forPath(nodePath, nodeInfo.getBytes());
        } catch (Exception e) {
            logger.error("更新更新信息失败：{}", e.getMessage());
        }

    }


}
