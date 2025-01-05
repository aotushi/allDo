import http from '../index'
import type { ApiResponse, IAnyObj } from '../http'

export interface Message {
  comment: number
  praise: number
  follow: number
  total: number
}

const getMessages = <T = Message[]>(params?: IAnyObj): ApiResponse<T> => {
  return http.get<T>('/api2/messages/preview', params)
}

export const messageApi = { getMessages }
