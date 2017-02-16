package cn.gov.bjsat.dexc.app;

import cn.gov.bjsat.dexc.DexcConfig;
import cn.gov.bjsat.dexc.Utils;
import cn.gov.bjsat.dexc.kafka.ConsumerConfig4Spring;
import cn.gov.bjsat.dexc.service.NodeService;
import org.apache.curator.RetryPolicy;
import org.apache.curator.framework.CuratorFramework;
import org.apache.curator.framework.CuratorFrameworkFactory;
import org.apache.curator.framework.state.ConnectionState;
import org.apache.curator.framework.state.ConnectionStateListener;
import org.apache.curator.retry.ExponentialBackoffRetry;
import org.apache.zookeeper.CreateMode;
import org.apache.zookeeper.data.Stat;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.net.Inet4Address;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by grf11_000 on 2015/10/7.
 */
public class ZookeeperConnector {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    private CuratorFramework zkClient;

    @Autowired
    private ThreadPoolTaskExecutor taskExecutor;


    @Autowired
    private DexcConfig dexcConfig;

    public void init() throws Exception {

        String connectString = dexcConfig.getZookeeperConnect();
        Integer sessionTimeout = Integer.valueOf(dexcConfig.getZookeeperSessionTimeoutms());
        Integer connectionTimeout = Integer.valueOf(dexcConfig.getZookeeperConnectionTimeoutms());

        RetryPolicy retryPolicy = new ExponentialBackoffRetry(3000, 3);
        zkClient = CuratorFrameworkFactory.builder().connectString(connectString)
                .namespace(dexcConfig.getRootPath())
                .retryPolicy(retryPolicy)
                .connectionTimeoutMs(connectionTimeout)
                .sessionTimeoutMs(sessionTimeout)
                .build();
        zkClient.start();

        logger.debug("zookeeper started , connectionString: {}", connectString);

        try {
            registerMe();
        } catch (Exception e) {
            logger.info("CuratorFramework registerMe field!:{}", e.getMessage() );
        }
        checkPath();

        addConnectionStateListener(new ConnectionStateListener() {
            public void stateChanged(CuratorFramework client, ConnectionState newState) {
                logger.info("CuratorFramework state changed: {}", newState);
                if (newState == ConnectionState.CONNECTED || newState == ConnectionState.RECONNECTED) {
                    try {
                        registerMe();
                    } catch (Exception e) {
                        logger.info("CuratorFramework registerMe field!:{}", e.getMessage() );
                    }
                }
            }
        });

    }

    public void addConnectionStateListener(ConnectionStateListener listener) {
        zkClient.getConnectionStateListenable().addListener(listener);
    }

    private void checkPath() {
        //ZKPaths.mkdirs(curatorFramework.getZookeeperClient(), "");
    }

    public void destroy() {
        this.zkClient.close();
    }

    //TODO 注册一个自身临时结点，检测自身的存在，使用本机 IP+Port
    @Autowired
    Environment env;
    private void registerMe() throws Exception {

        //只有子节点注册自己
        if (!env.acceptsProfiles("dexc-node")){return;}

        String uuid;
        Map<String, String> nodeSign = generateNodeSign();

        if (dexcConfig.getApplicationUUID() != null) {
            uuid = dexcConfig.getApplicationUUID();
        } else {
            //uuid = UUID.randomUUID().toString();
            uuid = nodeSign.get("md5key");
            dexcConfig.setApplicationUUID(uuid);
        }

        logger.debug("ApplicationUUID:{} ", uuid);

        String path = dexcConfig.getHeadPath() + "/" + uuid;

        //检查是否已存在
        //Stat stat = zkClient.checkExists().forPath(path);
        //if (stat != null) return;

        zkClient
                .create()
                .creatingParentsIfNeeded()
                .withMode(CreateMode.EPHEMERAL)
                .forPath(path, nodeSign.get("nodeInfo").getBytes());


    }

    /**
     * 生成一个结点的标识，通过主机名+IP+应用部署的物理磁盘路径
     *
     * @return
     */
    private Map<String, String> generateNodeSign() {

        Map<String, String> nodeSign = new HashMap<String, String>();
        String nodeInfo = "", md5key = "";
        try {
            nodeInfo += Inet4Address.getLocalHost().getHostName();
            nodeInfo += "||" + Inet4Address.getLocalHost().getHostAddress();
        } catch (UnknownHostException e) {
            logger.error("Get InetAddress Error :{} ", e.getMessage());
        }
        nodeInfo += "||" + System.getProperty("app.root");
        md5key = Utils.MD5(nodeInfo); //这个值基本是固定的，想不固定的话加入下面一行
        nodeInfo += "||" + Utils.getDateString();
        nodeInfo +=  "||" + String.valueOf(taskExecutor.getCorePoolSize()) + "||" + String.valueOf(taskExecutor.getActiveCount());
        nodeSign.put("md5key", md5key);
        nodeSign.put("nodeInfo", nodeInfo);

        logger.debug("nodeInfo:{} , md5key:{} ", nodeInfo, md5key);

        return nodeSign;
    }

    public CuratorFramework getZkClient() {
        return zkClient;
    }

}
