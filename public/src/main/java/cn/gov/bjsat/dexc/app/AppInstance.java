package cn.gov.bjsat.dexc.app;

import java.io.Serializable;

/**
 * Created by grf11_000 on 2015/10/6.
 */
public class AppInstance implements Serializable {

    private String appId;
    private String appKey;
    private String appName; //可用作groupName，英文或拼音，不能重名
    private String topicName;
    private String topicCBName; //数据回流topic name
    private String appNameCn; //用于显示的可读名称
    private Integer streamCount; //原并发数，改用为replications，复制品数，避免因旧数据产生反系列化的异常
    private Integer partitions; //分区数和处理线程数
    private String runnerClassName;
    private String callbackRoute; //回调，暂时不使用，改用为callbackHsfTimeout 20160125，避免因旧数据产生反系列化的异常
    private String regDate; //注册日期

    private String callbackHsfGroupname;    //回调
    private String callbackHsfVersino;  //回调版本
    private String fromToken;
    private String channelId;


    public String getRegDate() {
        return regDate;
    }

    public void setRegDate(String regDate) {
        this.regDate = regDate;
    }

    public String getRunnerClassName() {
        return runnerClassName;
    }

    public void setRunnerClassName(String runnerClassName) {
        this.runnerClassName = runnerClassName;
    }

    public String getAppId() {
        return appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public String getAppKey() {
        return appKey;
    }

    public void setAppKey(String appKey) {
        this.appKey = appKey;
    }

    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName;
    }

    public String getAppNameCn() {
        return appNameCn;
    }

    public void setAppNameCn(String appNameCn) {
        this.appNameCn = appNameCn;
    }


    public String getTopicCBName() {
        return topicCBName;
    }

    public void setTopicCBName(String topicCBName) {
        this.topicCBName = topicCBName;
    }

    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }

    public Integer getStreamCount() {
        return streamCount;
    }

    public void setStreamCount(Integer streamCount) {
        this.streamCount = streamCount;
    }


    public String getCallbackRoute() {
        return callbackRoute;
    }

    public void setCallbackRoute(String callbackRoute) {
        this.callbackRoute = callbackRoute;
    }

    public Integer getPartitions() {
        return partitions;
    }

    public void setPartitions(Integer partitions) {
        this.partitions = partitions;
    }

    public String getCallbackHsfGroupname() {
        return callbackHsfGroupname;
    }

    public void setCallbackHsfGroupname(String callbackHsfGroupname) {
        this.callbackHsfGroupname = callbackHsfGroupname;
    }

    public String getCallbackHsfVersino() {
        return callbackHsfVersino;
    }

    public void setCallbackHsfVersino(String callbackHsfVersino) {
        this.callbackHsfVersino = callbackHsfVersino;
    }

    public String getFromToken() {
        return fromToken;
    }

    public void setFromToken(String fromToken) {
        this.fromToken = fromToken;
    }

    public String getChannelId() {
        return channelId;
    }

    public void setChannelId(String channelId) {
        this.channelId = channelId;
    }
}
