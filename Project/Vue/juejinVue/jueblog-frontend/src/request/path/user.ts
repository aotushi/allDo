import http from '../index'
import type { ApiResponse, FcResponse } from '../http'
import type { IAnyObj } from '@/request/http'

export interface UserType {
  _id: string
  phone: string
  username: string
  avatar: string
  introduc: string
  company: string
  position: string
  good_num: number
  jue_power: number
  read_num: number
  fans_num?: number
  follow_num?: number
}

// 示例转换函数：添加默认年龄
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const addDefaultAge = (
  response: FcResponse<UserType>,
): FcResponse<UserType> => {
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
export interface loginResData {
  code: number
  token: string
  message: { [index: string]: string }
}

export interface registerResData {
  phone: string
  username: string
  password: string
  avatar: string
  introduc: string
  position: string
  company: string
  jue_power: number
  good_num: number
  read_num: number
  _id: string
  __v: number
}

// 不使用转换函数的普通请求
const updateUser = <T = IAnyObj>(
  id: string,
  data: Partial<UserType>,
): ApiResponse<T> => {
  return http.put<T>('/api2/users/update/' + id, data)
}

// 登录
const login = <T = loginResData>(form: IAnyObj): ApiResponse<T> => {
  return http.post('/api2/users/login', form)
}

// 注册
const register = <T = registerResData>(
  form: Partial<UserType>,
): ApiResponse<T> => {
  return http.post('/api2/users/create', form)
}

// 获取用户
const getUser = <T = IAnyObj>(id: string): ApiResponse<T> => {
  return http.get('/api2/users/info/' + id)
}

// 关注/取消关注
const toggleFollow = <T = IAnyObj>(
  data: Record<string, string>,
): ApiResponse<T> => {
  return http.post('/api2/follows/toggle', data)
}

// 检测是否关注某用户
const checkFollow = <T = IAnyObj>(user_id: string): ApiResponse<T> => {
  return http.post('/api2/follows/is-follow', { user_id })
}

export const userApi = {
  updateUser,
  login,
  register,
  getUser,
  toggleFollow,
  checkFollow,
}

// export default userApi
