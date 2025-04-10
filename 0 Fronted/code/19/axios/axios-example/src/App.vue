<script setup lang="ts">
import { inject, ref } from 'vue'
import axios from 'axios'


const $http = inject('http') as typeof axios

const message = inject('$message') as messageType


message.success('Hello, world!')



$http.get('/api/tests', {
  baseURL: 'http://localhost:1337', // 直接设置baseURL
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': undefined
  }
}).then((res: any) => {
  console.log('res>>', res)
}).catch(err => {
  console.log('err', err);
  
})





const testInfoList = ref([])
// $http.get('/tests')
//   .then(res => {
//     console.log('API响应:', res)
//     testInfoList.value = res.data.data || []
//   })
//   .catch(error => {
//     console.error('API错误:', error)
//   })
</script>

<template>
  <div v-show="testInfoList.length > 0">
    <div v-for="item in testInfoList" :key="item.id">
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped>

</style>
