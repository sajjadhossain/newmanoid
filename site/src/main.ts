import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import router from './router'
import App from './App.vue'
import './stylesheets/main.css'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.mount('#app')