import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home"
import LoginUser from "@/components/LoginUser"
import RegisterUser from "@/components/RegisterUser";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes: [
      {
          path: '/',
          name: 'Home',
          component: Home
      },
      {
          path: '/login',
          name: 'Login',
          component: LoginUser
      },
      {
          path: '/signup',
          name: 'SignUp',
          component: RegisterUser
      }
  ]
})

export default router
