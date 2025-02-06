import { defineStore } from 'pinia'
import { api } from '@/request/index'
import { ref } from 'vue'
import type { Message } from '@/request/path/message'
import type { IAnyObj } from '@/request/http'
import request from '@/request'

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
        const res = await api.getMessages()

        const [err, data] = res

        if (!err && data) {
          const { errno, errmsg: err_msg, data: msg_data } = data

          if (msg_data && !errno && !err_msg) {
            msgInfo.value = msg_data
          }
        }
      } catch (err) {
        console.log('err', err)
      }
    }

    // 评论
    async function getComment(fun: (res: IAnyObj) => void, page = 1) {
      try {
        const res = await api.getComments(page + '')
        const [err, data] = res
        if (!err) {
          if (data?.data) {
            const { data: messageData } = data
            fun(messageData)
          }
        }
      } catch (err) {
        console.log('err', err)
      }
    }

    // 点赞
    async function getPraises(fun: (res: any) => void, page = 1) {
      try {
        const params = { page }
        const res = await request.get('/api2/praises/mylist', { params })
        fun(res)
      } catch (error) {
        fun(null)
        console.log(error)
      }
    }
    async function getFollows(fun: (res: any) => void, page = 1) {
      try {
        const params = { page }
        const res = await request.get('/api2/follows/lists', { params })
        fun(res)
      } catch (error) {
        fun(null)
        console.log(error)
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
