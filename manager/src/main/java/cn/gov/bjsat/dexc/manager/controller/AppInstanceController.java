package cn.gov.bjsat.dexc.manager.controller;

import cn.bgonline.askit.module.base.web.BaseController;
import cn.bgonline.askit.module.base.web.ResponseJsonEntity;
import cn.gov.bjsat.dexc.app.AppInstance;
import cn.gov.bjsat.dexc.app.AppInstanceRepository;
import cn.gov.bjsat.dexc.app.IAppInstanceManager;
import cn.gov.bjsat.dexc.kafka.Producer4Instance;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @author aliencode
 * @date 14-1-21
 */

@Controller
@RequestMapping("/app")
public class AppInstanceController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    IAppInstanceManager appInstanceManager;

    @Autowired
    Producer4Instance producer;


    /**
     * @throws JsonProcessingException
     */
    @RequestMapping("/{id}")
    @ResponseBody
    public ResponseEntity<ResponseJsonEntity<AppInstance>> getApp(
            @PathVariable String id
    ) throws Exception {


        AppInstance app = appInstanceManager.findAppInstanceByAppId(id);

        ResponseJsonEntity rje = new ResponseJsonEntity(app);
        return new ResponseEntity(rje, HttpStatus.OK);

    }


    /**
     * @throws JsonProcessingException
     */
    @RequestMapping("/regapp")
    @ResponseBody
    public ResponseEntity<ResponseJsonEntity<AppInstance>> regApp(
            @RequestBody AppInstance app
    ) throws Exception {

        logger.debug("注册APP，{}，{}，{}", app.getAppName(), app.getTopicName(), app.getAppNameCn());

        app = appInstanceManager.registerApp(app);

        ResponseJsonEntity rje = new ResponseJsonEntity(app);

        return new ResponseEntity(rje, HttpStatus.OK);

    }

    /**
     * @throws JsonProcessingException
     */
    @RequestMapping("/updateapp")
    @ResponseBody
    public ResponseEntity<ResponseJsonEntity<AppInstance>> updateApp(
            @RequestBody AppInstance app
    ) throws Exception {

        logger.debug("修改APP，{}，{}，{}", app.getAppName(), app.getTopicName(), app.getAppNameCn());

        app = appInstanceManager.updateApp(app);

        ResponseJsonEntity rje = new ResponseJsonEntity(app);

        return new ResponseEntity(rje, HttpStatus.OK);

    }


    @Autowired
    AppInstanceRepository repository;

    @RequestMapping("/apps")
    @ResponseBody
    public ResponseEntity<ResponseJsonEntity<Object>> apps() throws Exception {

        List<AppInstance> instances = new ArrayList<AppInstance>();
        for (Map.Entry<String, AppInstance> entry : repository.getAllInstance().entrySet()) {
            instances.add(entry.getValue());
        }

        ResponseJsonEntity rje = new ResponseJsonEntity(instances);
        return new ResponseEntity(rje, HttpStatus.OK);

    }


    /**
     * topic  测试
     * http://localhost:8080/dexc/send?appid=a71efc1d-a05e-46ac-858f-46b7dafec39f&msg=testmsg&appkey=key1
     *
     * @param appid
     * @param appkey
     * @param msg
     * @return
     * @throws Exception
     */
    @RequestMapping("/topicsendtest")
    @ResponseBody
    public ResponseEntity<ResponseJsonEntity<String>> topicSendtest(
            @RequestParam String appid,
            @RequestParam String appkey,
            @RequestParam String msg
    ) throws Exception {

        ResponseJsonEntity rje = new ResponseJsonEntity("OK");

        logger.debug("发送任务测试，{}，{}", appid, msg);

        AppInstance app = appInstanceManager.findAppInstanceByAppId(appid);
        if (app == null) {
            rje = new ResponseJsonEntity("invalid appid: " + appid);
            return new ResponseEntity(rje, HttpStatus.OK);
        }

        producer.sendData(app, msg);

        return new ResponseEntity(rje, HttpStatus.OK);

    }


    /**
     * topic cb 测试
     * http://localhost:8080/dexc/send?appid=a71efc1d-a05e-46ac-858f-46b7dafec39f&msg=testmsg&appkey=key1
     *
     * @param appid
     * @param appkey
     * @param msg
     * @return
     * @throws Exception
     */
    @RequestMapping("/topiccbsendtest")
    @ResponseBody
    public ResponseEntity<ResponseJsonEntity<String>> topicCBSendtest(
            @RequestParam String appid,
            @RequestParam String appkey,
            @RequestParam String msg
    ) throws Exception {

        ResponseJsonEntity rje = new ResponseJsonEntity("OK");

        logger.debug("发送回调数据测试，{}，{}", appid, msg);

        AppInstance app = appInstanceManager.findAppInstanceByAppId(appid);
        if (app == null) {
            rje = new ResponseJsonEntity("invalid appid: " + appid);
            return new ResponseEntity(rje, HttpStatus.OK);
        }

        producer.sendCBData(app, msg);

        return new ResponseEntity(rje, HttpStatus.OK);

    }


    @RequestMapping(
            value = "/del/{id}",
            method = RequestMethod.DELETE
    )
    @ResponseBody
    public ResponseEntity<ResponseJsonEntity<String>> del(
            @PathVariable String id
    ) throws Exception {

        logger.debug("删除应用，{}，{}",id);

        appInstanceManager.removeApp(id);

        ResponseJsonEntity rje = new ResponseJsonEntity(id);
        return new ResponseEntity(rje, HttpStatus.OK);

    }


}
