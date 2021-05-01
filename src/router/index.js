import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home"
import LoginUser from "@/views/LoginUser"
import RegisterUser from "@/views/RegisterUser";
import ForgotPassword from "@/views/ForgotPassword";
import BusinessProfile from "@/views/BusinessProfile";
import UserProfile from "@/views/UserProfile";
import CompanyInfoForm from "@/views/CompanyInfoForm";

import { verifyAuth, isAuthenticated, isBusiness } from "@/utils/validation";
import ResetPassword from "@/views/ResetPassword";
import VerifyCode from "@/views/VerifyCode";

Vue.use(VueRouter)

function requireAuth(to, from, next) {
    verifyAuth().then( async () => {
        if (!isAuthenticated()) {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        } else {
            next()
        }
    })
}

function requireBusiness(to, from, next) {
    requireAuth(to, from, next);
    if (!isBusiness()) {
        next({
            path: '/not-a-business'
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
            path: '/categories',
            name: 'Sub Home',
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
            path: '/profile/:userId',
            name: 'User Profile',
            component: UserProfile,
            beforeEnter: requireAuth
        },
        {
            path: '/business/profile',
            name: 'Business Profile',
            component: BusinessProfile,
            beforeEnter: requireBusiness
        },
        {
            path: '/business/edit',
            name: 'Edit Profile',
            component: CompanyInfoForm,
            beforeEnter: requireBusiness
        },
        {
            path: '/businesses/:businessId',
            name: 'Business Info',
            component: BusinessProfile,
            beforeEnter: requireAuth
        },
        {
            path: '/resetPassword',
            name: 'Reset Password',
            component: ResetPassword,
            beforeEnter: requireAuth
        },
        {
            path: '/verifyCode',
            name: 'Verify Code',
            component: VerifyCode
        }
    ]
})

