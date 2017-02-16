package cn.gov.bjsat.dexc.hsf;

import com.taobao.hsf.app.spring.util.HSFSpringConsumerBean;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.config.AbstractFactoryBean;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by grf11_000 on 2015/10/27.
 */
public class HSFSpringConsumerBeanFactory extends AbstractFactoryBean<HSFSpringConsumerBean> {


    private Logger logger = LoggerFactory.getLogger(this.getClass());

    private String version;
    private String group;
    private Integer timeout;

    @Override
    public Class<?> getObjectType() {
        return HSFSpringConsumerBean.class;
    }

    @Override
    public HSFSpringConsumerBean createInstance() throws Exception {
        HSFSpringConsumerBean hsfSpringConsumerBean = new HSFSpringConsumerBean();

        hsfSpringConsumerBean.setInterfaceName("cn.gov.bjsat.dexc.hsf.callback.HsfInterface");
        hsfSpringConsumerBean.setVersion(getVersion());
        hsfSpringConsumerBean.setGroup(getGroup());
//        hsfSpringConsumerBean.setClientTimeout(1000 * 60 * 60 * 2); //两小时
        //hsfSpringConsumerBean.setClientTimeout(1000 * 10 * 60 * 2);//
        hsfSpringConsumerBean.setClientTimeout(timeout);

        //异步不适合做大量并发提交，会导致HSF线程池溢出
        //List<String> methods = new ArrayList<String>();
        //methods.add("name:asyncCallMethod;type:future");
        //hsfSpringConsumerBean.setAsyncallMethods(methods);

        hsfSpringConsumerBean.init();

        return hsfSpringConsumerBean;
    }


    @Override
    public boolean isSingleton() {
        return false;
    }



    @Override
    public void afterPropertiesSet() throws Exception {
        super.afterPropertiesSet();

    }


    public <T> T getService() {
        try {
            return (T)(getObject().getObject());
        } catch (Exception e) {
            logger.error("创建回调接口实例失败：{}", e.getMessage());
            return null;
        }
    }


    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }


    public Integer getTimeout() {
        return timeout;
    }

    public void setTimeout(Integer timeout) {
        this.timeout = timeout;
    }
}
