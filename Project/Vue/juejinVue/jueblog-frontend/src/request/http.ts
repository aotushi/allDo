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
