<template>
  <div id="app">
    <h3>1,响应式的数据绑定(文本插值)</h3>
    <input
      type="text"
      name=""
      value=""
      placeholder="在这里输入文字，下面会跟着变化"
      v-model="msg"
    >
    <p>{{ msg }}</p>
    <hr>
    <h3>2,v-html 指令</h3>
    <div v-html="message"></div>
    <hr>
    <h3>3,v-bind 指令</h3>
    <label for="r1">修改颜色</label><input
      type="checkbox"
      v-model="use"
      id="r1"
    >
    <br><br>
    <div v-bind:class="{'class1': use}">
      v-bind:class 指令
    </div>
    <hr>
    <h3>3,复选框</h3>
    <p>单个复选框：</p>
    <input
      type="checkbox"
      id="checkbox"
      v-model="checked"
    >
    <label for="checkbox">{{ checked }}</label>

    <p>多个复选框：</p>
    <input
      type="checkbox"
      id="runoob"
      value="Runoob"
      v-model="checkedNames"
    >
    <label for="runoob">Runoob</label>
    <input
      type="checkbox"
      id="google"
      value="Google"
      v-model="checkedNames"
    >
    <label for="google">Google</label>
    <input
      type="checkbox"
      id="taobao"
      value="Taobao"
      v-model="checkedNames"
    >
    <label for="taobao">taobao</label>
    <br>
    <span>选择的值为: {{ checkedNames }}</span>
    <hr>
    <h3>4,单选</h3>
    <input
      type="radio"
      id="runoob"
      value="Runoob"
      v-model="picked"
    >
    <label for="runoob">Runoob</label>
    <br>
    <input
      type="radio"
      id="google"
      value="Google"
      v-model="picked"
    >
    <label for="google">Google</label>
    <br>
    <span>选中值为: {{ picked }}</span>
    <hr>
    <h3>5,select 列表</h3>
    <select
      v-model="selected"
      name="fruit"
    >
      <option value="">选择一个网站</option>
      <option value="www.runoob.com">Runoob</option>
      <option value="www.google.com">Google</option>
    </select>

    <div id="output">
      选择的网站是: {{selected}}
    </div>
    <hr>
    <h3>5,条件语句</h3>
    <h4>5-1 v-if 指令</h4>
    <p v-if="one">我是hello world</p>
    <template v-if="two">
      <p>我是模板hello world</p>
    </template>
    <h4>5-2 v-else 指令</h4>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else>
      B
    </div>
    <h4>5-3 v-else-if 指令 用法和js C#里面的 else if一样</h4>
    <hr>
    <h3>6,路由</h3>
    <div id="app">
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <!--使用指令v-link进行导航-->
            <router-link :to="{ path: '/App1'}">Home</router-link>
            <router-link :to="{ path: '/App2'}">About</router-link>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <!--用于渲染匹配的组件-->
              <transition name="fade">
              <router-view></router-view>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>


<script>
// import Vue from 'vue'
// var news = Vue.extend({
//   template: "<h1>你好</h1>"
// });
// Vue.component("news",{
//   template: '<h1>自定义全局组件!</h1>'
// })

export default {
  name: "app",
  data() {
    return {
      type: "B",
      one: true,
      two: true,
      selected: "",
      picked: "",
      checked: false,
      checkedNames: [],
      use: false,
      msg: "Hello Welcome to Your Vue.js App",
      message: '<p style="background:red">Hello</p>',
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.class1 {
  background: #444;
  color: #eee;
}
</style>
