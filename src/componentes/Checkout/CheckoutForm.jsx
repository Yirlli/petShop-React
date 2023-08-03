import { useContext, useState, useEffect} from "react";
import{ addDoc, collection} from "@firebase/firestore"
import { CartContext } from "../../context/CartContext";
import{db} from '../../firebase/config'

import { useForm } from "react-hook-form";

const CheckoutForm = () => {
    const[loading, setLoading] = useState(false)
    const[pedidoId, setPedidoId] = useState("")
    const{register, handleSubmit}= useForm();



    const{shoppingCart, precioTotal, vaciarCarrito} = useContext(CartContext);

    const comprar = (data) =>{
        setLoading(true)
        const pedido = {
            cliente: data,
            productos: shoppingCart,
            total: precioTotal()
        }

       const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setLoading(false)
                setPedidoId(doc.id);
                vaciarCarrito();
                
            })
             .finally(()=>{
                setLoading(false)
            });
    }

    if(loading){
        return <p>En breve confirmaremos la compra realizada...</p>
        
    }
    if(pedidoId){
        return(
            <div className="orden-compra">
            
                <h2>Su compra se ha generado con éxito</h2>
                <p>Orden de compra n°: {pedidoId}</p>
      
            </div>
        )
    }

    return(
        <div className="container-form">
            <h1>Finalizar Compra</h1>
            <form onSubmit={handleSubmit(comprar)} className="form-orden">
                <div className="contenedor-interno">
                        <label> Nombre</label>
                    <input placeholder="ingrese su nombre" type="text"{...register("nombre")}/>
                
                    <label> Telefono</label>
                    <input placeholder="ingrese su telefono" type="text" {...register("telefono")}/>
                
                    <label> Email</label>
                    <input placeholder="ingrese su email" type="email" {...register("email")}/>

                </div>
                
                
                <div className="botones">
                    <button type="submit" className="orden"> Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm