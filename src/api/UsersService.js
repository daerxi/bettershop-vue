import { API } from "@/utils/helper";
import { BASE_URL } from "@/utils/config";

const instance = API(BASE_URL + '/users')

class UsersService {
    static getUsers() {
        return new Promise((resolve, reject) => {
            try {
                instance.get('/').then(res => {
                    const data = res.data
                    resolve(
                        data.map(users => ({
                            ...users
                        }))
                    )
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    static createUser(body) {
        return instance.post('/', body)
    }

    static loginUser(email, password) {
        return instance.post('/login', {
            email, password
        })
    }

    static updatePassword(password, token = this.$cookies.get('user-token')) {
        return instance.put('/resetPassword', {
            password
        }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static getMe(token = this.$cookies.get('user-token')) {
        return instance.get('/me', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static getUser(id) {
        return instance.get('/' + id)
    }

    static refreshToken() {
        return instance.get('/refresh?refreshToken=' + this.$cookies.get('refresh-token'))
    }

    static logoutUser(token = this.$cookies.get('user-token')) {
        return instance.delete('/logout', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static forgotPassword(email) {
        return instance.get("/forgotPassword?email=" + email)
    }

    static verifyCode(verificationCode) {
        return instance.post("/verify", {
            verificationCode
        })
    }

    static getReviewsByUserId(userId, token = this.$cookies.get('user-token')) {
        return new Promise((resolve, reject) => {
            try {
                instance.get(userId +"/reviews", {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }}).then(res => {
                    const data = res.data
                    resolve(
                        data.map(users => ({
                            ...users
                        }))
                    )
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}

export default UsersService;