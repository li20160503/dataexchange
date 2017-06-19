package cn.gov.bjsat.dexc.manager.controller;

import cn.bgonline.askit.module.base.web.RequestJsonEntity;
import cn.bgonline.askit.module.base.web.ResponseJsonEntity;
import cn.gov.bjsat.dexc.Utils;
import cn.gov.bjsat.dexc.hsf.callback.HsfInterface;
import cn.gov.bjsat.rules.api.IInvoiceRuleService;
import cn.gov.bjsat.rules.api.IKitService;
import com.alibaba.dubbo.config.ApplicationConfig;
import com.alibaba.dubbo.config.ReferenceConfig;
import com.alibaba.dubbo.config.RegistryConfig;
import com.taobao.hsf.app.spring.util.HSFSpringConsumerBean;
import org.apache.curator.framework.CuratorFramework;
import cn.gov.bjsat.dexc.app.AppInstance;
import cn.gov.bjsat.dexc.app.AppInstanceRepository;
import cn.gov.bjsat.dexc.app.ZookeeperConnector;

import cn.gov.bjsat.dexc.scheduler.SchedulerEntity;
import cn.gov.bjsat.dexc.scheduler.SchedulerRepository;
import org.quartz.Scheduler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

/**
 * Created by grf11_000 on 2015/10/26.
 */

@Controller
@RequestMapping("/scheduler")
public class SchedulerJobsController {

    @Autowired
    AppInstanceRepository appInstanceRepository;

    @Autowired
    SchedulerRepository repository;


    @RequestMapping("/hsf")
    @ResponseBody
    public String hsf() {

        /*HSFSpringConsumerBeanFactory hsfFactory = new HSFSpringConsumerBeanFactory();
        hsfFactory.setGroup("201510070044_dev");
        hsfFactory.setVersion("1.0.0");
        IKitService iKitService = hsfFactory.getService();  */

        ApplicationConfig application = new ApplicationConfig();
        application.setName("dubbo-manager-consumer");
      //  application.setRegistry(new RegistryConfig("zookeeper://localhost:2181"));
        application.setRegistry(new RegistryConfig(Utils.getZookeeperConfig()));
        ReferenceConfig<IKitService> reference = new ReferenceConfig<IKitService>();

        reference.setConnections(10);
        reference.setTimeout(3000);
        reference.setApplication(application);
        reference.setInterface(IKitService.class);
        reference.setGroup("201510070044_dev");
        reference.setVersion("1.0.0");

        IKitService iKitService = reference.get();



        RequestJsonEntity requestJsonEntity = new RequestJsonEntity();
        requestJsonEntity.setAccessKey("840826af209b9d55110ced804ef6110895508bd9");
        requestJsonEntity.setChannelId("invoiceCenter");
        //requestJsonEntity.setTranseqId("00000000001");
        requestJsonEntity.setTimeStamp(1443114124296L);//System.currentTimeMillis()
        HashMap<String, String> s = new HashMap<String, String>();
        s.put("fpdm", "111001171011");
        s.put("skm", "011111111111111111111");
        HashMap<String, String> key = new HashMap<String, String>();
        key.put("operation", "invoice");
        requestJsonEntity.setData(key);

        String json = iKitService.getSecurityKey(requestJsonEntity.toJson());
        System.out.println(json);


        return "OK";

    }


    @RequestMapping("/list")
    @ResponseBody
    public ResponseEntity<ResponseJsonEntity> list() {

        List<SchedulerEntity> items = repository.getAllJobss();
        ResponseJsonEntity rje = new ResponseJsonEntity(items);
        return new ResponseEntity(rje, HttpStatus.OK);

    }


    @RequestMapping("/add")
    @ResponseBody
    public ResponseEntity<ResponseJsonEntity> add(
            @RequestBody SchedulerEntity entity
    ) throws Exception {

        entity.setId(UUID.randomUUID().toString());
        repository.addJob(entity);

        ResponseJsonEntity rje = new ResponseJsonEntity(entity);
        return new ResponseEntity(rje, HttpStatus.OK);

    }


    @RequestMapping(
            value = "/toggle/{id}",
            method = RequestMethod.GET
    )
    @ResponseBody
    public ResponseEntity<ResponseJsonEntity<String>> toggle(
            @PathVariable String id
    ) throws Exception {

        Boolean status = repository.toggleJob(id);

        ResponseJsonEntity rje = new ResponseJsonEntity(status);
        return new ResponseEntity(rje, HttpStatus.OK);

    }

    @RequestMapping(
            value = "/trigger/{id}",
            method = RequestMethod.GET
    )
    @ResponseBody
    public ResponseEntity<ResponseJsonEntity<String>> trigger(
            @PathVariable String id
    ) throws Exception {

        Boolean status = repository.triggerJob(id);

        ResponseJsonEntity rje = new ResponseJsonEntity(status);
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

        repository.removeJob(id);

        ResponseJsonEntity rje = new ResponseJsonEntity(id);
        return new ResponseEntity(rje, HttpStatus.OK);

    }


}
