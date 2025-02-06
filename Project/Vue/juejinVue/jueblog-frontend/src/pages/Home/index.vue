<script setup lang="ts">
import { useArticleStore, useMessageStore, useUserStore } from '@/stores'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavComp from './nav.vue'
import Articles from './articles.vue'
import Others from './other.vue'
import { listener } from '@/utils'
// import type { IAnyObj } from '@/request/http'

const article_store = useArticleStore()
const user_store = useUserStore()
const router = useRouter()
const route = useRoute()
const filter = ref<any>({})
const loading = ref(false)
const onFilter = (json: Record<string, string>) => {
  filter.value = {
    ...filter.value,
    ...json,
  }
  if (filter.value.page) {
    delete filter.value.page
  }
  router.push({
    query: filter.value,
  })
  console.log('filter.value>', { ...filter.value })
  article_store.getArticles({ ...filter.value })
}
const onScrollEnd = () => {
  let { page, per_page, total } = article_store.articleInfo.meta
  if (page * per_page >= total) {
    return false
  }
  if (loading.value) return
  loading.value = true
  filter.value.page = page + 1
  article_store.getArticles(filter.value)
}
onMounted(() => {
  filter.value = route.query
  article_store.getCategory()
  article_store.getArticles(filter.value)
  if (user_store.user_state.user_info) {
    useMessageStore().getMessage()
  }
  listener.apply('scroll-end', onScrollEnd)
})
</script>

<template>
  <main class="main-box fxt">
    <NavComp
      :category="article_store.articleInfo.categories"
      @on-filter="onFilter"
    />
    <div class="main-ctx fxt">
      <Articles
        :articles="article_store.articleInfo.articles"
        :loading="article_store.articleInfo.loading"
        @on-filter="onFilter"
      />
      <Others />
    </div>
  </main>
</template>

<style lang="less">
.main-box {
  .main-ctx {
    flex: 1;
  }
}
</style>
