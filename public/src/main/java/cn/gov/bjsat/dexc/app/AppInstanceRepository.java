package cn.gov.bjsat.dexc.app;

import org.apache.curator.framework.CuratorFramework;
import org.apache.curator.framework.recipes.cache.ChildData;
import org.apache.curator.framework.recipes.cache.PathChildrenCache;
import org.apache.curator.utils.ZKPaths;
import cn.gov.bjsat.dexc.DexcConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.SerializationUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by grf11_000 on 2015/10/7.
 */

@Component
public class AppInstanceRepository implements IAppInstanceRepository {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private DexcConfig dexcConfig;

    private PathChildrenCache appRepositoryCache = null;

    @Autowired
    private void init(ZookeeperConnector zookeeperConnector){
        zkClient = zookeeperConnector.getZkClient();

        /*
        对应用池进行监听
        1. 如果有新的应用被添加触发添加consumer
        1. 如果有结点的_LOCKED_消失，也触发添加consumer
        */
        appRepositoryCache = new PathChildrenCache(zkClient, dexcConfig.getAppPath(), true);

    }

    private CuratorFramework zkClient;

    public AppInstance findInstanceByAppId(String appId) {
        Map<String, AppInstance> instances = getAllInstance();
        return instances.get(appId);
    }

    public AppInstance findInstanceByAppName(String appName) {
        Map<String, AppInstance> instances = getAllInstance();
        for (Map.Entry<String, AppInstance> entry : instances.entrySet()) {
            if (entry.getValue().getAppName().equals(appName)) {
                return entry.getValue();
            }
        }
        return null;
    }


    public void addInstance(AppInstance instance) throws Exception {
        zkClient.create().creatingParentsIfNeeded()
                .forPath(dexcConfig.getAppPath() + "/" + instance.getAppId(), SerializationUtils.serialize(instance));
    }

    public void updateInstance(AppInstance instance) throws Exception {
        zkClient.setData()
                .forPath(dexcConfig.getAppPath() + "/" + instance.getAppId(), SerializationUtils.serialize(instance));
    }

    public void removeInstance(AppInstance instance) throws Exception {
        zkClient.delete().forPath(dexcConfig.getAppPath() + "/" + instance.getAppId());
    }


    public Map<String, AppInstance> getAllInstance(){

        Map<String, AppInstance> instances = new HashMap();
        logger.debug("AppRepositoryCache Count: {}, has locked node", appRepositoryCache.getCurrentData().size());
        String appId = "";

        for (ChildData app : appRepositoryCache.getCurrentData()) {
            appId = ZKPaths.getNodeFromPath(app.getPath());
            if (!appId.endsWith(dexcConfig.getLockedPostfix())) {
                AppInstance instance = (AppInstance) SerializationUtils.deserialize(app.getData());
                instances.put(appId, instance);
            }
        }

        return instances;
    }



    public void destroy() {
    }


    public PathChildrenCache getAppRepositoryCache() {
        return appRepositoryCache;
    }

}
