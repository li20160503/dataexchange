package cn.gov.bjsat.dexc.hsf.entity;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;

import java.io.IOException;
import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by grf11_000 on 2015/11/2.
 */
public class DexcRequestBody<T> implements Serializable,Cloneable {
    /**
     * 访问KEY，由CHANNELID,TOKEN,TIMESTAMP组合加密
     */
    private String accessKey;
    private String channelId;
    private String appKey;
    private String appId;
    private String transeqId;
    private Long timeStamp;
    private T data;
    private Map metaData;

    public DexcRequestBody(String accessKey, String channelId, String transeqId, T data) {
        this.accessKey = accessKey;
        this.channelId = channelId;
        this.transeqId = transeqId;
        this.data = data;
        Map<String, Object> meta = new HashMap<String, Object>();
        meta.put("sort", "");
        meta.put("size", 0);
        meta.put("number", 0);
        this.setMetaData(meta);
    }

    public DexcRequestBody() {
        this(null, null, null, null);
    }

    public String getAccessKey() {
        return accessKey;
    }

    public void setAccessKey(String accessKey) {
        this.accessKey = accessKey;
    }

    public String getChannelId() {
        return channelId;
    }

    public void setChannelId(String channelId) {
        this.channelId = channelId;
    }

    public String getTranseqId() {
        return transeqId;
    }

    public void setTranseqId(String transeqId) {
        this.transeqId = transeqId;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public Map getMetaData() {
        return metaData;
    }

    public void setMetaData(Map metaData) {
        this.metaData = metaData;
    }

    public Long getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Long timeStamp) {
        this.timeStamp = timeStamp;
    }

    private ObjectMapper objectMapper;

    public String toJson() {
        return this.toJson(this.getTranseqId());
    }

    public String toJson(String transeqId) {
        String jsonData = null;
        try {
            objectMapper  = new ObjectMapper();
            if (this.getTimeStamp() == null)
                this.setTimeStamp(System.currentTimeMillis());
            if (transeqId != null)
                this.setTranseqId(transeqId);
            jsonData = objectMapper.writeValueAsString(this);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return jsonData;
    }

    /**
     * Object to XML
     *
     * @return
     */

    public String toXML(Object object) {
        return toXML( object,  "root");
    }

    public String toXML(Object object, String rootName) {
        try {
            XmlMapper xml = new XmlMapper();
            // Object to XML
            String xmlStr = xml.writeValueAsString(object);
            String xmlHeader = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
            // Object Class Name
            String mapClassName = object.getClass().getSimpleName();
            String beginStr = "<" + mapClassName + " xmlns=\"\">";
            String endStr = "</" + mapClassName + ">";
            int beginNum = beginStr.length();
            int endNum = xmlStr.indexOf(endStr);
            String subStr = xmlStr.substring(beginNum, endNum);
            StringBuffer sb = new StringBuffer();
            sb.append(xmlHeader).append("<" + rootName + ">").append(subStr)
                    .append("</" + rootName + ">");
            return sb.toString();
        } catch (JsonGenerationException e) {
            e.printStackTrace();
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }


    @Override
    public Object clone() {
        try {
            return super.clone();
        } catch (CloneNotSupportedException e) {
            return null;
        }
    }

    public String getAppKey() {
        return appKey;
    }

    public void setAppKey(String appKey) {
        this.appKey = appKey;
    }

    public String getAppId() {
        return appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }
}

