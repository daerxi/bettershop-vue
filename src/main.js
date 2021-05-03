import Vue from 'vue'
import App from './App.vue'
import './assets/style.css'
import { router } from '@/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import store from './store'
import VueMobileDetection from 'vue-mobile-detection'

Vue.use(require('vue-cookies'))
Vue.$cookies.config('1d', '', '', false, 'Strict')

Vue.use(VueMobileDetection)

library.add(faUserSecret)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
