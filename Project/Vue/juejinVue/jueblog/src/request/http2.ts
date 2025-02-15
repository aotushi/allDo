import axios from 'axios'
import type {
  Axios,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

type BaseApiResponse<T> = {
  code: number
  message: string
  data: T
}

interface RequestOptions {
  globalErrorMessage?: boolean
  globalSuccessMessage?: boolean
}

// 拓展自定义请求配置
interface ExpandAxiosRequestConfig<D = any> extends AxiosRequestConfig<D> {
  interceptorHooks?: InterceptorHooks
  requestOptions?: RequestOptions
}
// 拓展axios请求配置
interface ExpandInternalAxiosRequestConfig<D = any>
  extends InternalAxiosRequestConfig<D> {
  interceptorHooks?: InterceptorHooks
  requestOptions?: RequestOptions
}
// 拓展axios返回配置
interface ExpandAxiosResponse<T = any, D = any> extends AxiosResponse<T, D> {
  config: ExpandInternalAxiosRequestConfig<D>
}

export interface InterceptorHooks {
  requestInterceptor?: (
    config: InternalAxiosRequestConfig,
  ) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (
    res: AxiosResponse,
  ) => AxiosResponse | Promise<AxiosResponse>
  responseInterceptorCatch?: (err: any) => any
}

export default class Request {
  private _instance: AxiosInstance
  private _defaultConfig: ExpandAxiosRequestConfig = {
    baseURL: '/api',
    timeout: 1000 * 10,
    requestOptions: {
      globalErrorMessage: true,
      globalSuccessMessage: false,
    },
  }
  private _interceptorHooks?: InterceptorHooks

  constructor(config: ExpandAxiosRequestConfig) {
    this._instance = axios.create(Object.assign(this._defaultConfig, config))
    this._interceptorHooks = config.interceptorHooks
    this.setupInterceptors()
  }

  // 通用拦截器
  private setupInterceptors(): void {
    this._instance.interceptors.request.use(
      this._interceptorHooks?.requestInterceptor,
      this._interceptorHooks?.requestInterceptorCatch,
    )
    this._instance.interceptors.response.use(
      this._interceptorHooks?.responseInterceptor,
      this._interceptorHooks?.responseInterceptorCatch,
    )
  }

  // 定义核心请求
  public request(config: ExpandAxiosRequestConfig): Promise<AxiosResponse> {
    return this._instance.request(config)
  }

  public get<T = any>(
    url: string,
    config?: ExpandAxiosRequestConfig,
  ): Promise<AxiosResponse<BaseApiResponse<T>>> {
    return this._instance.get(url, config)
  }

  public post<T = any>(
    url: string,
    data?: any,
    config?: ExpandAxiosRequestConfig,
  ): Promise<T> {
    return this._instance.post(url, data, config)
  }

  public put<T = any>(
    url: string,
    data?: any,
    config?: ExpandAxiosRequestConfig,
  ): Promise<T> {
    return this._instance.put(url, data, config)
  }

  public delete<T = any>(
    url: string,
    config?: ExpandAxiosRequestConfig,
  ): Promise<T> {
    return this._instance.delete(url, config)
  }
}
