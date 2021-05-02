import UsersService from "@/api/UsersService";
import { router } from "@/router";

export const verifyAuth = async () => {
    if (localStorage.getItem('user-token')) {
        await UsersService.getMe().then(async r => {
            localStorage.setItem('authenticated', "true")
            localStorage.setItem('user-id', r.data.id)
            localStorage.setItem('is-business', r.data.isBusiness)
            localStorage.setItem('user-avatar', r.data.avatar)
            localStorage.setItem('user-email', r.data.email)
            if (!r.data.active) {
                await router.push('/verifyCode').then().catch(e => console.log(e))
                localStorage.removeItem('reset-password')
            }
        }).catch(() => {
            localStorage.clear()
        })
    }
}

export const isAuthenticated = () => {
    return localStorage.getItem('authenticated') === "true"
}

export const isBusiness = () => {
    return localStorage.getItem('is-business') === "true"
}

export const userId = () => {
    return parseInt(localStorage.getItem('user-id')) || 0
}

export const userAvatar = () => {
    const localAvatar = localStorage.getItem('user-avatar')
    if (localAvatar === 'null' || localAvatar === null) return emptyAvatar
    else return localStorage.getItem('user-avatar')
}

export const emptyAvatar = "https://imgur.com/uF05hWw.png"

export const userToken = () => {
    return localStorage.getItem('user-token')
}