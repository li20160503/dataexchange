package cn.gov.bjsat.dexc.scheduler;

import cn.bgonline.askit.module.base.spring.ApplicationContextUtils;
import org.quartz.Scheduler;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.quartz.MethodInvokingJobDetailFactoryBean;
import org.springframework.scheduling.quartz.SchedulerFactoryBean;

/**
 * Created by grf11_000 on 2015/10/26.
 */
public class Test1 {


    @Autowired
    ISchedulerTask task;

    public void t() {

//        SchedulerFactoryBean schedulerFactory = ApplicationContextUtils.getBean("schedulerFactory");
//        Scheduler scheduler = schedulerFactory.getObject();
//        try {
//
//            // create JOB
//            MethodInvokingJobDetailFactoryBean jobDetail = new MethodInvokingJobDetailFactoryBean();
//            jobDetail.setTargetObject(task);
//            jobDetail.setTargetMethod("producer");
//            //        jobDetail.setArguments();
//            jobDetail.setName("MyJobDetail");
//            jobDetail.setConcurrent(false);
//            jobDetail.afterPropertiesSet();
//
//            Trigger trigger = TriggerBuilder.newTrigger().withIdentity("trigger1","group1").
//            scheduler.scheduleJob(jobDetail.getObject(), trigger);
//            scheduler.start();
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        }


    }
}
