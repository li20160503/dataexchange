package cn.gov.bjsat.dexc.scheduler;

import cn.bgonline.askit.module.base.spring.ApplicationContextUtils;
import cn.gov.bjsat.dexc.app.AppInstance;
import cn.gov.bjsat.dexc.kafka.Producer4Instance;
import org.quartz.Job;
import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Date;

/**
 * Created by grf11_000 on 2015/10/26.
 */
public class SchedulerTask implements Job {

    private Logger logger = LoggerFactory.getLogger(this.getClass());


    public void execute(JobExecutionContext context) throws JobExecutionException {

        JobDataMap dataMap = context.getJobDetail().getJobDataMap();

        logger.debug("execute job: {} , app instance: {} ,content: {}"
                , context.getTrigger().getJobKey()
                , dataMap.get("topicname").toString()
                , dataMap.get("content").toString()
        );

        Producer4Instance producer = ApplicationContextUtils.getBean("producer4Instance");
        producer.sendData(dataMap.get("topicname").toString(), dataMap.get("content").toString());

    }
}
