import { articleApi } from './path/articles'
import { messageApi } from './path/message'
import { userApi } from './path/user'
import HttpRequest from './http'

// 创建默认请求实例
const http = new HttpRequest()

export default http

export const api = {
  ...userApi,
  ...articleApi,
  ...messageApi,
}
