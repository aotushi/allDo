<script setup lang="ts">
import { inject, onCreated } from 'vue'

const message = inject('$message')

const handleClick = () => {
  message?.success('操作成功')
}

  message?.success('Hello, world!')
</script>

<template>
  <div>
    <button @click="handleClick">Click</button>
  </div>
</template>

<style scoped>

</style>
