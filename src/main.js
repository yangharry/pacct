import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import './registerServiceWorker'
import Marketlistbtn from "./components/Marketlistbtn";
import Marketheader from "./components/Marketheader";

const app = createApp(App)
app.use(router)

app.component("Market-listbtn", Marketlistbtn)
app.component("Market-header", Marketheader)

app.mount("#app")