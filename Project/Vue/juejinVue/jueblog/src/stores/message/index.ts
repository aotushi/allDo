import { defineStore } from 'pinia'
import { api } from '@/request/index'
import { ref } from 'vue'
import type { Message, comments } from '@/request/path/message'
// import type { IAnyObj } from '@/request/http'
import request from '@/request'
import { ElMessage } from 'element-plus'

interface FollowDataType {
  _id: string
  user_id: string
  fans_id: string
  created_at: string
  __v: number
  fans_info: {
    _id: string
    phone: string
    username: string
    avatar: string
    introduc: string
    position: string
  }
  is_follow: boolean
}

export interface FollowType {
  meta: {
    total: number
    page: number
    per_page: number
  }
  data: FollowDataType[]
}
export const useMessageStore = defineStore(
  'message',
  () => {
    const msgInfo = ref<Message>({
      comment: 0,
      praise: 0,
      follow: 0,
      total: 0,
    })

    async function getMessage() {
      try {
        const res = await api.messageApi.getMessages()

        const [err, data] = res

        if (!err && data) {
          const { errno, errmsg: err_msg, data: msg_data } = data

          if (msg_data && !errno && !err_msg) {
            msgInfo.value = msg_data
          }
        }
      } catch (err) {
        ElMessage.error('获取消息失败' + err)
      }
    }

    // 评论
    async function getComment(fun: (res: comments) => void, page = 1) {
      try {
        const res = await api.messageApi.getComments(page)
        const [err, data] = res
        if (!err) {
          if (data?.data) {
            const { data: messageData } = data
            fun(messageData)
          }
        }
      } catch (err) {
        ElMessage.error('获取评论失败' + err)
      }
    }

    // 点赞
    async function getPraises(fun: (res: unknown) => void, page = 1) {
      try {
        const params = { page }
        const res = await request.get('/api2/praises/mylist', { ...params })
        const [err, data] = res
        if (!err && data) {
          if (data?.data) {
            const { data: praiseData } = data
            fun(praiseData)
          }
        }
        // fun(res)
      } catch (error) {
        fun(null)
        ElMessage.error('获取点赞失败' + error)
      }
    }

    async function getFollows(fun: (res: FollowType | null) => void, page = 1) {
      try {
        const params = { page }
        const res = await request.get<FollowType>('/api2/follows/lists', {
          params,
        })
        const [err, data] = res
        if (!err && data) {
          if (data?.data) {
            const { data: FollowData } = data
            fun(FollowData)
          }
        }
      } catch (error) {
        fun(null)
        ElMessage.error('获取关注失败' + error)
      }
    }

    return {
      msgInfo,
      getMessage,
      getComment,
      getPraises,
      getFollows,
    }
  },
  {
    persist: true,
  },
)
