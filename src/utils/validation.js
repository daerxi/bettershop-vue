import UsersService from "@/api/UsersService";
import { router } from "@/router";
import { avoidDuplicatedNavigation } from "@/utils/helper";
import Vue from "vue";

Vue.use(require('vue-cookies'))
Vue.$cookies.config('1d', '', '', false, 'Strict')

export const setCookies = async(r) => {
    Vue.$cookies.set('authenticated', true, '30min')
    Vue.$cookies.set('user-id', r.data.id, '30min')
    Vue.$cookies.set('is-business', r.data.isBusiness, '30min')
    Vue.$cookies.set('user-avatar', r.data.avatar, '30min')
    Vue.$cookies.set('forgot-password-email', r.data.email, '30min')
}

export const verifyAuth = async () => {
    if (Vue.$cookies.isKey('user-token')) {
        await UsersService.getMe().then(async r => {
            await setCookies(r)
            if (!r.data.active) {
                await router.push('/verifyCode').then().catch(e => avoidDuplicatedNavigation(e))
                Vue.$cookies.remove('reset-password')
            }
        }).catch(() => {
            clearCookies()
        })
    } else if (Vue.$cookies.isKey('refresh-token')) {
        await UsersService.refreshToken().then(async r => {
            Vue.$cookies.set('user-token', r.data.token, '30min')
            await verifyAuth()
        })
    }
}

export const clearCookies = async () => {
    localStorage.clear()
    Vue.$cookies.remove('authenticated')
    Vue.$cookies.remove('user-token')
    Vue.$cookies.remove('refresh-token')
}

export const saveAuth = async userToken => {
    Vue.$cookies.set('authenticated', true, '30min')
    Vue.$cookies.set('refresh-token', userToken.token, '1d')
    Vue.$cookies.set('user-token', userToken.token, '30min')
    Vue.$cookies.set('user-id', userToken.userId, '30min')
    if (Vue.$cookies.get('reset-password')) {
        Vue.$cookies.remove('reset-password')
        return router.push('/resetPassword').catch(e => avoidDuplicatedNavigation(e))
    } else return router.push('/').catch(e => avoidDuplicatedNavigation(e))
}

export const userAvatar = () => {
    const localAvatar = Vue.$cookies.get('user-avatar')
    if (localAvatar === 'null' || localAvatar === null) return emptyAvatar
    else return localStorage.getItem('user-avatar')
}

export const emptyAvatar = "https://imgur.com/uF05hWw.png"