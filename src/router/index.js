import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home"
import LoginUser from "@/views/LoginUser"
import RegisterUser from "@/views/RegisterUser";
import ForgotPassword from "@/components/ForgotPassword";
import BusinessProfile from "@/views/BusinessProfile";
import UserProfile from "@/views/UserProfile";
import {verifyAuth, isAuthenticated} from "@/utils/validation";

Vue.use(VueRouter)

function requireAuth (to, from, next) {
    verifyAuth();
    if (!isAuthenticated()) {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    } else {
        next()
    }
}

export const router = new VueRouter({
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
          component: UserProfile,
          beforeEnter: requireAuth
      },
      {
          path: '/business_profile',
          name: 'Business Profile',
          component: BusinessProfile,
          beforeEnter: requireAuth
      }
  ]
})

