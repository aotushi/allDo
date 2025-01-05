import { ref } from 'vue'
import { api } from '@/request/index'
import type { Article } from '@/request/path/articles'

export function useArticleApi() {
  const articleList = ref<Article[]>([])
  const error = ref<Error | null>(null)

  const getArticlesList = async () => {
    const [err, response] = await api.getArticles()
    if (err === null && response) {
      articleList.value = response.data
    } else {
      error.value = err
    }
  }

  return {
    articleList,
    error,
    getArticlesList,
  }
}
