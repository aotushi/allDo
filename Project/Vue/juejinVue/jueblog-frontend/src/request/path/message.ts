import http from '../index'
import type { ApiResponse, IAnyObj } from '../http'

export interface Message {
  comment: number
  praise: number
  follow: number
  total: number
}

const getMessages = <T = Message>(params?: IAnyObj): ApiResponse<T> => {
  return http.get<T>('/api2/messages/preview', params)
}

const getComments = <T = IAnyObj>(page = 1): ApiResponse<T> => {
  const params = { page }
  return http.get<T>('/api2/comments/mylist', params)
}

// getPraises
const getPraises = <T = IAnyObj>(page = 1): ApiResponse<T> => {
  const params = { page }
  return http.get('/api2/praises/mylist', params)
}

// getFollows
const getFollows = <T = IAnyObj>(page = 1): ApiResponse<T> => {
  const params = { page }
  return http.get('/api2/follows/lists', params)
}

export const messageApi = { getMessages, getComments, getPraises, getFollows }
