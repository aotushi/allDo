import axios, {
  AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'

// 创建axios实例
const instance = axios.create({
  timeout: 1000 * 10, // 请求超时时间
  baseURL: import.meta.env.VUE_APP_BASE_URL || '',
})

// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default instance

/**
 * 对于具体的业务接口（如 getUserInfo），建议使用明确的接口定义而不是泛型
 * 将通用的请求函数保留泛型以保持灵活性
 * 在 api 层定义明确的类型，在请求层保持泛型的灵活性
 */
