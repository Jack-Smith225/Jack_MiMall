<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//import storage from './storage/index'
//import axios from 'axios'
export default {
  name: 'App',
  components: {},
  data() {
    return {}
  },
  mounted() {
    //storage.setItem('a', 1)
    //storage.setItem('abc', {a:1}, 'user');
    //alert(JSON.stringify(storage.getStorage()))
    //alert(storage.getItem("a"))
    //alert(storage.getItem("a", "user"))
    //storage.clear("abc", "user")

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
