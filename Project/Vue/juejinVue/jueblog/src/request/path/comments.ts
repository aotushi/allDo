import http from '../index'
import type { ApiResponse, IAnyObj } from '../http'
import type { CommentType } from '@/stores/comment/type.d.ts'

// 评论列表
export const getComments = <T = IAnyObj>(id: string): ApiResponse<T> => {
  return http.get<T>('/api2/comments/list/' + id)
}

// 创建评论
export const createComment = <T = IAnyObj>(
  data: Partial<CommentType>,
): ApiResponse<T> => {
  return http.post<T>('/api2/comments/create', data)
}

// 删除评论
export const removeComment = (id: string) => {
  return http.delete('/api2/comments/delete/' + id)
}

export const commentsApi = {
  getComments,
  createComment,
  removeComment,
}
