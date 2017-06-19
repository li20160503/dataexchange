package cn.gov.bjsat.dexc;

import cn.gov.bjsat.dexc.app.AppInstance;

import cn.gov.bjsat.dexc.hsf.callback.HsfInterface;
import cn.gov.bjsat.dexc.hsf.entity.DexcRequestBody;
import cn.gov.bjsat.dexc.hsf.entity.DexcResponseBody;
import cn.gov.bjsat.security.accesskey.AccountUtil;
import com.alibaba.dubbo.config.ApplicationConfig;
import com.alibaba.dubbo.config.ReferenceConfig;
import com.alibaba.dubbo.config.RegistryConfig;
import com.fasterxml.jackson.databind.ObjectMapper;
import kafka.consumer.ConsumerIterator;
import kafka.consumer.KafkaStream;
import kafka.message.MessageAndMetadata;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.UnsupportedEncodingException;

/**
 * Created by grf11_000 on 2015/10/6.
 */
public class ResultCallbackRunner implements IResultCallback {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    private KafkaStream stream;
    private Integer threadNumber;
    private AppInstance instance;

    ObjectMapper objectMapper;


    public void run() {
        Logger instanceLogger = LoggerFactory.getLogger("LOG_" + instance.getAppName());

      /*  HSFSpringConsumerBeanFactory hsfFactory = new HSFSpringConsumerBeanFactory();
        hsfFactory.setGroup(instance.getCallbackHsfGroupname());
        hsfFactory.setVersion(instance.getCallbackHsfVersino());
        if(instance.getCallbackRoute() != null) {
            hsfFactory.setTimeout(Integer.valueOf(instance.getCallbackRoute()));
        }else{
            hsfFactory.setTimeout(2000);
        }
        HsfInterface service = hsfFactory.getService();*/

        ApplicationConfig application = new ApplicationConfig();
        application.setName("dubbo-node-consumer-2");
        //application.setRegistry(new RegistryConfig("zookeeper://localhost:2181"));
        application.setRegistry(new RegistryConfig(Utils.getZookeeperConfig()));
        ReferenceConfig<HsfInterface> reference = new ReferenceConfig<HsfInterface>();

        reference.setConnections(10);
        reference.setTimeout(Integer.valueOf(instance.getCallbackRoute()));
        reference.setApplication(application);
        reference.setInterface(HsfInterface.class);
        reference.setGroup(instance.getCallbackHsfGroupname());
        reference.setVersion(instance.getCallbackHsfVersino());

         HsfInterface service = reference.get();


        ConsumerIterator<byte[], byte[]> it = stream.iterator();

        while (it.hasNext()) {
            MessageAndMetadata<byte[], byte[]> val = it.next();
            String msg = "";
            try {
                msg = new String(val.message(), "utf-8");
            } catch (UnsupportedEncodingException e) {
                instanceLogger.error("数据转码异常：{}, 内容：{}", e.getMessage(), msg);
                e.printStackTrace();
                continue;
            }

            try {

                //计数
//                AtomicLong _atomiccount = NodeApplicationListener.RUNNERCOUNTER.get(instance.getAppName());
//                if (_atomiccount == null) {
//                    _atomiccount = new AtomicLong(1);
//                    NodeApplicationListener.RUNNERCOUNTER.putIfAbsent(instance.getAppName(), _atomiccount);
//                }
                Long instanceCount = 0L; //_atomiccount.incrementAndGet();

                // NodeApplicationListener.RUNNERCOUNTER.put(instance.getAppName(), )
                String requestBody = buildHSFRequest(instance, msg);

                instanceLogger.debug("异步回调数据, 线程号：{}, 消息分区：{}, Offset：{}, instance: {}, group: {}, version: {}, 调用参数: {}, 计数：{}",
                        threadNumber,
                        val.partition(),
                        val.offset(),
                        instance.getAppNameCn(),
                        instance.getCallbackHsfGroupname(),
                        instance.getCallbackHsfVersino(),
                        subMsg(requestBody, 300),
                        instanceCount);

                if(requestBody != null) {
                    service.asyncCallMethod(requestBody);
                }
                // instanceLogger.debug("异步调用数据回调服务: 结束");
            } catch (Exception e) {
                //TODO 容错
                instanceLogger.error("调用HSF失败： group:{}, versin:{},原始数据:{}, err:{}", instance.getCallbackHsfGroupname(), instance.getCallbackHsfVersino(), msg, e.getStackTrace() + e.getMessage());
                e.printStackTrace();
            }
        }


        logger.info("ShutDown Thread :{}, instance: {}", threadNumber, instance.getAppNameCn());

        shutDown();
    }

    private String subMsg(String val, Integer len) {
        if (val == null) {
            return "";
        } else {
            Integer _len = val.length();
            if(_len < len) len = _len;
            return val.substring(0, len);
        }
    }

    private String buildHSFRequest(AppInstance instance, String val) {
        DexcRequestBody requestBody;
        long timeStamp = System.currentTimeMillis();


        try {
            requestBody = objectMapper.readValue(val, DexcRequestBody.class);
            String accessKey = AccountUtil.createAccessKey(instance.getFromToken(), timeStamp, requestBody.getTranseqId());

            requestBody.setAppId(instance.getAppId());
            requestBody.setAppKey(instance.getAppKey());
            requestBody.setAccessKey(accessKey);
            requestBody.setChannelId(instance.getChannelId());
            //requestBody.setTranseqId("00000000001");
            requestBody.setTimeStamp(timeStamp);
        } catch (Exception e) {
            logger.error("数据转换失败, AppInstance:{}  ,DexcRequestBody：{}", instance.getAppName(), e.getMessage());
            e.printStackTrace();
            return null;
        }

        return requestBody.toJson();
    }

    private void shutDown() {
        System.out.println("Shutting down Thread: " + threadNumber);
    }

    public Integer getThreadNumber() {
        return this.threadNumber;
    }

    public IResultCallback initParameters(KafkaStream stream, Integer threadNumber, AppInstance _instance) {
        this.threadNumber = threadNumber;
        this.stream = stream;
        this.instance = _instance;
        objectMapper = new ObjectMapper();
        return this;
    }

    public static void main(String[] args) {
        String timeout = "6000000";
        System.out.println(Integer.valueOf(timeout));
//        DexcResponseBody responseBody = new DexcResponseBody();
//        responseBody.setSuccess(true);
//        responseBody.setData("test data..");
//
//        DexcRequestBody requestBody = new DexcRequestBody();
//        requestBody.setData(responseBody);
//
//        System.out.println(requestBody.toJson());

    }

}