package cn.gov.bjsat.dexc.kafka;

import kafka.admin.TopicCommand;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Arrays;

/**
 * Created by grf11_000 on 2015/10/7.
 */

@Component
public class KafkaManager {

    private Logger logger = LoggerFactory.getLogger(this.getClass());


    @Autowired
    private ConsumerConfig4Spring zkConfig;

    public void createTopic(String name, Integer partitions, Integer replications) {

//        String[] options = new String[]{
//                "--create",
//                "--zookeeper",
//                "zk_host:port/chroot",
//                "--partitions",
//                "20",
//                "--topic",
//                "my_topic_name",
//                "--replication-factor",
//                "3",
//                "--config",
//                "x=y"
//        };
//        TopicCommand.main(options);
//
        String connectString = zkConfig.getProps().getProperty("zookeeper.connect");

        String[] options = new String[]{
                "--create",
                "--zookeeper",
                connectString,
                "--partitions",
                partitions.toString(),
                "--topic",
                name,
                "--replication-factor",
                replications.toString()
        };

        logger.debug("创建TOPIC，{}", Arrays.toString(options));

       // TopicCommand.main(options);

        // ZkClient zkClient = new ZkClient(new CuratorZKClientBridge)
//        AdminUtils.createTopic();

    }


    public void deleteTopic(String name) {

        String connectString = zkConfig.getProps().getProperty("zookeeper.connect");
        String[] options = new String[]{
                "--delete",
                "--zookeeper",
                connectString,
                "--topic",
                name
        };
        logger.debug("删除TOPIC，{}", Arrays.toString(options));

       // TopicCommand.main(options);

    }
}
