import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
import store from './store/index'
import fastclick from 'fastclick'



const app = createApp(App);
app.config.globalProperties.$mybus = new mitt()
app.use(router);
app.use(store);
app.mount('#app');

fastclick.attach(document.body);