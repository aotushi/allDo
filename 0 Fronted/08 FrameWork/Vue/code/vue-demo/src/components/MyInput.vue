<template>
  <div class="w-1/2 h-screen flex items-center justify-center mx-auto">
    <div class="bg-gray-100 p-8 rounded shadow">
      <div>二次封装input 自定义的内容</div>
      <h3>父组件</h3>
      <!-- <el-input v-bind="{...$attrs, ...props}"></el-input> -->
      <!-- 插槽 -->
       <component :is="h(ElInput, {...$attrs, ...props, ref: changeRef}, $slots)"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import {type InputProps, ElInput} from 'element-plus'
import {h, getCurrentInstance} from 'vue'
const props = defineProps<Partial<InputProps>>()
  const vm = getCurrentInstance()
  function changeRef(inputInstance) {
    console.log(inputInstance);
    vm.exposed = inputInstance || {};
    vm.exposeProxy = inputInstance || {};
  }

/**
 * 1.props 如何透传
 * 2.插槽 如何穿透
 * 3.组件的方法 如何暴露
 */
</script>

<style scoped>

</style>