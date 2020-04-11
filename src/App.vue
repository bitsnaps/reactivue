<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- bind counter in templates -->
    <div>Counter: {{ counter }}</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { Observable } from 'rxjs'
import { interval }from 'rxjs'

export default {
  name: 'App',
  /*data() {
    return {
      counter: 0
    }
  },*/
  subscriptions: function () {
    return {
      counter: interval(800)
    }
  },
  components: {
    HelloWorld
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
