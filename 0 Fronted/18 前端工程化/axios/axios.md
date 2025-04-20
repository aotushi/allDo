
# axios二次封装



### axios封装方案了解

#### 1.前端请求流程图
[[前端请求流程图]]

#### 封装方案
##### 方案1
> https://juejin.cn/post/7124573626161954823
##### 封装2
> 来源: [blog/docs/ts/axios.md at master · kvchen95/blog](https://github.com/kvchen95/blog/blob/master/docs/ts/axios.md)


### 如何优雅的封装axios
- [x] 全局消息提示
- [ ] axios二次封装
  - [x] 请求拦截器+响应拦截器的基础设置
  - [x] 处理重复请求
  - [x] 取消全部请求
  - [ ] 一键配置本地开发请求是否走代理
  - [ ] 组件可以获取返参response的类型
  - [ ] 下载
  - [ ] 上传
  - [ ] 组件请求时配置后端返参格式?
  - [ ] 接口缓存策略
  - [ ] 请求超时重复机制

- [x] mock数据服务: strapi




### 1.请求拦截器+响应拦截器基础设置
* 基础请求(get, post, put, del等请求的封装)
* 拦截器的基本封装
  * 请求拦截器: 
    * 请求头设置
    * 用户标识添加
  * 响应拦截器
    * 网络错误处理
    * 授权错误处理
    * 普通错误处理
    * 代码异常处理


### 2.axios中如何取消请求
#### 2.1Axios请求取消实现方法

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

#### 2.2实现方案
 * 重复请求取消的实现步骤
 * 实现重复取消机制的关键代码

#### 2.3 实现方案
1. 整体思路是将请求中的`url,method,params,data`字符串拼接形式作为唯一的键, 将axios的取消方法实例作为值.
2. 在**请求拦截器**中将请求添加到map中:
   * 如果已经存在相同请求, 则取消此请求
   * 如果不存在相同请求, 则正常添加到map中
1. 在**响应拦截器**中
   *  在成功和失败的回调中, 调用移除请求的方法
4. 声明取消全部请求的方法


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


```ts
// src/axios/http.ts  简化版

class HttpRequest {
  private _instace
  private _defaultConfig = {
    baseURL: import.env.VUE_APP_BASE_URL || 'api',
    timeout: 1000*6
  }
	private pendingRequests
  
  constructor(config) {
    this._instance = axios.create(Object.assign(this._defaultConfig, config))
    
    this.pendingRequests = new Map()
    this.setupInterceptors()
  }


	private getRequestsKey(config) {
    const {method, url, params, data} = config
    return [method, url, JSON.stringify(params), JSON.stringify(data)].join('&')
  }

	private removePendingRequest(requestKey) {
    if (this.pendingRequests.has(requestKey)) {
      const controller = this.pendingRequests.get(requestKey)
      controller.abort()
      this.pendingRequests.delete(requestKey)
    }
  }

	private addPendingRequest(config) {
    const requestKey = this.getRequestsKey(config)
    this.removeRequestKey(requestKey)
    
    const controller = new AbortController()
    config.signal = controlller.signal
    this.pendingRequests.set(requestKey, controller)
  }
  //取消所有请求
	public cancelAllRequests() {
    this.pendingRequests.forEach(controller => controller.abort())
    this.pendingRequests.clear()
  }

	setupInterceptors() {
    this._instance.interceptor.request.use(
    	config => {
        // 防止重复请求
        this.addPendingRequest(config)
        
        //处理请求头
        //...
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    this._instance.interceptor.response.use(
    	response => {
        const requestKey = this.getReuqestKey(response.config)
        this.removePendingRequest(requestKey)
        
        if (response.status !== 200) {
          return Promise.reject(response.data)
        }
        handleAuthError(response.data.errno)
        handleGeneralError(response.data.errno, response.data.errmsg)
        return response
      },
      err => {
        if (error.config) {
          const requestKey = this.getRequestKey(error.config)
          this.removePendingRequest(requestKey)
        }
        
        if (axios.isCancel(err)) {
          return Pormise.reject(new Error('请求已取消'))
        }
        
        if (error.response) {
          handleNetworkError(error.response.status);
        } else {
          message.error('网络异常，请稍后重试');
        }
        return Promise.reject(error);
      }
    )
  }
	
}
```



![image-20250413135453209](assets/image-20250413135453209.png)

### 3.取消全部请求

 声明一个方法, 在页面上调用即可.

```ts
// src/api/http.ts


class HttpRequest {
  private _instance;
  private _defaultConfig = {
    baseURL:import.env.VUE_APP_BASE_URL || '/api',
    timeout: 1000*6
  }
  
  private pendingRequests
  
  constructor(config) {
    this._instance = axios.create(Object.assign(this._defaultConfig, config))
    
    this.pendingRequests = new Map()
    this.setupInterceptors()
  }
  
   //取消所有请求
	public cancelAllRequests() {
    this.pendingRequests.forEach(controller => controller.abort())
    this.pendingRequests.clear()
  }
}
```



### 4.一键配置代理




### 5.xxxx

