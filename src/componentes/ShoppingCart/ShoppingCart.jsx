import { useContext } from "react"
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";

const ShoppingCart=() =>{
 
    const {shoppingCart, precioTotal, vaciarCarrito}= useContext(CartContext);
    const handleVaciar= () =>{
        vaciarCarrito();
    }

    return (
        <div className="">
            <h1>Carrito de compras</h1>
            {
                shoppingCart.map((item) =>(
                    <div key={item.id}>
                        <h2>{item.nombre}</h2>
                        <p>Precio unitario: ${item.precio}</p>
                        <p>Precio tota: ${item.precio*item.quantity}</p>
                        <p>Cantidad: {item.quantity}</p>
                    </div>
                ))
            }
            {shoppingCart.length >0  ?
            <div> 
                <h3>Total a pagar $ {precioTotal ()}</h3>
                <button onClick={handleVaciar}>Vaciar</button>
            </div>
            :
            <div> 
                
                <h2>Se encuentra vacio</h2>
                <button><Link to="/"> Ver productos disponibles</Link></button>
                
        
                </div>
            
            }
           
       
            
        </div>
    )

}

export default ShoppingCart