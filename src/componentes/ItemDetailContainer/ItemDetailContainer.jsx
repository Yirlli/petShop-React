import { useEffect,useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import {doc, getDoc} from "firebase/firestore"
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";

const ItemDetailContainer = () =>{
    const [item, setItem] = useState(null)
    const[loading, setLoading] = useState(true)
    const id = useParams().id;

    useEffect(() =>{
        setLoading(true)

        const docRef = doc(db, "products", id);
        getDoc(docRef)
            .then((res)=>{
                setItem(
                {...res.data(), ud: res.id}
                );
            })
        
    }, [id])

    return(
        <div className="ItemDetailContainer container mx-auto">
            {/*
                !loading ?
            */
                item && <ItemDetail item={item}/>
               /* :
                <p>Cargando...</p>*/
            }
        </div>
    )
}

export default ItemDetailContainer