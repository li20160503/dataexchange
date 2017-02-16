package cn.gov.bjsat.dexc.manager.controller;

import cn.bgonline.askit.module.base.web.BaseController;
import cn.bgonline.askit.module.base.web.ResponseJsonEntity;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import cn.gov.bjsat.dexc.app.AppInstance;
import cn.gov.bjsat.dexc.app.AppInstanceRepository;
import cn.gov.bjsat.dexc.app.IAppInstanceManager;
import cn.gov.bjsat.dexc.kafka.Producer4Instance;
import cn.gov.bjsat.dexc.service.NodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * @author aliencode
 * @date 14-1-21
 */

@Controller
@RequestMapping("/node")
public class NodeController extends BaseController {

    @Autowired
    NodeService nodeService;


    @RequestMapping("/{id}")
    @ResponseBody
    public ResponseEntity<ResponseJsonEntity> getNode(
            @PathVariable String id
    ) throws Exception {


        String node = nodeService.getNodeInfo(id);
        ResponseJsonEntity rje = new ResponseJsonEntity(node);
        return new ResponseEntity(rje, HttpStatus.OK);

    }

    @RequestMapping("/byapp/{id}")
    @ResponseBody
    public ResponseEntity<ResponseJsonEntity> getNodeInfoByConsumerInstance(
            @PathVariable String id
    ) throws Exception {


        String node = nodeService.getNodeInfoByConsumerInstance(id);
        ResponseJsonEntity rje = new ResponseJsonEntity(node);
        return new ResponseEntity(rje, HttpStatus.OK);

    }



    @RequestMapping("/heads")
    @ResponseBody
    public ResponseEntity<ResponseJsonEntity> listNodes(){

        List<Map<String, String>> heads = nodeService.getNodeHeadInfo();
        ResponseJsonEntity rje = new ResponseJsonEntity(heads);
        return new ResponseEntity(rje, HttpStatus.OK);

    }



    @RequestMapping(
            value = "/consumers/{id}",
            method = RequestMethod.GET
    )
    @ResponseBody
    public ResponseEntity<ResponseJsonEntity<Object>> nodeConsumers(@PathVariable String id){

        List<AppInstance> instances = nodeService.getNodeConsumerInstance(id);
        ResponseJsonEntity rje = new ResponseJsonEntity(instances);
        return new ResponseEntity(rje, HttpStatus.OK);

    }


    @RequestMapping(
            value = "/config/{id}",
            method = RequestMethod.GET
    )
    @ResponseBody
    public ResponseEntity<ResponseJsonEntity<Object>> nodeConfig(@PathVariable String id){

        Map<String, String> config = nodeService.getNodeConfig(id);
        ResponseJsonEntity rje = new ResponseJsonEntity(config);
        return new ResponseEntity(rje, HttpStatus.OK);

    }


}
