import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import './registerServiceWorker'

createApp(App).use(router).mount('#app')
