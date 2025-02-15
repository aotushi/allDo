<template>
  <div class="arts-comments">
    <div class="title">评论</div>
    <div class="comment-create-box fxt">
      <div class="avatar">
        <el-avatar :src="user_info?.avatar">
          <img src="@/assets/avatar.png" />
        </el-avatar>
      </div>
      <div class="editor-wrap">
        <el-input
          v-model="form.content"
          type="textarea"
          placeholder="输入评论内容！"
          maxlength="200"
          :rows="2"
        ></el-input>
        <div class="actions fx-b">
          <div class="desc">良言一句三冬暖，诚恳交流、不带情绪</div>
          <el-button
            type="primary"
            :disabled="formContentLen == 0"
            :loading="loading"
            @click="() => toCreate()"
            >发表评论</el-button
          >
        </div>
      </div>
    </div>
    <div class="title">全部评论 {{ props.count }}</div>
    <cus-comments
      :comments="comments as unknown as CommentResultType"
      @on-reply="toCreate"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useCommentStore, useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import CusComments from '@/components/cus-comment/index.vue'
import Replay from '@/components/cus-comment/replay.vue'
import type { IAnyObj } from '@/request/http'
import type { CommentResultType } from '@/stores/comment/type'
export interface CommentType {
  [index: string]: unknown
}
// interface form_data extends CommentType {}

const {
  user_state: { user_info },
} = useUserStore()
const loading = ref(false)
const comment_store = useCommentStore()
const props = defineProps<{
  art_id: string
  user_id: string
  count: number
}>()
const form = ref<Partial<CommentType>>({
  content: '',
})
const comments = ref<IAnyObj[]>([])
const toCreate = (data = {} as Partial<CommentType>) => {
  let form_data: Partial<CommentType> = { ...form.value, ...data }
  if (!form_data.content) {
    return ElMessage.error('评论内容不可为空')
  }
  loading.value = true
  form_data.created_by = user_info._id
  comment_store.createComment(form_data, res => {
    loading.value = false
    form.value.content = ''
    getComments()
  })
}
const getComments = () => {
  comment_store.getComments(props.art_id, res => {
    comments.value = res as IAnyObj[]
  })
}
const action_load = computed(() => comment_store.comment_info.action_load)
const formContentLen = computed(() => {
  return (form.value.content as unknown[]).length
})
watch(action_load, () => {
  getComments()
})
onMounted(() => {
  form.value = {
    source_id: props.art_id,
    source_type: 1,
    type: 'source',
    content: '',
    target_user: props.user_id,
  }
  getComments()
})
</script>

<style lang="less">
.arts-comments {
  .title {
    font-size: 18px;
    line-height: 30px;
    font-weight: 600;
    margin: 12px 0 18px;
  }
  .avatar {
    margin-right: 16px;
  }
  .editor-wrap {
    flex: 1;
    textarea {
      background: #f5f5f5;
      box-shadow: none;
      font-size: 15px;
      padding: 7px 12px;
      &:focus {
        box-shadow: 0 0 0 1px var(--el-color-primary) inset;
        background: #fff;
      }
    }
    .actions {
      margin: 10px 0;
      .desc {
        font-size: 13px;
        color: var(--font-color3);
      }
    }
  }
}
</style>
