<template>
  <div id="app">
    <h3>1,响应式的数据绑定</h3>
    <input type="text" name="" value="" placeholder="在这里输入文字，下面会跟着变化" v-model="msg">
		<p>{{ msg }}</p>
    <hr>
  </div>
</template>


<script>
//import Vue from 'vue'
// var news=Vue.extend({
//   template:'#message',
// })
//Vue.component("news",news)


export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello Welcome to Your Vue.js App'
    }
  }
}
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
</style>
