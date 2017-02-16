package cn.gov.bjsat.dexc.hsf.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import java.io.IOException;
import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by grf11_000 on 2015/11/2.
 */
public class DexcResponseBody<T> implements Serializable {

    private Map<String, Object> pagingInfo;
    private Boolean success;
    private T data;
    private Long timeStamp;
    private String transeqId;
    /*
    JSON属性过滤，包含和排除，需要在BEAN加上注解 @JsonFilter("exclude") 或 @JsonFilter("include")
     */
    private String[] includeFieldNames = {};
    private String[] excludeFieldNames = {};


    /**
     * 分页或其它信息
     *
     * @return
     */

    public Map getMetaData() {
        return metaData;
    }

    public DexcResponseBody setMetaData(Map metaData) {
        this.metaData = metaData;
        return this;
    }

    private Map metaData;
    private Object errorMessage;
    private String errorCode;
    private Object expanded;

    public DexcResponseBody() {
        this(false, null, "", "");
    }

    /**
     * 成功数据返回，success默认为true
     *
     * @param data 数据
     */
    public DexcResponseBody(T data) {
        this(true, data, "", "");
    }

    /**
     * 失败数据返回
     *
     * @param success      失败
     * @param errorMessage 错误消息
     */
    public DexcResponseBody(boolean success, String errorMessage) {
        this(success, null, errorMessage, "");
    }

    /**
     * 成功数据返回
     *
     * @param success      成功或失败
     * @param data         数据
     * @param errorMessage 错误消息
     * @param errorCode    错误码
     */
    public DexcResponseBody(boolean success, T data, String errorMessage, String errorCode) {

        pagingInfo = new HashMap<String, Object>();
        pagingInfo.put("totalElements", 0);

        this.setSuccess(success);
        this.setMetaData(pagingInfo);
        this.setData(data);
        this.setErrorMessage(errorMessage);
        this.setErrorCode(errorCode);

    }

    public boolean getSuccess() {
        return success;
    }

    public DexcResponseBody setSuccess(boolean success) {
        this.success = success;
        return this;
    }

    public T getData() {
        return data;
    }

    /**
     * 设置返回数据，如果是SDJ的返回值里面会自动包含content这个节点，所以需要为其它类型的返回值加上content
     * 由于Ext treeStore 的proxy root 不支持二级结点如：data.content，会报错，还是把层级住上提一级增加metaData放分页信息
     * org.springframework.data.domain.PageImpl
     *
     * @param data 返回数据
     */
    public DexcResponseBody setData(T data) {
        this.data = data;
        return this;
    }

    public Object getErrorMessage() {
        return errorMessage;
    }

    public DexcResponseBody setErrorMessage(Object errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public DexcResponseBody setErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }

    @JsonIgnore
    public String[] getExcludeFieldNames() {
        return excludeFieldNames;
    }

    public DexcResponseBody setExcludeFieldNames(String[] excludeFieldNames) {
        this.excludeFieldNames = excludeFieldNames;
        return this;
    }

    @JsonIgnore
    public String[] getIncludeFieldNames() {
        return includeFieldNames;
    }

    public DexcResponseBody setIncludeFieldNames(String[] includeFieldNames) {
        this.includeFieldNames = includeFieldNames;
        return this;
    }


    public Long getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Long timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getTranseqId() {
        return transeqId;
    }

    public void setTranseqId(String transeqId) {
        this.transeqId = transeqId;
    }

    public Object getExpanded() {
        return expanded;
    }

    public void setExpanded(Object expanded) {
        this.expanded = expanded;
    }


    public String toJson() {
        return this.toJson(this.getTranseqId());
    }

    public String toJson(String transeqId) {
        String jsonData = null;
        try {
            ObjectMapper objectMapper = new ObjectMapper();
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
        return toXML(object, "root");
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

}
