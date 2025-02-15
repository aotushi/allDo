<template>
  <div class="header-message">
    <el-popover
      placement="bottom-end"
      :width="144"
      :show-arrow="false"
      trigger="hover"
      transition="none"
      :hide-after="50"
      :offset="14"
      popper-class="header-message-popover"
    >
      <template #reference>
        <el-badge
          :value="msgInfo.total"
          :hidden="msgInfo.total == 0"
          class="total-badge"
        >
          <span class="icon-wrap" @click="toMessage('1')">
            <span class="iconfont icon-notify"></span>
          </span>
        </el-badge>
      </template>
      <div class="btn-wrap">
        <el-button text @click="toMessage('1')">
          <span>评论</span>
          <el-badge :value="msgInfo.comment" :hidden="msgInfo.comment == 0" />
        </el-button>
        <el-button text @click="toMessage('2')">
          <span>赞和收藏</span>
          <el-badge :value="msgInfo.praise" :hidden="msgInfo.praise == 0" />
        </el-button>
        <el-button text @click="toMessage('3')">
          <span>新增粉丝</span>
          <el-badge :value="msgInfo.follow" :hidden="msgInfo.follow == 0" />
        </el-button>
      </div>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { useMessageStore } from '@/stores'
import { storeToRefs } from 'pinia'

import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElPopover } from 'element-plus'

const messageStore = useMessageStore()
let { msgInfo } = storeToRefs(messageStore)
const router = useRouter()

const toMessage = (type: string) => {
  let url = '/message'
  if (type !== '1') {
    url += `?type=${type}`
  }
  router.push(url)
}

onMounted(() => {
  messageStore.getMessage()
})
</script>

<style scoped></style>
