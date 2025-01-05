<template>
  <div class="cus-header">
    <!-- v-if="ustore.show_tips" -->
    <div class="site-tips fx-c">
      <span>本项目是开源项目，仅用于交流学习👏</span>
      <!-- @click="ustore.setTips(false)" -->
      <span class="close-btn fx-c">
        <!-- <el-icon><Close /></el-icon> -->
      </span>
    </div>
    <header>
      <div class="inner-row fx">
        <span class="fx-c title-wrap" @click="toHome">
          <!-- <img class="logo" src="/logo.png" /> -->
          <span class="title">仿稀土掘金</span>
        </span>
        <!-- <Menus></Menus> -->
      </div>
      <div class="inner-row fx">
        <!-- <Search style="margin-right: 26px"></Search> -->
        <el-popover
          placement="bottom-end"
          :width="100"
          :show-arrow="false"
          trigger="hover"
          transition="none"
          :hide-after="50"
          ref="popover"
          popper-class="header-message-popover"
        >
          <template #reference>
            <el-button type="primary" :icon="EditPen">开始创作</el-button>
          </template>
          <div class="btn-wrap">
            <el-button text @click="toRoute('/operate/create')"
              >写文章</el-button
            >
            <el-button text @click="toRoute('/shortmsg')">发沸点</el-button>
            <el-button text @click="toRoute('/setting/drafts')"
              >草稿箱</el-button
            >
          </div>
        </el-popover>
        <!-- v-if="ustore.user_info" -->
        <template>
          <Message></Message>
          <!-- <UserAva></UserAva> -->
        </template>
        <template>
          <!-- @click="ustore.showLogin" -->
          <el-button class="hover">登录/注册</el-button>
        </template>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import Message from './message.vue'
import Search from './search.vue'
import UserAva from './user.vue'
import Menus from './menus.vue'
import { EditPen, Close } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// import { useUserStore } from '@/stores'

const router = useRouter()
// const ustore = useUserStore()
const popover = ref()

const toRoute = (url: string) => {
  popover.value.hide()

  router.push(url)
}
</script>

<style scoped></style>
