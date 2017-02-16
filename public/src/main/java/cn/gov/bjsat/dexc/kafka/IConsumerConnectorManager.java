package cn.gov.bjsat.dexc.kafka;

import kafka.javaapi.consumer.ConsumerConnector;
import cn.gov.bjsat.dexc.app.AppInstance;

import java.util.Map;

/**
 * Created by grf11_000 on 2015/10/7.
 */

/**
 * 消费管理器
 */
public interface IConsumerConnectorManager {

    /**
     * 创建一个消费，一个应用，一个消费topic
     *
     * @param instance
     * @return
     * @throws ClassNotFoundException
     * @throws IllegalAccessException
     * @throws InstantiationException
     */
    public ConsumerConnector createConsumerConnector(AppInstance instance) throws ClassNotFoundException, IllegalAccessException, InstantiationException;

    /**
     * 注销一个消费处理器
     *
     * @param appId
     */
    public void distory(String appId);


    /**
     * 判断实例是否已有一个消费实例
     *
     * @param groupName
     * @return
     */
    public Boolean consumerIsExists(String groupName);

    /**
     * 获取一个消费处理器通过 appId
     *
     * @param appId
     * @return
     */
    public ConsumerConnector getConsumerByAppId(String appId);

    /**
     * 通过检测此实例的消费topic是否已被处理中决定建立消费处理器
     *
     * @param instance
     */
    public void checkAndConsumer(AppInstance instance);


    /**
     * 移除一个消费处理器，针对一个appId。
     *
     * @param appId
     */
    public void removeConsumer(String appId);

    /**
     * 消除僵尸消费
     */
    public void clearZombieConsumer();


}
