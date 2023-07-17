
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { customFetch } from "../../utils/customFetch"
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) =>{
    const [listProducts, setListProducts] = useState([])
    const[loading, setLoading] = useState(true)
    const categoria = useParams().categoria;

    useEffect(() =>{
        setLoading(true)
        customFetch()
            .then(res => {
                setLoading(false)
                if(categoria){
                    setListProducts(res.filter((prod => prod.categoria === categoria)))
                }else{
                    setListProducts(res)
                }
              
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