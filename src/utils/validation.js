import UsersService from "@/api/UsersService";
import { router } from "@/router";
import { avoidDuplicatedNavigation } from "@/utils/helper";

export const verifyAuth = async () => {
    if (this.$cookies.isKey('user-token')) {
        await UsersService.getMe().then(async r => {
            this.$cookies.set('authenticated', true, '30min')
            this.$cookies.set('user-id', r.data.id, '30min')
            this.$cookies.set('is-business', r.data.isBusiness, '30min')
            this.$cookies.set('user-avatar', r.data.avatar, '30min')
            this.$cookies.set('forgot-password-email', '30min')
            if (!r.data.active) {
                await router.push('/verifyCode').then().catch(e => avoidDuplicatedNavigation(e))
                this.$cookies.remove('reset-password')
            }
        }).catch(() => {
            localStorage.clear()
        })
    } else if (this.$cookies.isKey('refresh-token')) {
        await UsersService.refreshToken().then(async r => {
            this.$cookies.set('user-token', r.data.id, '30min')
            await this.verifyAuth()
        })
    }
}

export const userAvatar = () => {
    const localAvatar = this.$cookies.get('user-avatar')
    if (localAvatar === 'null' || localAvatar === null) return emptyAvatar
    else return localStorage.getItem('user-avatar')
}

export const emptyAvatar = "https://imgur.com/uF05hWw.png"