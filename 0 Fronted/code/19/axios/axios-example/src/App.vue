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



const handleBtnClick = () => {
  $http.get('/tests').then(res => {
    console.log('点击按钮', res)
    if (res.data) {
      console.log(res.data.data);
      
      testInfoList.value = res.data.data
    }
  }).catch(err => {
    console.log('点击按钮err', err);
  })
}



interface requestListType {
  url: string
  progress: number
  cancel: () => void
}
const requestList = ref<requestListType[]>([])

const testInfoList = ref([])
// $http.get('/tests')
//   .then(res => {
//     console.log('API响应:', res)
//     testInfoList.value = res.data.data || []
//   })
//   .catch(error => {
//     console.error('API错误:', error)
//   })


const addRequest = () => {
  const lastReqIndex = requestList.value[requestList.value.length - 1].url
  if (lastReqIndex) {
    // let newUrl = lastReqIndex.split('/')
  }
  const newRequest: requestListType = {
    url: '/tests',
    progress: 0,
    cancel: () => {
      
    }
  }
  requestList.value.push(newRequest)
}
</script>

<template>

  <div>
    <button @click="handleBtnClick">按钮</button>
  </div>  
  
  
  
  <div v-show="testInfoList.length > 0">
    <div v-for="item in testInfoList" :key="item.id">
      {{ item.name }}
    </div>
  </div>

  <div class="router-view">
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
