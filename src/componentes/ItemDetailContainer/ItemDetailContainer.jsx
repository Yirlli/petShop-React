import { useEffect,useState } from "react";
import { products} from '../../utils/products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { customFetch } from "../../utils/customFetch";

const ItemDetailContainer = () =>{
    const [listProduct, setListProduct] = useState({})

    useEffect(() =>{
        setLoading(true)
        customFetch(products)
            .then(res=> {
                setLoading(false)
                setListProduct(res.find(item => item.id === 1))
            })
    
    }, [])

    return(
        <div className="ItemDetailContainer">
            {
                !loading ?
            
            <ItemDetail listProduct={listProduct}/>
            :
            <p>Cargando...</p>
        }
        </div>
    )
}

export default ItemDetailContainer