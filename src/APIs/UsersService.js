import axios from 'axios';
const url = 'http://localhost:4040/users';

class UsersService {
    static getUsers() {
        return new Promise( (resolve, reject) => {
            try {
                axios.get(url, {
                    headers: {
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    }
                }).then(res => {
                    const data = res.data;
                    resolve(
                        data.map(users => ({
                            ...users
                        }))
                    )
                })
            } catch (err) {
                reject(err);
            }
        })
    }

    static createUser(firstName, lastName, email, password) {
        return new Promise( (resolve, reject) => {
            try {
                axios.post(url, {
                    firstName, lastName, email, password
                }).then(res => {
                    const data = res.data;
                    resolve(
                        data
                    )
                })
            } catch (err) {
                reject(err);
            }
        })
    }

    static loginUser(email, password) {
        return new Promise( (resolve, reject) => {
            try {
                axios.post(`${url}/login`, {
                    email, password
                }).then(res => {
                    const data = res.data;
                    resolve(
                        data
                    )
                })
            } catch (err) {
                reject(err);
            }
        })
    }
}

export default UsersService;