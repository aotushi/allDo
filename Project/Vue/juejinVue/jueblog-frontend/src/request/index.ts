import { userApi } from './path/user'
import HttpRequest from './http'

// 创建默认请求实例
const http = new HttpRequest()

export type { ApiResponse, FcResponse, IAnyObj } from './http'
export default http

export const api = {
  ...userApi,
}
