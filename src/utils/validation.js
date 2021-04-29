import UsersService from "@/APIs/UsersService";

export const verifyAuth = () => {
    if (localStorage.getItem('user-token')) {
        UsersService.getMe(localStorage.getItem('user-token')).then(r => {
            localStorage.setItem('authenticated', "true")
            localStorage.setItem('user-id', r.data.id)
            localStorage.setItem('is-business', r.data.isBusiness)
            localStorage.setItem('user-avatar', r.data.avatar)
            localStorage.setItem('user-email', r.data.email)
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