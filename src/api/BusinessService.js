import { API } from "@/utils/helper";
import { BASE_URL } from "@/utils/config";

const instance = API(BASE_URL + '/business')

const userToken = this.$cookies.get('user-token')

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

    static getInfo(token = userToken) {
        return instance.get('/info', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static getBusiness(id, token = userToken) {
        return instance.get('/info?id=' + id, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static getBusinessByUserId(userId, token = userToken) {
        return instance.get('/info?userId=' + userId, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static updateInfo(body, token = userToken) {
        return instance.put('/info', body, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
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

    static postReview(content, rate, businessId, token = userToken) {
        return instance.post(businessId + '/posts', {
            content,
            rate,
            businessId,
            userId: this.$cookies.get('user-id')
        }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

}

export default BusinessService;