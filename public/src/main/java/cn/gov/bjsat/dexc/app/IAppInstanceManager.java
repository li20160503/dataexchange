package cn.gov.bjsat.dexc.app;

import kafka.javaapi.consumer.ConsumerConnector;

import java.util.List;
import java.util.Map;

/**
 * Created by grf11_000 on 2015/10/6.
 */

/**
 *  注册的实例管理器
 */
public interface IAppInstanceManager {

    /**
     *  注册新的实例，topic名称同appName
     *
     * @return AppInstance 实例
     * @throws Exception
     */
    public AppInstance registerApp(AppInstance appInstance) throws Exception;

    /**
     *  修改实例
     *
     * @return AppInstance 实例
     * @throws Exception
     */
    public AppInstance updateApp(AppInstance appInstance) throws Exception;

    /**
     *  注册新的实例，topic名称同appName
     *
     * @param appName 应用英文名
     * @param appnameCN 应用中文名
     * @param partitions 数据分区数
     * @return AppInstance 实例
     * @param callbackRoute 数据回调接口
     * @throws Exception
     */
    public AppInstance registerApp(String appName, String appnameCN, String callbackRoute, Integer partitions) throws Exception;

    /**
     *  注册新的应用，暂时没有指定数据备份数，默认是2
     *
     * @param appName
     * @param topicName 数据topic名称
     * @param appnameCN
     * @param partitions 分区数
     * @param streams 数据处理并发数
     * @param callbackRoute 数据回调接口
     * @return
     * @throws Exception
     */
    public AppInstance registerApp(String appName, String topicName, String appnameCN, String callbackRoute, Integer partitions, Integer streams) throws Exception;

    /**
     *  删除已注册的应用，同时会停止对回调topic的监听，为了数据安全，相关topic手动删除
     * @param appId
     * @throws Exception
     */
    public void removeApp(String appId) throws Exception;

    /**
     *  查找注册的实例，通过appid
     * @param appId
     * @return
     * @throws Exception
     */
    public AppInstance findAppInstanceByAppId(String appId) throws Exception;

    /**
     *  查找的呢注册的实例
     * @return
     * @throws Exception
     */
    public Map<String, AppInstance> getAllRegistedApp() throws Exception;

    /**
     * 查找注册的实例，通过appname
     * @param name
     * @return
     * @throws Exception
     */
    public AppInstance findAppInstanceByAppName(String name) throws Exception;

}
