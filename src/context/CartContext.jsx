import { createContext , useEffect, useState} from "react";

export const CartContext = createContext();

const shoppingInicial = JSON.parse(localStorage.getItem("shoppingCart")) || [];
export const ShoppingProvider = ({children}) =>{
    const [ shoppingCart, setShoppingCart] = useState([shoppingInicial]);
  const handleAgregarCarrito= (item, quantity) => {
    const itemAgregado = {... item, quantity};
    const newShoppingCart = [...  shoppingCart];
    const itemEnCarrito = newShoppingCart.find((item) => item.id === itemAgregado.id);
    if(itemEnCarrito){

        itemEnCarrito.quantity += quantity;
    }else{
        newShoppingCart.push(itemAgregado);
    }
    setShoppingCart(newShoppingCart);
  
}

const quantityShopping=()=>{
  return shoppingCart.reduce((acc, item) => acc + item.quantity, 0)
}

const precioTotal = () => {
  return shoppingCart.reduce((acc, item) => acc + item.precio * item.quantity, 0)
}

const vaciarCarrito = () =>{
  setShoppingCart([]);
}

useEffect(() =>{
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
}, [shoppingCart]) 

return (
    <CartContext.Provider value={{shoppingCart , handleAgregarCarrito,
        quantityShopping, precioTotal, vaciarCarrito}}>
            {children}
     </CartContext.Provider>
)
}
