<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Articles from '@/pages/article/lists.vue'
import type { ArticleType } from '@/stores/article/type'

const route = useRoute()
const orderby = ref('hot')
const props = defineProps<{
  articles: ArticleType[]
  loading: boolean
}>()
const emit = defineEmits<{
  (e: 'onFilter', json: Record<string, string>): void
}>()

const onFilter = (e: MouseEvent) => {
  if (!e.target) return
  let dom = e.target
  if (!(dom as HTMLElement).dataset.val) return
  orderby.value = (dom as HTMLElement).dataset.val ?? 'hot'
  emit('onFilter', { orderby: orderby.value })
}

onMounted(() => {
  orderby.value = (route.query['orderby'] as string) || 'hot'
})
</script>

<template>
  <div class="main-articles">
    <div class="cus-tabs-header">
      <ul @click="onFilter">
        <li data-val="hot" :class="{ active: orderby == 'hot' }">最热</li>
        <li data-val="new" :class="{ active: orderby == 'new' }">最新</li>
      </ul>
    </div>
    <Articles v-if="!loading" :articles="props.articles" />
    <div v-show="loading" style="padding: 20px">
      <el-skeleton animated />
    </div>
  </div>
</template>

<style lang="less">
.main-articles {
  background: #fff;
  border-radius: 4px;
  flex: 1;
}
</style>
