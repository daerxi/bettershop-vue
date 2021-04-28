import axios from 'axios';

const path = 'http://localhost:4040/categories';

const instance = axios.create({
    baseURL: path,
    timeout: 5000
});

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