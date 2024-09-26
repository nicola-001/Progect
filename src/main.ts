import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from "@/router/index";
import pinia from "@/stores/index"
// 引入鉴权文件
import '@/permission'


const app = createApp(App)

app.use(pinia)

app.use(router)

app.use(ElementPlus)
app.mount('#app')
