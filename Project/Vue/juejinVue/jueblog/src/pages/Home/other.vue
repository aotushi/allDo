<script setup lang="ts">
import { onMounted } from 'vue'
const toGithub = () => {
  window.open(
    'https://github.com/aotushi/allDo/tree/master/Project/Vue/juejinVue',
  )
}
onMounted(() => {})
</script>

<template>
  <div class="main-writer">
    <div class="box-wrap fx-b">
      <div>
        <h4>项目仓库</h4>
        <p>前端、接口完整源码</p>
      </div>
      <el-button @click="toGithub">查看详情</el-button>
    </div>
  </div>
</template>

<style lang="less">
.main-writer {
  width: 260px;
  margin-left: 20px;
  position: sticky;
  top: 80px;
  .box-wrap {
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 16px;
    h4 {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 4px;
    }
    img {
      display: block;
      max-width: 100%;
      margin: 0 auto;
    }
  }
}
</style>
