
const products = [
    {
        id: '1',
        nombre: 'Pedigree Adulto 3kg',
        precio: 800,
        categoria: 'Alimento para gatos',
        img: '../purina.jpg',
        stock: 15,
        descripcion:'Alimento para gatos sabor a salmón' 

    },
    {
        id: '2',
        nombre: 'Master CAT 85g',
        precio: 13200,
        categoria: 'Alimento para gatos',
        img: './pedi.jpg',
        stock: 10,
        descripcion:'Alimento para perros de pollo y vegetales' 
    }

]


export const getProducts = () =>{
    return new Promise(( resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}