import http from '../index'
import type { ApiResponse, FcResponse } from '../http'

interface UserInfo {
  name: string
  age?: number
  email?: string
}

// 示例转换函数：添加默认年龄
const addDefaultAge = (
  response: FcResponse<UserInfo>,
): FcResponse<UserInfo> => {
  if (response.data && !response.data.age) {
    return {
      ...response,
      data: { ...response.data, age: 18 },
    }
  }
  return response
}

// export const userApi = {
// 使用转换函数的例子
const getUserInfo = <T = UserInfo>(id: string): ApiResponse<T> => {
  return http.get<T>('/user/info', { id }, addDefaultAge as any)
}

// 不使用转换函数的普通请求
const updateUser = <T = UserInfo>(
  id: string,
  data: Record<string, unknown>,
): ApiResponse<T> => {
  return http.put<T>('/user', data, { id })
}

export const userApi = {
  getUserInfo,
  updateUser,
}

export type { UserInfo }
// export default userApi
