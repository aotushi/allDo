// 封装axios

import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  type CancelTokenSource,
  AxiosError,
} from "axios";

export type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig as CustomAxiosRequestConfig,
  AxiosError,
  CancelTokenSource,
};

import { handleChangeRequestHeader, handleRequestHeaderAuth,
  handleAuthError,
  handleGeneralError,
  handleNetworkError
 } from "./tool";

import message from "../plugins/message";

interface RequestOptions {
  globalErrorMessage?: boolean;
  globalSuccessMessage?: boolean;
}


interface ExpandAxiosRequestConfig<D = any> extends AxiosRequestConfig<D> {
}

interface FormatResponse<T> {
  errorno: string
  errmsg: string
  data: T
}

export default class HttpRequest {
  private _instance: AxiosInstance;
  private _defaultConfig: ExpandAxiosRequestConfig = {
    baseURL: import.meta.env.VUE_APP_BASE_URL || "/api",
    timeout: 1000 * 6
  };
  private pendingRequests: Map<string, AbortController>;

  constructor(config: ExpandAxiosRequestConfig) {
    this._instance = axios.create(Object.assign(this._defaultConfig, config));

    this.pendingRequests = new Map();
    this.setupInterceptors();
  }

  private getRequestKey(config: InternalAxiosRequestConfig): string {
    const { method, url, params, data } = config;
    return [method, url, JSON.stringify(params), JSON.stringify(data)].join("&");
  }

  private addPendingRequest(config: InternalAxiosRequestConfig): void {
    const requestKey = this.getRequestKey(config);
    this.removePendingRequest(requestKey);
    
    const controller = new AbortController();
    config.signal = controller.signal;
    this.pendingRequests.set(requestKey, controller);
  }

  private removePendingRequest(requestKey: string): void {
    if (this.pendingRequests.has(requestKey)) {
      const controller = this.pendingRequests.get(requestKey);
      controller?.abort();
      this.pendingRequests.delete(requestKey);
    }
  }

  public cancelAllRequests(): void {
    this.pendingRequests.forEach((controller) => {
      controller.abort();
    });
    this.pendingRequests.clear();
  }

  private setupInterceptors() {
    this._instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 防止重复请求
        this.addPendingRequest(config);

        // 处理请求头
        config = handleChangeRequestHeader(config);
        // 为请求头添加验证信息
        config = handleRequestHeaderAuth(config);

        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    this._instance.interceptors.response.use(
      (response: AxiosResponse) => {
        const requestKey = this.getRequestKey(response.config);
        this.removePendingRequest(requestKey);
        
        if (response.status !== 200) {
          return Promise.reject(response.data);
        }

        handleAuthError(response.data.errno);
        handleGeneralError(response.data.errno, response.data.errmsg);
        return response;
      },
      (error) => {
        if (error.config) {
          const requestKey = this.getRequestKey(error.config);
          this.removePendingRequest(requestKey);
        }
        
        if (axios.isCancel(error)) {
          console.log('请求已取消:', error.message);
          return Promise.reject(new Error('请求已取消'));
        }
        console.log('response>', error)
        
        if (error.response) {
          handleNetworkError(error.response.status);
        } else {
          message.error('网络异常，请稍后重试');
        }
        return Promise.reject(error);
      }
    );
  }

  public async get<T>(
    url: string,
    config?: ExpandAxiosRequestConfig
  ): Promise<AxiosResponse<FormatResponse<T>>> {
    return this._instance.get(url, {
      ...config,
    });
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: ExpandAxiosRequestConfig
  ): Promise<AxiosResponse<FormatResponse<T>>> {
    return this._instance.post(url, data, config);
  }

  public async put<T>(
    url: string,
    data?: any,
    config?: ExpandAxiosRequestConfig
  ): Promise<AxiosResponse<FormatResponse<T>>> {
    return this._instance.put(url, data, config);
  }

  public async delete<T>(
    url: string,
    data?: any,
    config?: ExpandAxiosRequestConfig
  ): Promise<AxiosResponse<FormatResponse<T>>> {
    return this._instance.delete(url, {
      ...config,
      data,
    });
  }

  public async patch<T>(
    url: string,
    data?: any,
    config?: ExpandAxiosRequestConfig
  ): Promise<AxiosResponse<FormatResponse<T>>> {
    return this._instance.patch(url, data, config);
  }
}
