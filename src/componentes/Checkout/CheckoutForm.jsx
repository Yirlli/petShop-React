import { useContext, useState} from "react";
import{ addDoc, collection} from 'firebase/firestore'
import { CartContext } from "../../context/CartContext";
import{db} from '../../firebase/config'

import { useForm } from "react-hook-form";

const CheckoutForm = () => {
    const[loading, setLoading] = useState(false)
    const[pedidoId, setPedidoId] = useState("")
    const{register, handleSubmit}= useForm();
    setLoading(false)


    const{shoppingCart, precioTotal, vaciarCarrito} = useContext(CartContext);

    const comprar = (data) =>{
        const pedido = {
            cliente: data,
            productos: shoppingCart,
            total: precioTotal()
        }

        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }

    if(pedidoId){
     
        return(
            <div>
            

                    <p>Generando orden de compra... {pedidoId}</p>
            
                
                
                
            </div>
        )
    }

    return(
        <div>
            <h1>Finalizar Compra</h1>
            <form onSubmit={handleSubmit(comprar)} className="Form">
                <label> Nombre
                    <input placeholder="ingrese su nombre" type="text"{...register("nombre")}/>
                </label>
                <label> Telefono
                    <input placeholder="ingrese su telefono" type="text" {...register("telefono")}/>
                </label>
                <label> Email
                    <input placeholder="ingrese su email" type="email" {...register("email")}/>
                </label>
                <div>
                    <button type="submit"> Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm