import {API} from "@/utils/helper";

const instance = API('http://localhost:4040/users')

class UsersService {
    static getUsers() {
        return new Promise((resolve, reject) => {
            try {
                instance.get('/', {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    }
                }).then(res => {
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

    static getMe(token) {
        return instance.get('/me', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static getUser(token, id) {
        return instance.get('/' + id, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static logoutUser(token) {
        return instance.delete('/logout', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }
}

export default UsersService;