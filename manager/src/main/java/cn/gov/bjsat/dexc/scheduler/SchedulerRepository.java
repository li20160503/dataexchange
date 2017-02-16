package cn.gov.bjsat.dexc.scheduler;

import cn.gov.bjsat.dexc.DexcConfig;
import cn.gov.bjsat.dexc.app.AppInstance;
import cn.gov.bjsat.dexc.app.AppInstanceRepository;
import cn.gov.bjsat.dexc.app.ZookeeperConnector;
import org.apache.curator.framework.CuratorFramework;
import org.quartz.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.SerializationUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by grf11_000 on 2015/10/26.
 */

@Component
public class SchedulerRepository {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private DexcConfig dexcConfig;

    @Autowired
    private AppInstanceRepository appInstanceRepository;

    private CuratorFramework zkClient;

    @Autowired
    private void setZkClient(ZookeeperConnector zookeeperConnector) {
        zkClient = zookeeperConnector.getZkClient();
    }


    @Autowired
    private Scheduler scheduler;



    public Boolean existJob(JobKey jobKey) {
        try {
            JobDetail jd = scheduler.getJobDetail(jobKey);
            if (jd == null) {
                return false;
            } else {
                return true;
            }
        } catch (SchedulerException e) {
            logger.error("获取job从scheduler中失败：{}", e.getMessage());
            return false;
        }
    }

    public List<SchedulerEntity> getAllJobss() {
        List<SchedulerEntity> jobs = new ArrayList<SchedulerEntity>();
        try {
            List<String> childs = zkClient.getChildren().forPath(dexcConfig.getSchedulerPath());
            for (String id : childs) {
                byte[] data = zkClient.getData().forPath(dexcConfig.getSchedulerPath() + "/" + id);
                SchedulerEntity entity = (SchedulerEntity) SerializationUtils.deserialize(data);
                entity.setStatus(scheduler.getTriggerState(buildTriggerKey(entity.getId())).name());
                jobs.add(entity);
            }
        } catch (Exception e) {
            logger.error("获取JOBS失败：{}", e.getMessage());
            return null;
        }
        return jobs;
    }


    /**
     * 切换job的状态，返回true正在运行，false暂停，null异常
     * @param id
     */
    public Boolean toggleJob(String id) {
        TriggerKey key = buildTriggerKey(id);
        try {
            //scheduler.pauseJob(jobKey);
            Trigger.TriggerState status =  scheduler.getTriggerState(key);
            logger.debug("Job的当前状态: job: {}, status:{}", id, scheduler.getTriggerState(key));
            if(status == Trigger.TriggerState.PAUSED){
                scheduler.resumeTrigger(key);
                logger.debug("切换job的状态: job: {}, status:{}", id, scheduler.getTriggerState(key));
                return true;
            }else if(status == Trigger.TriggerState.NORMAL){
                scheduler.pauseTrigger(key);
                logger.debug("切换job的状态: job: {}, status:{}", id, scheduler.getTriggerState(key));
                return false;
            }
            return null;
        } catch (SchedulerException e) {
            logger.error("暂停定时任务失败：{}, Trigger: {}", e.getMessage() , key);
            e.printStackTrace();
            return null;
        }
    }


    /**
     * 立即执行一次JOB
     * @param id
     * @return
     */
    public Boolean triggerJob(String id) {
        JobKey key = buildJobKey(id);
        try {
            scheduler.triggerJob(key);
            return true;
        } catch (SchedulerException e) {
            e.printStackTrace();
            return false;
        }
    }

    public SchedulerEntity addJob(SchedulerEntity entity) {
        try {
            zkClient.create().creatingParentsIfNeeded().forPath(dexcConfig.getSchedulerPath() + "/" + entity.getId(), SerializationUtils.serialize(entity));
            initScheduleJob();
            return entity;
        } catch (Exception e) {
            logger.error("创建计划任务失败：{} , {}", entity.getId(), entity.getName());
            return null;
        }
    }

    public Boolean removeJob(String id) {
        try {
            zkClient.delete().forPath(dexcConfig.getSchedulerPath() + "/" + id);
            JobKey jobKey = buildJobKey(id);
            scheduler.deleteJob(jobKey);
            return true;
        } catch (Exception e) {
            logger.error("删除计划任务失败：{}", id);
            return false;
        }
    }

    public void init(){
        //启动对apps 目录的动态监听，获取app列表，来查看已注册数据交换应用
        try {
            appInstanceRepository.getAppRepositoryCache().start();
        } catch (Exception e) {
            logger.error("start appInstanceRepository error:{} ", e.getMessage());
            return;
        }
    }

    private AppInstance getAppInstance(String id){
        AppInstance instance;
        try {
            byte[] appByte = zkClient.getData().forPath(dexcConfig.getAppPath() + "/" + id);
            instance = (AppInstance) SerializationUtils.deserialize(appByte);
            return instance;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public void initScheduleJob() {

        //初始添加已持久化的计划任务
        List<SchedulerEntity> jobs = getAllJobss();
        if (jobs == null) return;

        for (SchedulerEntity entity : jobs) {
            JobKey jobKey = buildJobKey(entity.getId());

            if (existJob(jobKey)) continue;

            AppInstance instance = getAppInstance(entity.getInstanceId()); //appInstanceRepository.findInstanceByAppId(entity.getInstanceId());

            if(instance == null){
                logger.error("添加计划任务失败，获取应用实例不能为Null: {}", entity.getName());
                continue;
            }

            JobDetail job = JobBuilder.newJob(SchedulerTask.class)
                    .usingJobData("topicname", instance.getTopicName())
                    .usingJobData("content", entity.getContent())
                    .withIdentity(jobKey).build();

            //"0/20 * * * * ?"
            Trigger trigger = TriggerBuilder.newTrigger().withIdentity(buildTriggerKey(entity.getId())).withSchedule(CronScheduleBuilder.cronSchedule(entity.getCronexp())).build();
            try {
                scheduler.scheduleJob(job, trigger);
                logger.debug("添加定时任务: {}， id: {}", entity.getName(), entity.getId());
            } catch (SchedulerException e) {
                logger.error("添加计划任务JOB失败：{}, {}, {}", entity.getId(), entity.getName(), e.getMessage());
            }
        }


    }

    private TriggerKey buildTriggerKey(String id){
        TriggerKey key = new TriggerKey("trigger_" + id, "GROUPDEXC_T");
        return key;
    }

    private JobKey buildJobKey(String id){
        JobKey key = new JobKey("job_" + id, "GROUPDEXC_J");
        return key;
    }

}
