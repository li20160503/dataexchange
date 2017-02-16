package cn.gov.bjsat.dexc.service;

import cn.gov.bjsat.dexc.scheduler.SchedulerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

/**
 * Created by grf11_000 on 2015/10/18.
 *
 */

public class ManagerApplicationListener implements ApplicationListener<ContextRefreshedEvent> {

    private Logger logger = LoggerFactory.getLogger(this.getClass());
    private String mvcContextName = "springServlet-servlet";
    private String rootContextName = "Root WebApplicationContext";

    @Autowired
    SchedulerRepository repository;

    public void onApplicationEvent(final ContextRefreshedEvent event) {

        String dname = event.getApplicationContext().getDisplayName();
        if(dname.equals(rootContextName)){
            logger.debug("==============初始化Begin=================");
            repository.init();
            repository.initScheduleJob();
            logger.debug("==============初始化End=================");
        }

        logger.debug("Application Event ContextRefreshedEvent: {}, Timestamp: {}", dname , event.getTimestamp());


    }


}