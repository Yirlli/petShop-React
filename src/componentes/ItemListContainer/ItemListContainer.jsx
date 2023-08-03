
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"

import { useParams } from "react-router-dom"
import { collection, query, getDocs, where } from "@firebase/firestore"
import { db } from "../../firebase/config"


export const ItemListContainer = ({greeting}) =>{
    const [productos, setProductos] = useState([])
    const[loading, setLoading] = useState(false)
    const[nombre, setNombre] = useState("Productos");
    const categoria = useParams().categoria;
   
    useEffect(() =>{
        setLoading(true)
        const itemRef= collection(db, "products");
        const queries= categoria ? query(itemRef, where("categoria", "==" , categoria)) : itemRef;
        
        getDocs(queries)
        
            .then((res) =>{
                
                setProductos(
                res.docs.map((doc)=>{
                    return{... doc.data(), id: doc.id}
                })
                )
                if(categoria){
                    setNombre(categoria)
                }
                setLoading(false)
                
                
                
            })
            
            
    


    }, [categoria])
    return(
        <div className="saludos">
            <h1> {greeting}</h1>
            {!loading
            ?
            <ItemList productos={productos} nombre={nombre} />
            :
            <p>Cargando...</p>
            }
            

        </div>
    )
}

