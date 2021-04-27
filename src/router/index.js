import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home"
import LoginUser from "@/components/LoginUser"
import RegisterUser from "@/components/RegisterUser";
import ForgotPassword from "@/components/ForgotPassword";

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
          name: 'Sign Up',
          component: RegisterUser
      },
      {
          path: '/forgotPassword',
          name: 'Forgot Password',
          component: ForgotPassword
      }
  ]
})

export default router
