import http from '../index'
import type { ApiResponse, IAnyObj } from '../http'
import type { ArticleType, CategoryType } from '@/stores/article/type'

export interface ArticleList {
  meta: {
    [index: string]: number
  }
  data: ArticleType[]
}

// 文章列表相关api

// 文章列表
const getArticlesList = <T = ArticleList>(params?: IAnyObj): ApiResponse<T> => {
  return http.get<T>('/api2/articles/lists', params)
}

// 文章详情
const getArticlesDetail = <T = ArticleType>(id: string): ApiResponse<T> => {
  return http.get('/api2/articles/detail/' + id)
}

// 文章分类
const getCategory = <T = CategoryType[]>(): ApiResponse<T> => {
  return http.get('/api2/articles/category')
}

// 操作点赞/收藏
const togglePraise = <T = IAnyObj>(data: IAnyObj): ApiResponse<T> => {
  return http.post('/api2/praises/toggle', data)
}

// 创建文章
const createArticle = (data: Partial<ArticleType>) => {
  return http.post('/api2/articles/create', data)
}

// 修改文章
const updateArticle = (id: string, data: Partial<ArticleType>) => {
  return http.put('/api2/articles/update/' + id, data)
}

// 发布文章
const publishArticle = (id: string) => {
  return http.post('/api2/articles/publish/' + id)
}

// 删除文章
const deleteArticle = (id: string) => {
  return http.delete('/api2/articles/remove/' + id)
}

export const articleApi = {
  getArticlesList,
  getArticlesDetail,
  getCategory,
  togglePraise,
  createArticle,
  updateArticle,
  publishArticle,
  deleteArticle,
}

// export default articleApi
