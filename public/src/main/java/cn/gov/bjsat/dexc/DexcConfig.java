package cn.gov.bjsat.dexc;

/**
 * Created by grf11_000 on 2015/10/8.
 */
public class DexcConfig {

    private String rootPath;
    private String appPath;
    private String headPath;
    private String lockedPostfix;
    private String callbackTopicPostfix;
    private int topicReplications;
    private String applicationUUID;
    private String callbackRunnerCln;
    private String schedulerPath;
    private String zookeeperConnect;
    private String zookeeperSessionTimeoutms;
    private String zookeeperConnectionTimeoutms;

    public String getSchedulerPath() {
        return schedulerPath;
    }

    public void setSchedulerPath(String schedulerPath) {
        this.schedulerPath = schedulerPath;
    }

    public String getRootPath() {
        return rootPath;
    }

    public void setRootPath(String rootPath) {
        this.rootPath = rootPath;
    }

    public String getAppPath() {
        return appPath;
    }

    public void setAppPath(String appPath) {
        this.appPath = appPath;
    }

    public String getLockedPostfix() {
        return lockedPostfix;
    }

    public void setLockedPostfix(String lockedPostfix) {
        this.lockedPostfix = lockedPostfix;
    }

    public int getTopicReplications() {
        return topicReplications;
    }

    public void setTopicReplications(int topicReplications) {
        this.topicReplications = topicReplications;
    }


    public String getCallbackTopicPostfix() {
        return callbackTopicPostfix;
    }

    public void setCallbackTopicPostfix(String callbackTopicPostfix) {
        this.callbackTopicPostfix = callbackTopicPostfix;
    }

    public String getHeadPath() {
        return headPath;
    }

    public void setHeadPath(String headPath) {
        this.headPath = headPath;
    }

    public String getApplicationUUID() {
        return applicationUUID;
    }

    public void setApplicationUUID(String applicationUUID) {
        this.applicationUUID = applicationUUID;
    }

    public String getCallbackRunnerCln() {
        return callbackRunnerCln;
    }

    public void setCallbackRunnerCln(String callbackRunnerCln) {
        this.callbackRunnerCln = callbackRunnerCln;
    }


    public String getZookeeperConnect() {
        return zookeeperConnect;
    }

    public void setZookeeperConnect(String zookeeperConnect) {
        this.zookeeperConnect = zookeeperConnect;
    }

    public String getZookeeperSessionTimeoutms() {
        return zookeeperSessionTimeoutms;
    }

    public void setZookeeperSessionTimeoutms(String zookeeperSessionTimeoutms) {
        this.zookeeperSessionTimeoutms = zookeeperSessionTimeoutms;
    }

    public String getZookeeperConnectionTimeoutms() {
        return zookeeperConnectionTimeoutms;
    }

    public void setZookeeperConnectionTimeoutms(String zookeeperConnectionTimeoutms) {
        this.zookeeperConnectionTimeoutms = zookeeperConnectionTimeoutms;
    }
}
