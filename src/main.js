import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

import router from './router'
import store from './store'
import http from "axios";
import '@/api/mock'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.prototype.$http = http

router.beforeEach((to, from, next) => {
   store.commit('getToken')
   const token = store.state.user.token
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit('addMenu',router)
  }
}).$mount('#app')
