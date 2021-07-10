import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 讓瀏覽器的全域環境可以使用到 $
// import jQuery from 'jquery'
// window.$ = window.jQuery = jQuery

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
