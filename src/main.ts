import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入element
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// 引入element结束
const app = createApp(App)
app.use(ElementPlus) // 引入element
app.use(store).use(router).mount('#app')
console.log(process.env.NODE_ENV)
