
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import  {productFetch } from "../../utils/data"
import { useParams } from "react-router-dom"
import productsData from "../../utils/products.json"; 


export const ItemListContainer = ({greeting}) =>{
    const [productos, setProductos] = useState([])
    const[loading, setLoading] = useState(true)
    const[nombre, setNombre] = useState("Productos");
    const categoria = useParams().categoria;

    useEffect(() =>{
        setLoading(true)
        productFetch()
            .then(res => {
                setLoading(false)
                if(categoria){
                    setProductos(res.filter((prod => prod.categoria === categoria)))
                    setNombre(categoria);
                }else{
                    setProductos(res)
                }
              
            })
    }, [categoria])
    return(
        <div className="saludos">
            <h1> {greeting}</h1>
            {!loading
            ?
            <ItemList productos={productos} nombre={nombre}/>
            :
            <p>Cargando...</p>
            }
            

        </div>
    )
}

