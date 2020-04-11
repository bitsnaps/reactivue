import Vue from 'vue'
import VueRx from 'vue-rx'
import App from './App.vue'
import { Observable } from 'rxjs'
import { interval }from 'rxjs'

Vue.use(VueRx, {
  Observable
})

Vue.config.productionTip = false

new Vue({
  el: '#app',

  render: h => h(App)
  /*render: function (h) {
    return h(App)
  },*/

})//.$mount('#app')
