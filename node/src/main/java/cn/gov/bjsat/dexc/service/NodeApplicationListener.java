package cn.gov.bjsat.dexc.service;

import cn.gov.bjsat.dexc.app.AppInstanceManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;

/**
 * Created by grf11_000 on 2015/10/18.
 *
 */

public class NodeApplicationListener implements ApplicationListener<ContextRefreshedEvent> {

    private Logger logger = LoggerFactory.getLogger(this.getClass());
    private String mvcContextName = "springServlet-servlet";
    private String rootContextName = "Root WebApplicationContext";

    @Autowired
    AppInstanceManager appInstanceManager;

    public void onApplicationEvent(final ContextRefreshedEvent event) {

        String dname = event.getApplicationContext().getDisplayName();
        if(dname.equals(rootContextName)){
            logger.debug("==============初始化回调数据监听Begin=================");
            appInstanceManager.init();
            logger.debug("==============初始化回调数据监听End=================");
        }

    }


}