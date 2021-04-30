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
    localStorage.setItem('user-token', userToken.token)
    localStorage.setItem('user-id', userToken.userId)
    localStorage.setItem('authenticated', "true")
    if (localStorage.getItem('reset-password') === "true") {
        localStorage.removeItem('reset-password')
        return router.push('/')
    } else return router.push('/resetPassword')
}

export const isNullOrEmpty = (element) => {
    return !element || element.trim() === ''
}