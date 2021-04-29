
import Vue from 'vue'
import Vuex from 'vuex'
import businesses from './modules/businesses'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        businesses
    },
    strict: debug,
    plugins: debug
})