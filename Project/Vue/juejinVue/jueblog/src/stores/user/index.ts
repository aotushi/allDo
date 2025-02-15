import { defineStore } from 'pinia'
import { api } from '@/request/index'
import { ref } from 'vue'
import type { IAnyObj } from '@/request/http'
import { ElMessage } from 'element-plus'
import request from '@/request/index'

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

const getInitialData = (): {
  show_tips: boolean
  need_login: boolean
  user_info: UserType
} => ({
  show_tips: false,
  need_login: false,
  user_info: <UserType>{
    _id: '',
    phone: '',
    username: '',
    avatar: '',
    introduc: '',
    company: '',
    position: '',
    good_num: 0,
    jue_power: 0,
    read_num: 0,
    fans_num: 0,
    follow_num: 0,
  },
})

export const useUserStore = defineStore(
  'user',
  () => {
    const user_state = ref({
      ...getInitialData(),
    })

    function resetUserState() {
      user_state.value = {
        ...getInitialData(),
      }
    }
    function showLogin(): void {
      user_state.value.need_login = !user_state.value.need_login
    }

    function setTips(bool = true) {
      user_state.value.show_tips = bool
    }

    function setUserInfo(info: UserType) {
      user_state.value.user_info = info
      localStorage.setItem('jueblog_user_info', JSON.stringify(info))
    }
    // 登录
    async function login(form: IAnyObj, fun: (code: number) => void) {
      try {
        const res = await api.login(form)
        const [err, resData] = res

        if (!err) {
          if (resData?.data) {
            if (resData.data.code === 20001 && resData.data.message) {
              ElMessage.error(resData.data.message)
            }

            if (resData.data.code === 200 && resData.data.token) {
              localStorage.setItem('jueblog_token', resData.data.token)

              user_state.value.user_info = resData.data
                .result as unknown as UserType
            }

            fun(resData.data.code)
          }
        }
      } catch (error) {
        fun(500)
        ElMessage.error('登录失败' + error)
      }
    }

    // 注册
    async function register(form: IAnyObj, fun: (code: number) => void) {
      try {
        const [error, res] = await api.register(form)
        if (!error) {
          if (res?.data) {
            if (Object.keys(res.data).includes('_id')) {
              login(form, fun)
              ElMessage.success('注册成功')

              fun(200)
            } else {
              ElMessage.error('注册失败')
              fun(500)
            }
          }
        }
      } catch (error) {
        ElMessage.error('注册失败' + error)
      }
    }

    // 关注/取消关注
    async function toggleFollow(
      dataParams: Record<string, string>,
      fun?: (data: unknown) => void,
    ) {
      try {
        const res = await api.toggleFollow(dataParams)
        const [err, data] = res
        if (!err && data) {
          if (data?.data) {
            const { data: followData } = data
            if (fun) {
              fun(followData)
            }
          }
        }
      } catch (error) {
        ElMessage.error('操作失败' + error)
      }
    }

    // 检测是否关注某个用户
    async function checkFollow(user_id: string, fun?: (data: unknown) => void) {
      try {
        const res = await api.checkFollow(user_id)
        const [err, data] = res
        if (!err && data) {
          if (data?.data) {
            const { data: followData } = data
            if (fun) {
              fun(followData)
            }
          }
        }
      } catch (error) {
        ElMessage.error('操作失败' + error)
      }
    }

    // 获取用户信息
    async function getUser(id: string, fun?: (data: unknown) => void) {
      try {
        const res = await api.getUser(id)
        const [err, data] = res
        if (!err && data?.data) {
          if (id == 'self') {
            setUserInfo(data.data)
          }

          if (fun) {
            fun(data.data)
          }
        }
      } catch (error) {
        ElMessage.error('获取用户信息失败' + error)
      }
    }

    // 修改用户信息
    async function updateUser(
      id: string,
      data: Partial<UserType>,
      fun?: (data: unknown) => void,
    ) {
      try {
        console.log('updateUser>id', id)
        const res = await request.put('/api2/users/update/' + id, data)
        const [err, dataRes] = res
        if (!err && dataRes) {
          if (dataRes?.data) {
            console.log('getUser执行了')

            getUser('self')
            if (fun) {
              fun(dataRes.data)
            }
          }
        }
      } catch (error) {
        console.log(error)
      }
    }

    return {
      user_state,
      showLogin,
      setTips,
      setUserInfo,
      login,
      register,
      toggleFollow,
      checkFollow,
      getUser,
      resetUserState,
      updateUser,
    }
  },
  {
    // persist: true,
    persist: {
      key: 'user_state',
      storage: localStorage,
      pick: ['user_state.user_info'],
      omit: ['user_state.show_tips', 'user_state.need_login'],
    },
  },
)
