import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home"
import LoginUser from "@/components/LoginUser"
import RegisterUser from "@/components/RegisterUser";
import ForgotPassword from "@/components/ForgotPassword";
import ProfilePage from "@/views/ProfilePage";

Vue.use(VueRouter)

// function requireAuth (to, from, next) {
//     // if (!auth.loggedIn()) {
//     //     next({
//     //         path: '/login',
//     //         query: { redirect: to.fullPath }
//     //     })
//     // } else {
//     //     next()
//     // }
// }

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
      },
      {
          path: '/profile',
          name: 'Profile',
          component: ProfilePage,
          // beforeEnter: requireAuth
      }
  ]
})

export default router
