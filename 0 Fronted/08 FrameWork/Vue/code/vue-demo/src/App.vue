<script setup>
import MyInput from './components/MyInput.vue'

</script>

<template>
  <main>
    <!-- <h3>父组件</h3> -->
    <MyInput model-value="123">
      <!-- 插槽 -->
       <template #append>
        <div>append</div>
       </template>
    </MyInput>
  </main>
</template>

<style scoped>

</style>
