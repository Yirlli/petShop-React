import { useEffect,useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { ProductById } from "../../utils/customFetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const [item, setItem] = useState({})
    const[loading, setLoading] = useState(true)
    const id = useParams().id;

    useEffect(() =>{
        setLoading(true)
        ProductById(Number(id))
            .then(res=> {
                setLoading(false)
                setItem(res.find(item => item.id === 1))
            })
    
    }, [])

    return(
        <div className="ItemDetailContainer">
            {
                !loading ?
            
            <ItemDetail item={item}/>
            :
            <p>Cargando...</p>
        }
        </div>
    )
}

export default ItemDetailContainer