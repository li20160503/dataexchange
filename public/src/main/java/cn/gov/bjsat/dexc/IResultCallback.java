package cn.gov.bjsat.dexc;

import kafka.consumer.KafkaStream;
import cn.gov.bjsat.dexc.app.AppInstance;

/**
 * Created by grf11_000 on 2015/10/6.
 */

/**
 *  数据回调处理单元接口
 *  拿到上个流之后选择性的处理，目前是通过hsf接口回调传递数据。
 */
public interface IResultCallback  extends Runnable {

    /**
     *  指定线程名
     * @return
     */
    public Integer getThreadNumber();

    /**
     *  指定运行参数
     * @param stream 数据流
     * @param threadNumber 在当前实例数据处理器中所有并行处理线程的序号
     * @return
     */
    public IResultCallback initParameters(KafkaStream stream, Integer threadNumber, AppInstance instance);

}
