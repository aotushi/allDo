import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import message from './plugins/message'

const app = createApp(App)
app.provide('$message', message)
app.mount('#app')
