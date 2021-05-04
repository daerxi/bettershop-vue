import { API } from "@/utils/helper";
import { BASE_URL } from "@/utils/config";
import Vue from 'vue'
const instance = API(BASE_URL + '/business')

Vue.use(require('vue-cookies'))

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

    static getInfo(token = Vue.$cookies.get('user-token')) {
        return instance.get('/info', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static getBusiness(id, token = Vue.$cookies.get('user-token')) {
        return instance.get('/info?id=' + id, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static getBusinessByUserId(userId, token = Vue.$cookies.get('user-token')) {
        return instance.get('/info?userId=' + userId, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static updateInfo(body, token = Vue.$cookies.get('user-token')) {
        return instance.put('/info', body, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static updateClickTrack(businessId) {
        return instance.put('/' + businessId + '/click', {})
    }

    static searchKeyword(keyword) {
        return new Promise((resolve, reject) => {
            try {
                instance.get('/search?keyword=' + keyword).then(res => {
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

    static getReviewsByBusinessId(businessId) {
        return instance.get(businessId + '/reviews')
    }

    static postReview(content, rate, businessId, token = Vue.$cookies.get('user-token')) {
        return instance.post(businessId + '/reviews', {
            content,
            rate,
            businessId,
            userId: Vue.$cookies.get('user-id')
        }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

}

export default BusinessService;