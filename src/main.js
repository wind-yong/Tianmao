import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import store from './store'
import router from './router'
import axios from "axios";
Vue.prototype.$axios = axios
Vue.prototype.$host = 'http://localhost:8080'
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

