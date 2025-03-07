


# axios

## 概述

```js
文档:http://www.axios-js.com/zh-cn/docs/
Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

- 引用:
网页端: bootcdn.cn找链接: 
//<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.21.0/axios.min.js"></script>
服务端:npm i axios

- 特点:
1.从浏览器中创建 XMLHttpRequests
2.从 node.js 创建 http 请求
3.支持 Promise API
4.拦截请求和响应
5.转换请求数据和响应数据
6.取消请求
7.自动转换 JSON 数据
8.客户端支持防御 XSRF

```





# axios二次封装

### 如何优雅的封装axios
希望做到如下几点,[来源]([如何优雅地封装 axios | Jack Chou's blog](https://jackchoumine.github.io/web/js/%E5%B0%81%E8%A3%85axios.html)):
* 引用方便.  例如在vue2中,可以通过`this.$http[method]`引用
* 兼容REST风格封装，使用 JSON 进行交互，提供常用的四种方法
* 不同的请求方法, 参数格式一致.例如,vue2中`this.$http.get(url,params), this.$http.post(url, params)`
* 可进行二次确认,  例如在vue2中`this.$http.delete(url,params,{content:'删除后不可恢复!',type:'danger'})；`
* 统一处理错误,同时提供抛出错误的方法
* 错误时,控制台有日志输出, 如果有需要提交到服务器.
* 可取消重复请求,用户切换路径取消请求
* 文件下载及上传
* 指定是否走mock服务. 如果使用strapi本地服务,则本地开发时候仅使用roxy的地址即可,也不用指定特别的请求路径.



## 封装4
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

![image](https://jsd.cdn.zzko.cn/gh/aotushi/picx-images-hosting@master/image.8ad3bhf9ks.webp)


#### 封装1

```ts
// src/request/tool.ts
import {message} from '../antd'
export const handleChangeRequestHeader = config => {
	config['xxxx'] = 'xxxx'
	return config
}

export const handleConfigureAuth = config => {
	config.headers['token'] = localStorage.getItem('token') || ''
	return config
}

export const handleNetworkError = (errStatus?: number):void => {
	const networkErrMap:{[key:string]: string} = {
		"400": "错误的请求", // token 失效
    "401": "未授权，请重新登录",
    "403": "拒绝访问",
    "404": "请求错误，未找到该资源",
    "405": "请求方法未允许",
    "408": "请求超时",
    "500": "服务器端出错",
    "501": "网络未实现",
    "502": "网络错误",
    "503": "服务不可用",
    "504": "网络超时",
    "505": "http版本不支持该请求",
	}

	if (errStatus) {
		message.error(networkErrMap[errStatus] ?? `其它连接错误--${errStatus}`)
		return
	}
	message.error('无法连接到服务器')
}


export const handleAuthError = (errno: string):boolean => {
	const authErrMap: any = {
    "10031": "登录失效，需要重新登录", // token 失效
    "10032": "您太久没登录，请重新登录~", // token 过期
    "10033": "账户未绑定角色，请联系管理员绑定角色",
    "10034": "该用户未注册，请联系管理员注册用户",
    "10035": "code 无法获取对应第三方平台用户",
    "10036": "该账户未关联员工，请联系管理员做关联",
    "10037": "账号已无效",
    "10038": "账号未找到",
  };

	if (authErrMap.hasOwnProperty(errno)) {
		message.error(authErrMap[errno])
		logout()
		return false
	}
	return true
}

export const handleGeneralError = (errno:string, errmsg:string):boolean => {
	if (errno !== '0) {
		message.error(errmsg)
		return false
	}

	return true
}
```


```ts
// src/request/server.ts
import axios, {
  AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'

import {
  handleChangeRequestHeader,
  handleConfigureAuth,
  handleAuthError,
  handleGeneralError,
  handleNetworkError,
} from "./tools";

type Fn = (data: FcResponse<any>) => unknown

interface IAnyObj {
	[index:string]: unknown
}

interface FcResponse<T> {
	errno: string
	errmsg: string
	data: T
}

//创建axios实例
const instance = axios.create({
  timeout: 1000 * 10, // 请求超时时间
  baseURL: import.meta.env.VUE_APP_BASE_URL || '',
})

// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig)=> {
    config = handleChangeRequestHeader(config)
    config = handleRequestHeaderAuth(config)
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status !== 200) {
      return Promise.reject(response.data)
    }
    handleAuthError(response.data.errno)
    handleGeneralError(response.data.errno, response.data.errmsg)

    return response
  },
  error => {
    if (error.response) {
      handleNetworkError(error.response.status)
    }
    
    return Promise.reject(error)
  }
)

export const Get = <T>(
  url: string,
  params: IAnyObj = {},
  clearFn?: Fn
): Promise<[Error|null, FcResponse<T>|undefined]> => {
  return new Promise((resolve) => {
    instance
      .get(url, {params})
      .then(result => {
        let res: FcResponse<T>
        if (clearFn !== undefined) {
          res = clearFn(result.data) as FcResponse<T>
        } else {
          res = result.data as FcResponse<T>
        }
        resolve([null, res])
      })
      .catch(err => {
        resolve([err, undefined])
      })
  })
}

export const Post = <T>(
  url: string,
  data: IAnyObj,
  params: IAnyObj = {}
) => {
  return new Promise(resolve => {
    instance
      .post(url, data, {params})
      .then(result => {
        resolve([null, result.data as FcResponse<T>])
      })
      .catch(error => {
        resolve([error, undefined])
      })
  })
}

// PUT delete patch方法. 

// 上面单独集中方法,里面有重复的部分, 耦合度高. 可以生成一个类

```


```ts
// request/index.ts
import { userApi } from "./path/user";

export const api = {
  ...userApi,
};
```


```ts
//src/request/path/user.ts

import {Get} from '../server'

export interface FcResponse<T> {
	errno: string
	errmsg: string
	data: T
}

export type ApiResponse<T> = Promise<[any, FcResponse<T> | undefined]>

export function getUserInfo<T={name:string}>(id: string): ApiResponse<T> {
	return Get<T>('/user/info', {id})
}

export const userApi = {
	getUserInfo,
}
```


#### 封装1-1
降低耦合度的方案, 相对于上一个方案来说, 就是将请求统一封装, REST风格请求只需传参并调用这个请求即可. 

```ts
// architectcure
src/request
|- http.ts     #http请求类的实现
|- index.ts    #导出http实例和类型
|- tool.ts     #工具函数
|- path/
   - user.ts   #用户相关api
// src/request/http.ts

import axios, { type AxiosInstance, type AxiosRequestConfig, AxiosError } from 'axios'
import {
  handleChangeRequestHeader,
  handleRequestHeaderAuth,
  handleAuthError,
  handleNetworkError,
  handleGeneralError,
} from './tool'

export interface IAnyObj {
  [index: string]: unknown
}

export interface FcResponse<T> {
  errno: string
  errmsg: string
  data: T
}

export type ApiResponse<T> = Promise<[Error | null, FcResponse<T> | undefined]>

export type TransformFn<T> = (response: FcResponse<T>) => FcResponse<T>

export default class HttpRequest {
  private instance: AxiosInstance;
  
  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create({
      timeout: 1000 * 10,
      baseURL: import.meta.env.VUE_APP_BASE_URL || '',
      ...config
    })
    
    this.setupInterceptors()
  }

  private setupInterceptors() {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        config = handleChangeRequestHeader(config)
        config = handleRequestHeaderAuth(config)
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        if (response.status !== 200) {
          return Promise.reject(new Error(response.statusText || 'Error'))
        }
        const data = response.data
        handleAuthError(data.errno)
        handleGeneralError(data.errno, data.errmsg)
        return response
      },
      (error: AxiosError) => {
        if (error.response) {
          handleNetworkError(error.response.status)
        }
        return Promise.reject(error)
      }
    )
  }

  private async request<T>(
    config: AxiosRequestConfig,
    transform?: TransformFn<T>
  ): ApiResponse<T> {
    try {
      const response = await this.instance.request(config)
      const responseData = response.data as FcResponse<T>
      return [null, transform ? transform(responseData) : responseData]
    } catch (err) {
      return [err as Error, undefined]
    }
  }

  public async get<T>(
    url: string,
    params?: IAnyObj,
    transform?: TransformFn<T>
  ): ApiResponse<T> {
    return this.request<T>({ method: 'GET', url, params }, transform)
  }

  public async post<T>(
    url: string,
    data?: IAnyObj,
    params?: IAnyObj,
    transform?: TransformFn<T>
  ): ApiResponse<T> {
    return this.request<T>({ method: 'POST', url, data, params }, transform)
  }

  public async put<T>(
    url: string,
    data?: IAnyObj,
    params?: IAnyObj,
    transform?: TransformFn<T>
  ): ApiResponse<T> {
    return this.request<T>({ method: 'PUT', url, data, params }, transform)
  }

  public async delete<T>(
    url: string,
    params?: IAnyObj,
    transform?: TransformFn<T>
  ): ApiResponse<T> {
    return this.request<T>({ method: 'DELETE', url, params }, transform)
  }

  public async patch<T>(
    url: string,
    data?: IAnyObj,
    params?: IAnyObj,
    transform?: TransformFn<T>
  ): ApiResponse<T> {
    return this.request<T>({ method: 'PATCH', url, data, params }, transform)
  }
}


// src/request/index.ts


```


#### 封装1-2
在前者的基础上再次进行完善,添加了重复请求,移除重复请求,取消请求的功能.
```ts
// src/request/http.ts
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  AxiosError,
  CanceledError,
} from 'axios'
import {
  handleChangeRequestHeader,
  handleRequestHeaderAuth,
  handleAuthError,
  handleNetworkError,
  handleGeneralError,
} from './tool'

/** 通用对象类型 */
export interface IAnyObj {
  [index: string]: unknown
}

/** 基础响应格式 */
export interface FcResponse<T> {
  errno: string
  errmsg: string
  data: T
}

/** API 响应格式 */
export type ApiResponse<T> = Promise<[Error | null, FcResponse<T> | undefined]>

/** 响应数据转换函数类型 */
export type TransformFn<T> = (response: FcResponse<T>) => FcResponse<T>

/** 重试配置接口 */
export interface RetryConfig {
  /** 重试次数 */
  retries: number
  /** 重试延迟（毫秒） */
  retryDelay: number
  /** 重试条件 */
  retryCondition?: (error: Error) => boolean
}

/**
 * HTTP请求类
 * 封装了基于 axios 的 HTTP 请求方法
 */
export default class HttpRequest {
  /** axios 实例 */
  private instance: AxiosInstance;
  /** 请求计数器，用于防止重复请求 */
  private pendingRequests: Map<string, AbortController>;
  /** 默认重试配置 */
  private defaultRetryConfig: RetryConfig;
  
  /**
   * 构造函数
   * @param config - axios 配置
   * @param retryConfig - 重试配置
   */
  constructor(
    config?: AxiosRequestConfig,
    retryConfig: RetryConfig = { retries: 3, retryDelay: 1000 }
  ) {
    this.instance = axios.create({
      timeout: 1000 * 10,
      baseURL: import.meta.env.VUE_APP_BASE_URL || '',
      // 允许跨域携带cookie
      withCredentials: true,
      // 默认请求头
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      ...config
    })
    
    this.pendingRequests = new Map()
    this.defaultRetryConfig = retryConfig
    this.setupInterceptors()
  }

  /**
   * 生成请求的唯一键
   * @param config - 请求配置
   * @returns 请求的唯一键
   */
  private generateRequestKey(config: InternalAxiosRequestConfig): string {
    const { method, url, params, data } = config
    return [method, url, JSON.stringify(params), JSON.stringify(data)].join('&')
  }

  /**
   * 添加请求到等待队列
   * @param config - 请求配置
   */
  private addPendingRequest(config: InternalAxiosRequestConfig): void {
    const requestKey = this.generateRequestKey(config)
    if (this.pendingRequests.has(requestKey)) {
      // 如果已经有相同的请求在进行中，取消当前请求
      const controller = this.pendingRequests.get(requestKey)
      controller?.abort()
      this.pendingRequests.delete(requestKey)
    }
    const controller = new AbortController()
    config.signal = controller.signal
    this.pendingRequests.set(requestKey, controller)
  }

  /**
   * 从等待队列中移除请求
   * @param config - 请求配置
   */
  private removePendingRequest(config: InternalAxiosRequestConfig): void {
    const requestKey = this.generateRequestKey(config)
    this.pendingRequests.delete(requestKey)
  }

  /**
   * 设置请求和响应拦截器
   */
  private setupInterceptors(): void {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 防止重复请求
        this.addPendingRequest(config)
        
        // 处理请求头
        config = handleChangeRequestHeader(config)
        config = handleRequestHeaderAuth(config)

        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // 移除已完成的请求
        this.removePendingRequest(response.config as InternalAxiosRequestConfig)

        if (response.status !== 200) {
          return Promise.reject(new Error(response.statusText || 'Error'))
        }

        const data = response.data
        // 处理业务错误
        handleAuthError(data.errno)
        handleGeneralError(data.errno, data.errmsg)

        return response
      },
      (error: AxiosError) => {
        // 移除失败的请求
        if (error.config) {
          this.removePendingRequest(error.config as InternalAxiosRequestConfig)
        }

        if (error instanceof CanceledError) {
          // 处理请求取消的情况
          return Promise.reject(new Error('Request canceled'))
        }

        // 处理网络错误
        if (error.response) {
          handleNetworkError(error.response.status)
        }

        return Promise.reject(error)
      }
    )
  }

  /**
   * 执行重试逻辑
   * @param fn - 要重试的函数
   * @param retryConfig - 重试配置
   * @returns Promise
   */
  private async retry<T>(
    fn: () => Promise<T>,
    retryConfig: RetryConfig
  ): Promise<T> {
    const { retries, retryDelay, retryCondition } = retryConfig
    
    for (let i = 0; i < retries; i++) {
      try {
        return await fn()
      } catch (error) {
        if (
          i === retries - 1 ||
          (retryCondition && !retryCondition(error as Error))
        ) {
          throw error
        }
        // 等待指定时间后重试
        await new Promise(resolve => setTimeout(resolve, retryDelay))
      }
    }
    throw new Error('Max retries reached')
  }

  /**
   * 发送请求
   * @param config - 请求配置
   * @param transform - 响应数据转换函数
   * @returns Promise
   */
  private async request<T>(
    config: AxiosRequestConfig,
    transform?: TransformFn<T>
  ): ApiResponse<T> {
    try {
      const response = await this.retry(
        () => this.instance.request(config),
        this.defaultRetryConfig
      )
      const responseData = response.data as FcResponse<T>
      return [null, transform ? transform(responseData) : responseData]
    } catch (err) {
      // 确保错误是 Error 类型
      const error = err instanceof Error ? err : new Error(String(err))
      return [error, undefined]
    }
  }

  /**
   * GET 请求
   * @param url - 请求地址
   * @param params - URL参数
   * @param transform - 响应数据转换函数
   * @returns Promise
   */
  public async get<T>(
    url: string,
    params?: IAnyObj,
    transform?: TransformFn<T>
  ): ApiResponse<T> {
    return this.request<T>({ method: 'GET', url, params }, transform)
  }

  /**
   * POST 请求
   * @param url - 请求地址
   * @param data - 请求体数据
   * @param params - URL参数
   * @param transform - 响应数据转换函数
   * @returns Promise
   */
  public async post<T>(
    url: string,
    data?: IAnyObj,
    params?: IAnyObj,
    transform?: TransformFn<T>
  ): ApiResponse<T> {
    return this.request<T>({ method: 'POST', url, data, params }, transform)
  }

  /**
   * PUT 请求
   * @param url - 请求地址
   * @param data - 请求体数据
   * @param params - URL参数
   * @param transform - 响应数据转换函数
   * @returns Promise
   */
  public async put<T>(
    url: string,
    data?: IAnyObj,
    params?: IAnyObj,
    transform?: TransformFn<T>
  ): ApiResponse<T> {
    return this.request<T>({ method: 'PUT', url, data, params }, transform)
  }

  /**
   * DELETE 请求
   * @param url - 请求地址
   * @param params - URL参数
   * @param transform - 响应数据转换函数
   * @returns Promise
   */
  public async delete<T>(
    url: string,
    params?: IAnyObj,
    transform?: TransformFn<T>
  ): ApiResponse<T> {
    return this.request<T>({ method: 'DELETE', url, params }, transform)
  }

  /**
   * PATCH 请求
   * @param url - 请求地址
   * @param data - 请求体数据
   * @param params - URL参数
   * @param transform - 响应数据转换函数
   * @returns Promise
   */
  public async patch<T>(
    url: string,
    data?: IAnyObj,
    params?: IAnyObj,
    transform?: TransformFn<T>
  ): ApiResponse<T> {
    return this.request<T>({ method: 'PATCH', url, data, params }, transform)
  }

  /**
   * 取消所有进行中的请求
   */
  public cancelAllRequests(): void {
    this.pendingRequests.forEach(controller => {
      controller.abort()
    })
    this.pendingRequests.clear()
  }

  /**
   * 获取当前正在进行的请求数量
   * @returns 请求数量
   */
  public getPendingRequestsCount(): number {
    return this.pendingRequests.size
  }
}



// src/request/path/user.ts
import http from '../index'
import type { ApiResponse, FcResponse } from '../http'

interface UserInfo {
  name: string;
  age?: number;
  email?: string;
}

// 示例转换函数：添加默认年龄
const addDefaultAge = (response: FcResponse<UserInfo>): FcResponse<UserInfo> => {
  if (response.data && !response.data.age) {
    return {
      ...response,
      data: { ...response.data, age: 18 }
    }
  }
  return response
}

export const userApi = {
  // 使用转换函数的例子
  getUserInfo: <T = UserInfo>(id: string): ApiResponse<T> => {
    return http.get<T>('/user/info', { id }, addDefaultAge as any)
  },
  
  // 不使用转换函数的普通请求
  updateUser: <T = UserInfo>(id: string, data: Record<string, unknown>): ApiResponse<T> => {
    return http.put<T>('/user', data, { id })
  },
  
  // 更多 API 方法...
}

export type { UserInfo }
export default userApi



// src/request/index.ts
import { userApi } from './path/user'
import HttpRequest from './http'

// 创建默认请求实例
const http = new HttpRequest()

export type { ApiResponse, FcResponse, IAnyObj } from './http'
export default http

export const api = {
  ...userApi,
}
```


#### 封装2
> 来源: [blog/docs/ts/axios.md at master · kvchen95/blog](https://github.com/kvchen95/blog/blob/master/docs/ts/axios.md)

```ts
// src/reqeust
```

使用
```vue

```



# 实例

## 在处理异步请求时，如何确保数据的一致性和同步性?

### 处理方式
为了避免竞态条件，可以采取以下措施：

- 使用互斥锁（mutex）或其他同步机制来控制对共享资源的并发访问。
- 使用取消令牌（cancel tokens）来取消之前的请求，确保只有最新的请求会更新数据。
- 在每次请求开始之前清空数据，以确保不会有旧数据残留。
- 在更新数据时进行适当的检查，以确保只处理预期的响应。



## axios处理数值会将小数点后的0处理掉
### 概述
> https://github.com/axios/axios/issues/2279

axios在处理返回数据时,会调用`JSON.parse()`方法.
处理方法:
* 让后端返回字符串
* 可以调用方法`Number.prototype.toFixed(n)`来强制处理数据


### 更换返回数据的格式
**背景**
> 因为axios中的默认transformReponse使用了JSON.parse。JSON.parse会舍去小点后的0。

这种方式并没有起到作用

源码
```js
transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],
```

处理方案: 只能是后端把浮点数转成字符串传给前端，或者前端特殊处理加上小数显示


## 阻止重复请求



## 缓存请求