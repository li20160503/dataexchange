package cn.gov.bjsat.dexc.kafka;

import kafka.consumer.ConsumerConfig;

import java.util.Properties;

/**
 * Created by grf11_000 on 2015/10/6.
 */
public class ConsumerConfig4Spring {

    public Properties getProps() {
        return props;
    }

    public void setProps(Properties props) {
        this.props = props;
    }

    private Properties props;

    /**
     *  生成consumer配置
     * @param groupId 各个中心的groupid不同，在使用时指定
     * @return
     */
    public ConsumerConfig generateConsumerConfig(String groupId){
        props.remove("group.id");
        props.put("group.id", groupId);
        ConsumerConfig consumerConfig = new ConsumerConfig(props);
        return consumerConfig;
    }

}
