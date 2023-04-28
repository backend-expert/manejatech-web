import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import mainCss from '@/assets/css/main.css';
import mainJs from '@/assets/js/main.js';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

// import  {  ObserveVisibility  }  from  'vue-observe-visibility'


createApp(App)
    .use(store)
    .use(router)
    .use(mainCss)
    .use(mainJs)
    .use(bootstrap)
    // .use(ObserveVisibility)
    .mount('#app')
