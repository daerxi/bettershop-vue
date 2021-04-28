import Vue from 'vue'
import App from './App.vue'
import './assets/style.css'
import {router} from './router/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
