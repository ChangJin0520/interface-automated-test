import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import { router } from './route'
import ElementPlus from 'element-plus'

import InDevelopment from '@components/in-development/in-development.vue';
import Icon from '@components/icon/icon.vue';

import '@assets/style/common.less'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 插件
app.use(store)
    .use(router)
    .use(ElementPlus, {
        size: 'medium'
    })

// 全局组件
app.component('InDevelopment', InDevelopment)
    .component('Icon', Icon)

app.mount('#app')
