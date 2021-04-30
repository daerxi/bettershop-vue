import { API } from "@/utils/helper";
import { userToken } from "@/utils/validation";

const instance = API('http://localhost:4040/users')

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

    static updatePassword(password, token = userToken()) {
        return instance.post('/login', {
            password
        }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static getMe(token = userToken()) {
        return instance.get('/me', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static getUser(id) {
        return instance.get('/' + id)
    }

    static logoutUser(token) {
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
}

export default UsersService;