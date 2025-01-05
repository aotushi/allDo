import { defineStore } from 'pinia'
import { api } from '@/request/index'
import { ref } from 'vue'
import type { Message } from '@/request/path/message'

export const useMessageStore = defineStore('message', () => {
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
      if (!err) {
        if (data?.data) {
          const { data: messageData } = data
          msgInfo.value = messageData[0]
        }
      }
    } catch (err) {
      console.log('err', err)
    }
  }

  return {
    msgInfo,
    getMessage,
  }
})
