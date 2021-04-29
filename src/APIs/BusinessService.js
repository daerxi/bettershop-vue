import {API} from "@/utils/helper";

const instance = API('http://localhost:4040/business')

class BusinessService {
    static getBusinesses() {
        return new Promise((resolve, reject) => {
            try {
                instance.get('/').then(res => {
                    const data = res.data
                    resolve(
                        data.map(businesses => ({
                            ...businesses
                        }))
                    )
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    static getBusinessByType(type) {
        return new Promise((resolve, reject) => {
            try {
                instance.get('/categories/' + type).then(res => {
                    const data = res.data
                    resolve(
                        data.map(businesses => ({
                            ...businesses
                        }))
                    )
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    static getInfo(token) {
        return instance.get('/info', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static getBusiness(token, id) {
        return instance.get('/info/' + id, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static updateInfo(token, body) {
        return instance.put('/info', body, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }
}

export default BusinessService;