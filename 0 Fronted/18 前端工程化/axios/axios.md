
# axios二次封装

### 如何优雅的封装axios
希望做到如下几点,来源 ([如何优雅地封装 axios | Jack Chou's blog](https://jackchoumine.github.io/web/js/%E5%B0%81%E8%A3%85axios.html)):
* 在项目中引用方便, vue2中可以绑定到原型上, vue3可以
* 兼容REST封装,提供常用方法get/post/put/delete
* 统一入参, 统一处理错误, 统一返回格式
* 可取消重复请求, 用户切换路径取消请求
* 文件下载及上传
* 指定是否走mock服务,例如提供了本地strapi服务,则本地开发时仅使用proxy地址即可,也不用指定特别路径

### axios中如何取消请求
#### Axios请求取消实现方法

##### 使用AbortController（推荐，现代API）
1. 创建AbortController实例
2. 将controller.signal传递给axios请求的config
3. 调用controller.abort()取消请求
4. 在拦截器中捕获取消异常
5. 使用axios.isCancel()判断错误是否为取消操作

##### 使用CancelToken（传统方式，已弃用）
1. 创建CancelTokenSource: const source = axios.CancelToken.source()
2. 将source.token传递给请求配置
3. 调用source.cancel()方法取消请求
4. 处理取消请求的异常

##### 请求取消的实现步骤
1. 维护请求队列，用Map存储当前请求和对应的取消控制器
2. 为每个请求生成唯一标识符（结合URL、方法、参数等）
3. 发送请求前检查是否有相同请求，有则取消旧请求
4. 请求完成后从队列中移除
5. 在特定场景（路由切换、组件卸载等）清空队列并取消所有请求

##### 实现取消机制的关键代码
1. 添加请求到队列：使用Map存储请求标识和控制器
2. 移除已完成请求：响应后删除对应请求标识
3. 批量取消请求：遍历Map并调用取消方法
4. 处理取消异常：使用axios.isCancel()区分取消和其他错误

##### 适用场景
* 页面切换
* 搜索输入时的防抖节流: 快速输入时,需要取消上一次的搜索请求,只发送最后一次
* 下拉列表的频繁切换
* 用户手动取消操作: 用户点击取消按钮,关闭弹窗或放弃某个操作
* 请求超时自动取消
* 重复提交防止
* 组件卸载时
* 登录状态改变: 用户退出登录时取消所有未完成的请求
* 依赖条件变更: 如使用React的useEffect时，依赖项变化导致之前的请求不再有效
* 网络状态变化: 网络从在线变为离线
* 无限滚动加载时切换条件: 比如用户在滚动加载时突然切换了筛选条件

##### 注意事项
1. 新版Axios推荐使用AbortController而非CancelToken
2. 请求取消不会阻止服务器端的处理，只是客户端不再接收响应
3. 取消请求需要合理处理异常，避免出现未捕获错误
4. 批量取消请求时需保证取消操作的幂等性


## 封装-1
### 来源
> https://juejin.cn/post/7124573626161954823


### 前端请求流程图

[[前端请求流程图]]

### 整体结构概述
封装axios,可以将其分成两大类: 基础请求流程+拦截器.
基础请求流程包括, 对所有接口的处理(GET, POST, PUT, DEL等)
拦截器包括: 
* 请求拦截
	* 请求调整
	* 用户标识
* 响应拦截
	* 网络错误处理
	* 授权错误处理
	* 普通错误处理
	* 代码异常处理




## 封装-2
> 来源: [blog/docs/ts/axios.md at master · kvchen95/blog](https://github.com/kvchen95/blog/blob/master/docs/ts/axios.md)

```ts
// src/reqeust
```
