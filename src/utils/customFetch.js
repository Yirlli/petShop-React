import { products } from "./products"

export const customFetch = (products) =>{
     return new Promise(( resolve) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })
    }
    
export const getProductById = (productId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
            }, 500)
        })
    }
