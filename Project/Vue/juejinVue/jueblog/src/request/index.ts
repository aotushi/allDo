import { articleApi } from './path/articles'
import { messageApi } from './path/message'
import { userApi } from './path/user'
import { commentsApi } from './path/comments'
import HttpRequest from './http'
// type ApiFunction = (...args: unknown[]) => unknown
// type ApiFunction<T extends unknown[] = unknown[]> = (...args: T) => unknown

// interface Api extends Record<string, ApiFunction> {}

// 创建默认请求实例
const http = new HttpRequest()

export default http

export const api = {
  ...userApi,
  ...articleApi,
  messageApi,
  ...commentsApi,
}
