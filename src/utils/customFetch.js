import products from "./products.json"

export const customFetch = (products) =>{
     return new Promise(( resolve) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })
    }
    
export const ProductById = (Id) =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const item= products.find(prod => prod.id === Id)
           if(item){
            resolve(item)
           }else{
            reject({
                error:"No se encontro el producto"
             })
            }
            }, 2000)
        })
    }
