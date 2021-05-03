import axios from "axios";
import { router } from "@/router";

export const API = path => axios.create({
    baseURL: path,
    timeout: 5000
});

export const openAlert = (it, type, message) => {
    it.alertOpen = true
    it.type = type
    it.message = message
}

export const saveAuth = async userToken => {
    this.$cookies.set('refresh-token', userToken.token, '1d')
    this.$cookies.set('user-token', userToken.token, '30min')
    this.$cookies.set('user-id', userToken.id, '30min')
    this.$cookies.set('authenticated', true, '30min')
    if (this.$cookies.get('reset-password')) {
        this.$cookies.remove('reset-password')
        return router.push('/resetPassword').catch(e => avoidDuplicatedNavigation(e))
    } else return router.push('/').catch(e => avoidDuplicatedNavigation(e))
}

export const isNullOrEmpty = (element) => {
    return !element || element.trim() === ''
}

export const avoidDuplicatedNavigation = (e) => {
    if (e.name !== "NavigationDuplicated") {
        console.error(e)
    }
}