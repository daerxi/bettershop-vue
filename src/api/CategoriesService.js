import {API} from "@/utils/helper";

const instance = API('http://localhost:4040/categories')

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