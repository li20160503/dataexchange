package cn.gov.bjsat.dexc.app;

import org.apache.curator.framework.recipes.cache.PathChildrenCache;

import java.util.Map;

/**
 * Created by grf11_000 on 2015/10/7.
 */

/**
 *  实例存储管理器
 */
public interface IAppInstanceRepository {

    /**
     *  从zk中查找实例，通过appid
     * @param appId
     * @return
     * @throws Exception
     */
    AppInstance findInstanceByAppId(String appId);

    /**
     *  从zk中查找实例，通过appName
     * @param appName
     * @return
     * @throws Exception
     */
    AppInstance findInstanceByAppName(String appName);

    /**
     *  添加序列化后的实例到zk
     * @param instance
     * @throws Exception
     */
    void addInstance(AppInstance instance) throws Exception;

    /**
     *  更新实例到zk
     * @param instance
     * @throws Exception
     */
    void updateInstance(AppInstance instance) throws Exception;

    /**
     * 移除一个应用
     * @param instance
     * @throws Exception
     */
    void removeInstance(AppInstance instance) throws Exception;

    /**
     * 返回所有已注册的应用，存放在Zookeeper中，考虑到分布式，不考虑缓存，以后可以采用监听的方式
     * @return
     * @throws Exception
     */
    Map<String, AppInstance> getAllInstance();

    /**
     *  返回所有缓存后的实例集合
     * @return
     */
    public PathChildrenCache getAppRepositoryCache();


}
