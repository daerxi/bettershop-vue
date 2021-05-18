import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import { router } from '@/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import store from './store'
import VueMobileDetection from 'vue-mobile-detection'
import VueSocialSharing from 'vue-social-sharing'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ReadMore from 'vue-read-more'
import firebase from "firebase";

Vue.config.productionTip = false;

const configOptions = {
    apiKey: "AIzaSyC5NyKzQj6kOf7hu0qLcaTDSVVcZN9RVBg",
    authDomain: "bettershop-62b68.firebaseapp.com",
    projectId: "bettershop-62b68",
    storageBucket: "bettershop-62b68.appspot.com",
    messagingSenderId: "838137419342",
    appId: "1:838137419342:web:583885021ff92ae090951f",
    measurementId: "G-CEC1ZV94TE"
};

firebase.initializeApp(configOptions);

Vue.use(ReadMore)

Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

Vue.use(require('vue-cookies'))
Vue.$cookies.config('1d', '', '', false, 'Strict')

Vue.use(VueMobileDetection)
Vue.use(VueSocialSharing)

library.add(fab)
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
