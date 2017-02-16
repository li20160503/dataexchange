# 数据交换平台（DEXC）

## 子项目说明

### icallback
EDAS HSF框架服务接口子项目

#### 接口部分
包括对交换平台任务提交的接口HsfInterface（交换平台实现），和数据处理结果回调的接口HsfDexcInterface（取数应用实现）

#### 实体部分

1. DexcRequestBody 数据请求实体。
1. DexcResponseBody 数据返回实现，可以将此实体做为DexcRequestBody的data部分请求数据回调接口。

### manager

数据交换平台的管理端子项目，包括对取数应用的授权、注册以及任务数据的提交、定时管理等功能。
同时提供一些开发者和使用者所需要的帮助资料下载，包括有icallback的maven文件、storm实例项目下载。

### node

数据交换平台的数据交换回调子项目，主要负责将不同的取数应用结果数据通过HsfInterface HSF接口回调于取数应用，可群集部署具有高可用、高可靠等设计特点。

### public

数据交换平台的公共依赖子项目，具有全局功能部分，manager和node都对其有依赖关系。

### storm

数据交换平台取数实时流处理平台实例项目，目前包括storm_kafka一个子项目，主要说明关键部分的使用方式和特定说明，可以在不用了解太多关于Storm框架技术的前提下直接进行项目开发实现业务逻辑，具体使用请参见项目中注释。