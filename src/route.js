import Vue from "vue";
import VueRouter from "vue-router";

//引入组件
import demo1 from "./App1.vue";
import demo2 from "./App2.vue";
Vue.use(VueRouter); // 要告诉 vue 使用 vueRouter

let routes = [
  {
    path: "/App1",
    component: demo1,
    name: "测试",
    hidden: true
  },
  {
    path: "/App2",
    component: demo2,
    name: "测试1",
    hidden: true
  }
];

var router = new VueRouter({
    routes//这里可以带有路由器的配置参数
})
export default router;//将路由器导出
