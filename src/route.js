import Vue from "vue";
import VueRouter from "vue-router";

import demo from "./app.vue";
import demo1 from "./app1.vue";

Vue.use(VueRouter); // 要告诉 vue 使用 vueRouter

let routes = [
  {
    path: "/app",
    component: demo,
    name: "测试",
    hidden: true
  },
  {
    path: "/app1",
    component: demo1,
    name: "测试1",
    hidden: true
  }
];

var router = new VueRouter({
    routes//这里可以带有路由器的配置参数
})
export default router;//将路由器导出
