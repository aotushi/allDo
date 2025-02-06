import { defineStore } from 'pinia'
import request from '@/request'
import type { ShortMsgType, GroupType } from './type'
import type { IAnyObj } from '@/request/http'

const useShortMsgStore = defineStore('short-msg', {
  state: () => ({
    loading: false,
    shortmsgs: [] as ShortMsgType[],
    groups: [] as GroupType[],
    circles: [] as GroupType[],
    meta: {
      page: 1,
      per_page: 10,
      total: 0,
    },
  }),
  actions: {
    // 删除操作列表
    async spliceShortMsgs(index: number) {
      this.shortmsgs.splice(index, 1)
    },

    // 沸点列表
    async getShortmsgs(
      params: Record<string, string> = {},
      fun?: (data: unknown) => void,
    ) {
      try {
        if (params.group == 'all') {
          params.group = ''
        }
        const page = +params.page || 1
        if (page == 1) {
          this.loading = true
        }
        const res = await request.get<{
          meta: IAnyObj
          data: ShortMsgType[]
        }>('/api2/stmsgs/lists', { ...params })

        const [err, data] = res

        if (!err && data) {
          if (data?.data) {
            const { data: shortMsgs } = data
            this.shortmsgs =
              page == 1 ? shortMsgs.data : this.shortmsgs.concat(shortMsgs.data)
            this.meta = shortMsgs.meta as {
              page: number
              per_page: number
              total: number
            }

            if (fun) fun(shortMsgs)
          }
        }
        this.loading = false
      } catch (error) {
        this.loading = false
        console.log(error)
      }
    },
    // 沸点分组
    async getGroups() {
      try {
        const res = await request.get<GroupType[]>('/api2/stmsgs/group')

        const [err, data] = res
        if (!err && data) {
          const { data: groups } = data
          this.groups = groups
          const circle = groups.find(row => row.key == 'circles')
          this.circles = circle?.children || []
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 操作点赞
    async togglePraise(dataParam: IAnyObj, fun: (bool: boolean) => void) {
      try {
        dataParam.type = 1
        dataParam.target_type = 2
        const res = await request.post<{ action: string; message: string }>(
          '/api2/praises/toggle',
          dataParam,
        )

        const [err, data] = res
        if (!err && data) {
          if (data?.data) {
            const { data: praiseData } = data
            fun(praiseData.action == 'create' ? true : false)
          }
        }
        // fun(res.action == 'create' ? true : false)
      } catch (error) {
        console.log(error)
      }
    },
    getGpLabel(key: string) {
      const one = this.circles.find(row => row.key == key)
      return one ? one.label : null
    },
    // 创建沸点
    async createMsg(data: Partial<ShortMsgType>, fun: (data: unknown) => void) {
      try {
        const res = await request.post('/api2/stmsgs/create', data)
        const [err, dataRes] = res
        if (!err && dataRes) {
          if (dataRes?.data) {
            const { data: msgData } = dataRes
            fun(msgData)
          }
        }
        // fun(res)
      } catch (error) {
        fun(false)
        console.log(error)
      }
    },
    // 删除沸点
    async removeMsg(id: string, fun: () => void) {
      try {
        await request.delete('/api2/stmsgs/remove/' + id)
        fun()
      } catch (error) {
        console.log(error)
      }
    },
  },
})

export { useShortMsgStore }
