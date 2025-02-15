const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home/index.vue'),
  },
  {
    path: '/shortmsg',
    name: 'shortmsg',
    component: () => import('@/pages/short-msg/index.vue'),
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/pages/message/index.vue'),
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('@/pages/article/detail.vue'),
  },
  {
    path: '/operate/:tag',
    name: 'operate',
    component: () => import('@/pages/article/operate.vue'),
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('@/pages/user/index.vue'),
  },
  {
    path: '/setting/:tag',
    name: 'setting',
    component: () => import('@/pages/setting/index.vue'),
  },
  {
    path: '/mobile',
    name: 'mobile',
    // component: () => import('@/pages/other/mobile.vue'),
    component: () => import('../pages/other/mobile.vue'),
  },
]

export default routes
