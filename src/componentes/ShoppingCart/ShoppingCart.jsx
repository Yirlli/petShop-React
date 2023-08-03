import React, { useContext } from "react"
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";


const ShoppingCart=() =>{
 
    const {shoppingCart, precioTotal, vaciarCarrito}= useContext(CartContext);
    const handleVaciar= () =>{
        vaciarCarrito();
    }

    return (
        <div className="container-carrito">
            <h1>Carrito de compras</h1>
            {
                shoppingCart.map((item) =>(
                    <div key={item.id} className="carrito">
                        <h2>{item.nombre}</h2>
                        <p><b>Precio unitario:</b> ${item.precio}</p>
                        <p><b>Precio total:</b> ${item.precio*item.quantity}</p>
                        <p><b>Cantidad:</b> {item.quantity}</p>
                    </div>
                ))
            }
            {shoppingCart.length >0  ?
            <div className="total"> 
                <h3>Total a pagar $ {precioTotal ()}</h3>
                <div className="botones">
                    <button onClick={handleVaciar} className="vaciar">Vaciar</button>
                    <button><Link to="/checkoutForm" className="comprar">Finalizar compra</Link></button>
                </div>
            </div>
            :
            <div className="carrito-vacio"> 
                
                <h2>Su carrito de compras se encuentra vacio</h2>
                <button><Link to="/"> Ver productos disponibles</Link></button>
                
        
                </div>
            
            }
           
       
            
        </div>
    )

}

export default ShoppingCart