import { useEffect,useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { ProductById } from "../../utils/data";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const [item, setItem] = useState(null)
    const[loading, setLoading] = useState(true)
    const id = useParams().id;

    useEffect(() =>{
        setLoading(true)
        ProductById(Number(id))
            .then(res=> {
                setLoading(false)
                setItem(res)
            })
    
    }, [])

    return(
        <div className="ItemDetailContainer container mx-auto">
            {
                !loading ?
            
                item && <ItemDetail item={item}/>
                :
                <p>Cargando...</p>
            }
        </div>
    )
}

export default ItemDetailContainer