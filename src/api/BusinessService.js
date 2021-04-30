import { API } from "@/utils/helper";
import { userId, userToken } from "@/utils/validation";
import { BASE_URL } from "@/utils/config";

const instance = API(BASE_URL + '/business')

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
        return instance.get('/info?id=' + id, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static getBusinessByUserId(token, userId) {
        return instance.get('/info?userId' + userId, {
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
        return new Promise((resolve, reject) => {
            try {
                instance.get(businessId + '/posts').then(res => {
                    const data = res.data
                    resolve(
                        data.map(reviews => ({
                            ...reviews
                        }))
                    )
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    static postReview(content, rate, businessId, token = userToken()) {
        return instance.post(businessId + '/posts', {
            content,
            rate,
            businessId,
            userId: userId()
        }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

}

export default BusinessService;