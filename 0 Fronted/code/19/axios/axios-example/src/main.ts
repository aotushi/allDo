import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import message from './plugins/message'
import httpPlugin from './axios/index'

const app = createApp(App)
app.provide('$message', message)
app.use(httpPlugin)
app.mount('#app')
