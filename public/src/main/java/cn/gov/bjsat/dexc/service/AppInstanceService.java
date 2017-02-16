package cn.gov.bjsat.dexc.service;

import org.apache.curator.framework.CuratorFramework;
import cn.gov.bjsat.dexc.DexcConfig;
import cn.gov.bjsat.dexc.app.AppInstance;
import cn.gov.bjsat.dexc.app.ZookeeperConnector;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by grf11_000 on 2015/10/19.
 */


@Component
public class AppInstanceService {


    private Logger logger = LoggerFactory.getLogger(this.getClass());

    private CuratorFramework zkClient;

    @Autowired
    DexcConfig dexcConfig;

    @Autowired
    public void setZkClient(ZookeeperConnector zookeeperConnector){
        this.zkClient = zookeeperConnector.getZkClient();
    }



}
