import UsersService from "@/api/UsersService";
import { router } from "@/router";
import { avoidDuplicatedNavigation } from "@/utils/helper";
import Vue from "vue";

Vue.use(require('vue-cookies'))

export const verifyAuth = async () => {
    if (Vue.$cookies.isKey('user-token')) {
        await UsersService.getMe().then(async r => {
            Vue.$cookies.set('authenticated', true, '30min')
            Vue.$cookies.set('user-id', r.data.id, '30min')
            Vue.$cookies.set('is-business', r.data.isBusiness, '30min')
            Vue.$cookies.set('user-avatar', r.data.avatar, '30min')
            Vue.$cookies.set('forgot-password-email', '30min')
            if (!r.data.active) {
                await router.push('/verifyCode').then().catch(e => avoidDuplicatedNavigation(e))
                Vue.$cookies.remove('reset-password')
            }
        }).catch(() => {
            localStorage.clear()
        })
    } else if (Vue.$cookies.isKey('refresh-token')) {
        await UsersService.refreshToken().then(async r => {
            Vue.$cookies.set('user-token', r.data.id, '30min')
            await this.verifyAuth()
        })
    }
}

export const saveAuth = async userToken => {
    Vue.$cookies.set('refresh-token', userToken.token, '1d')
    Vue.$cookies.set('user-token', userToken.token, '30min')
    Vue.$cookies.set('user-id', userToken.id, '30min')
    Vue.$cookies.set('authenticated', true, '30min')
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