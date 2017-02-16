package cn.gov.bjsat.dexc.hsf.service;

import cn.gov.bjsat.dexc.app.AppInstance;
import cn.gov.bjsat.dexc.app.AppInstanceRepository;
import cn.gov.bjsat.dexc.hsf.callback.HsfDexcInterface;
import cn.gov.bjsat.dexc.hsf.entity.DexcRequestBody;
import cn.gov.bjsat.dexc.kafka.Producer4Instance;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by grf11_000 on 2015/10/27.
 */

public class DexcService implements HsfDexcInterface {

    private Logger logger = LoggerFactory.getLogger(this.getClass());


    Producer4Instance producer;

    ObjectMapper objectMapper;

    AppInstanceRepository repository;

    /**
     *
     * @param value
     */
//    @SecureValid
    public void asyncCallMethod(String value) {
        DexcRequestBody requestBody ;
        logger.debug("收到任务处理数据，{}", value);
        try {
            requestBody = objectMapper.readValue(value,DexcRequestBody.class );
            AppInstance instance = repository.findInstanceByAppId(requestBody.getAppId());
            if(instance == null){
                logger.error("无效的app id，{}", requestBody.getAppId());
                return;
            }
            producer.sendData(instance.getTopicName(), requestBody.toJson());
        } catch (Exception e) {
            logger.error("asyncCallMethod调用失败，{}", e.getMessage());
            e.printStackTrace();
        }
    }

    public void setProducer(Producer4Instance producer) {
        this.producer = producer;
    }

    public void setObjectMapper(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public void setRepository(AppInstanceRepository repository) {
        this.repository = repository;
    }
}
