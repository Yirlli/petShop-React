import productsData from "./products.json"

 export const productFetch = () =>{
     return new Promise(( resolve) => {
            setTimeout(() => {
                resolve(productsData)
            }, 2000)
        })
    };

 export const ProductById = (id) =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const item= productsData.find((prod) => prod.id === id)
           if(item){
            resolve(item)
           }else{
            reject({
                error:"No se encontro el producto"
             })
            }
            }, 2000)
        })
    };