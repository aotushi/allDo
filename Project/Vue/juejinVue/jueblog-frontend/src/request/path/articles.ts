import http from '../index'
import type { ApiResponse, IAnyObj } from '../http'

export interface Article {
  name: string
  desc: string
}
// 文章列表相关api

// 文章列表
const getArticles = <T = Article[]>(params?: IAnyObj): ApiResponse<T> => {
  return http.get<T>('/api/articles', params)
}

export const articleApi = {
  getArticles,
}

// export default articleApi
