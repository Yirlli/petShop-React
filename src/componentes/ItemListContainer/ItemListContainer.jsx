import { useState, useEffect } from "react"
import { products } from "../../utils/products"
import { customFetch } from "../../utils/customFetch"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) =>{
    const [listProducts, setListProducts] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(() =>{
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProducts(res)
            })
    }, [])
    return(
        <div className="saludos">
            <h1> {greeting}</h1>
            {!loading
            ?
            <ItemList listProducts={listProducts}/>
            :
            <p>Cargando...</p>
            }
            

        </div>
    )
}

export {ItemListContainer}