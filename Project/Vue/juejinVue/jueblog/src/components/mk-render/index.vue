<script lang="ts" setup>
// @ts-expect-error @ts-ignore
import showdown from 'showdown'
import showdownHighlight from 'showdown-highlight'
import 'highlight.js/lib/languages/yaml'
import { onMounted, ref } from 'vue'

showdown.setOption('tables', true)
showdown.setOption('tasklists', true)
showdown.setFlavor('github')

const props = defineProps<{
  content: string
}>()

const contentLocal = ref('')

onMounted(() => {
  let converter = new showdown.Converter({
    extensions: [
      showdownHighlight({
        pre: true,
      }),
    ],
  })
  contentLocal.value = converter.makeHtml(props.content)
})
</script>

<template>
  <article className="cus-mk-render" v-html="contentLocal"></article>
</template>

<style lang="less">
@import '@/components/cus-editor/index.less';
.cus-mk-render {
  padding: 0 30px;
  word-break: break-word;
  line-height: 1.75;
  font-weight: 400;
  font-size: 15px;
  overflow-x: hidden;
  color: #333;
  .cus-markdown-style();
}
</style>
