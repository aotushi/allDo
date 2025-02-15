<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import CusHeader from '@/components/cus-header/index.vue'
// import { useArticleApi } from '@/composables/useArticleApi'
import CusLogin from '@/components/cus-login/index.vue'
import { useUserStore } from '@/stores'
import { watch, computed, ref } from 'vue'

// async function getData() {
//   axios
//     .get('/api2/users/list', {
//       headers: {
//         Authorization:
//           'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NWJjZjJjYjM1N2ViOGI0YjQwN2VmMyIsInVzZXJuYW1lIjoiYWJjMiIsImlhdCI6MTczNTQ0Mzg3OSwiZXhwIjoxNzM2MDQ4Njc5fQ.EuGrIGJamCwncmAarRnc-RMVLDLY1L8qPEzbTwUM9po',
//       },
//     })
//     .then(res => {
//       return res.data
//     })
//     .then(res => {
//     })
// }

// let a

const user_store = useUserStore()
const login_ref = ref<InstanceType<typeof CusLogin> | null>(null)

const need_login = computed(() => user_store.user_state.need_login)

watch(need_login, new_val => {
  if (new_val) {
    login_ref.value!.visible = true
  }
})
onMounted(() => {})
</script>

<template>
  <div id="root-layout">
    <div id="header-layout">
      <!-- 头部组件区域 -->
      <CusHeader />
    </div>
    <div id="main-layout">
      <!-- 路由区域 -->
      <RouterView />
      <CusLogin ref="login_ref" />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
