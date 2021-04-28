import axios from 'axios';

const path = 'http://localhost:4040/users';

const instance = axios.create({
    baseURL: path,
    timeout: 5000
});

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

    static logoutUser(token) {
        return instance.delete('/logout', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }
}

export default UsersService;