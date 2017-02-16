package cn.gov.bjsat.dexc.scheduler;

import org.quartz.Scheduler;
import org.quartz.impl.StdSchedulerFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.config.AbstractFactoryBean;

/**
 * Created by grf11_000 on 2015/10/26.
 */
public class SchedulerFactoryBean extends AbstractFactoryBean<Scheduler>  {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    private Scheduler scheduler;

    @Override
    public Class<?> getObjectType() {
        return Scheduler.class;
    }

    @Override
    protected Scheduler createInstance() throws Exception {
        scheduler = StdSchedulerFactory.getDefaultScheduler();
        scheduler.start();
        logger.debug("任务定时器启动");
        return scheduler;
    }


}
