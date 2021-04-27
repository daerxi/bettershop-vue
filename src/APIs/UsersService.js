import axios from 'axios';
const path = 'http://localhost:4040/users';

var instance = axios.create({
    baseURL: path,
    timeout: 5000
});

class UsersService {
    static getUsers() {
        return new Promise( (resolve, reject) => {
            try {
                instance.get( '/',{
                    headers: {
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
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
        return new Promise( (resolve, reject) => {
            try {
                instance.post('/', body).then(res => {
                    const data = res.data
                    resolve(data)
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    static loginUser(email, password) {
        return instance.post('/login', {
            email, password
        })
    }
}

export default UsersService;