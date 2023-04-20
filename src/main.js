import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import api from '@/services/api'


createApp(App).use(store).use(router).mount('#app')
