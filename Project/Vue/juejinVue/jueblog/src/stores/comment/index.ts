import { defineStore } from 'pinia'
import { api } from '@/request/index'
import { ref } from 'vue'
// import type { IAnyObj } from '@/request/http'
import { ElMessage } from 'element-plus'
import type { CommentType } from './type'

export const useCommentStore = defineStore(
  'comment',
  () => {
    const comment_info = ref({
      action_load: 1,
    })

    // 评论列表

    async function getComments(id: string, fun: (data: unknown) => void) {
      try {
        const res = await api.getComments(id)
        const [err, data] = res
        if (!err && data) {
          if (data?.data) {
            const { data: commentData } = data
            if (fun) {
              fun(commentData)
            }
          }
        }
      } catch (error) {
        ElMessage.error('获取评论列表失败' + error)
      }
    }

    // 创建评论
    async function createComment(
      dataParams: Partial<CommentType>,
      fun: (data: unknown) => void,
    ) {
      try {
        const res = await api.createComment(dataParams)
        const [err, data] = res
        if (!err && data) {
          if (data?.data) {
            const { data: commentData } = data
            if (fun) {
              fun(commentData)
            }
          }
        }
      } catch (error) {
        ElMessage.error('创建评论失败' + error)
      }
    }

    // 删除评论
    async function removeComment(id: string, fun?: (data: unknown) => void) {
      try {
        await api.removeComment(id)
        if (fun) {
          fun(true)
        }
      } catch (error) {
        ElMessage.error('删除评论失败' + error)
      }
    }

    function reload() {
      comment_info.value.action_load++
    }

    return {
      comment_info,
      getComments,
      createComment,
      removeComment,
      reload,
    }
  },
  {
    persist: true,
  },
)
