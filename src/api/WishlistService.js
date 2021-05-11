import { API } from "@/utils/helper";
import { BASE_URL } from "@/utils/config";
import Vue from "vue";

const instance = API(BASE_URL + '/wishlist')

class WishlistService {
    static getWishlists(token = Vue.$cookies.get('user-token')) {
        return new Promise((resolve, reject) => {
            try {
                console.log(token)
                instance.get('/', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                }).then(res => {
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

    static addToWishList(businessId, token = Vue.$cookies.get('user-token')) {
        return instance.post('/', {
            businessId
        }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }

    static checkWishlist(businessId, token = Vue.$cookies.get('user-token')) {
        return instance.get('/', {
            businessId
        }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }
}

export default WishlistService;