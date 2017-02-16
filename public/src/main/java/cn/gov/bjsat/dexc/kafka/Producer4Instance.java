package cn.gov.bjsat.dexc.kafka;

import kafka.javaapi.producer.Producer;
import kafka.producer.KeyedMessage;
import cn.gov.bjsat.dexc.app.AppInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by grf11_000 on 2015/10/7.
 */

@Component
public class Producer4Instance {

    @Autowired
    Producer producer;


    public void sendData(AppInstance instance, String str) {
        sendData(instance, null, str);
    }

    //推荐指定key，kafka会取模平均分布到每个分区，key可以是一个从1累加的数字。
    //不指定key会在一个阶段随机到一个分区
    public void sendData(AppInstance instance, String key, String value) {
        KeyedMessage<String, String> data;

        if (key != null) {
            data = new KeyedMessage(instance.getTopicName(), key, value);
        } else {
            data = new KeyedMessage(instance.getTopicName(), value);
        }
        producer.send(data);
    }


    public void sendCBData(AppInstance instance, String str) {
        sendCBData(instance, null, str);
    }

    public void sendCBData(AppInstance instance, String key, String value) {
        KeyedMessage<String, String> data;

        if (key != null) {
            data = new KeyedMessage(instance.getTopicCBName(), key, value);
        } else {
            data = new KeyedMessage(instance.getTopicCBName(), value);
        }
        producer.send(data);
    }

    public void sendData(String topicname, String value) {
        KeyedMessage<String, String> data;
        data = new KeyedMessage(topicname, value);
        producer.send(data);
    }

}
