package cn.gov.bjsat.dexc;

import com.taobao.hsf.standalone.HSFEasyStarter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;

/**
 * Created by grf11_000 on 2015/10/27.
 */
public class PandoraDev {
    private Logger logger = LoggerFactory.getLogger(this.getClass());


    @Autowired
    Environment env;

    public void init(){

        HSFEasyStarter.start("hsfRelease", "2_5_150420");

    }

}
