package cn.gov.bjsat.dexc.scheduler;

import java.io.Serializable;

/**
 * Created by grf11_000 on 2015/10/6.
 */
public class SchedulerEntity implements Serializable {

    private String id;

    /**
     * 计划任务名称
     */
    private String name;
    private String instanceId;
    private String cronexp;
    private String status;
    private String content;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getCronexp() {
        return cronexp;
    }

    public void setCronexp(String cronexp) {
        this.cronexp = cronexp;
    }

    /**
     * 计划任务状态
     * @return
     */
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


    public String getInstanceId() {
        return instanceId;
    }

    public void setInstanceId(String instanceId) {
        this.instanceId = instanceId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
