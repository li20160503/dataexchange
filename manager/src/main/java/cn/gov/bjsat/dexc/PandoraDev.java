package cn.gov.bjsat.dexc;

import cn.gov.bjsat.dexc.hsf.service.DexcService;
import com.taobao.hsf.app.spring.util.HSFSpringProviderBean;
import com.taobao.hsf.standalone.HSFEasyStarter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;

import java.util.Properties;

/**
 * Created by grf11_000 on 2015/10/27.
 */
public class PandoraDev {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    DexcService dexcService;

    @Autowired
    Environment env;

    public void init(){
        HSFEasyStarter.start("hsfRelease", "2_5_150420");

//        <!--<bean class="com.taobao.hsf.app.spring.util.HSFSpringProviderBean" init-method="init">-->
//        <!--<property name="serviceInterface" value="cn.gov.bjsat.dexc.hsf.callback.HsfDexcInterface"/>-->
//        <!--<property name="serviceVersion" value="1.0.0"/>-->
//        <!--<property name="serviceGroup" value="DEXCSERVICE"/>-->
//        <!--<property name="target" ref="dexcService"/>-->
//        <!--</bean>-->


        HSFSpringProviderBean hsfSpringProviderBean = new HSFSpringProviderBean();
        hsfSpringProviderBean.setServiceInterface("cn.gov.bjsat.dexc.hsf.callback.HsfDexcInterface");
        hsfSpringProviderBean.setServiceVersion("1.0.0");
        hsfSpringProviderBean.setServiceGroup("DEXCSERVICE");
        hsfSpringProviderBean.setTarget(dexcService);

        

        try {
            hsfSpringProviderBean.init();
        } catch (Exception e) {
            logger.error(e.getMessage());
        }

    }

}
