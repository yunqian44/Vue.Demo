import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from "./route.js"

new Vue({
  el: '#app',
  router,// 注入到根实例中
  render: h => h(App)
});
