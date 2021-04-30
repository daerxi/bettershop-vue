import {API} from "@/utils/helper";
import { BASE_URL } from "@/utils/config";

const instance = API(BASE_URL + '/categories')

class CategoriesService {
    static getCategories() {
        return new Promise((resolve, reject) => {
            try {
                instance.get('/').then(res => {
                    const data = res.data
                    resolve(
                        data.map(categories => ({
                            ...categories
                        }))
                    )
                })
            } catch (err) {
                reject(err)
            }
        })
    }

}

export default CategoriesService;