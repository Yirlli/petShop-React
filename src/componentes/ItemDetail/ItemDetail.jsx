import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({item}) =>{
    
        const {shoppingCart, handleAgregarCarrito} = useContext(CartContext);
        console.log(shoppingCart);
        const [quantity, setQuantity] = useState(1)
    
        const decrement = () => {
           quantity > 1 && setQuantity(quantity-1)
            
        }
    
        const increment = () => {
            quantity < item.stock && setQuantity(quantity+1)
        }

       
    return(
        <article className='Card ' >
            <header className='Header'>
                <h2 className='ItemHeader mt-4'>
                    {item.nombre}
                </h2>
            </header>
            <picture>
                <img src={item.img} alt={item.nombre}/>
            </picture>
            <section>
                <p>
                    <b>Categoria: </b>{item.categoria}
                </p>
                
                <p>
                    <b>Descripcion: </b>{item.descripcion}
                </p>
                <p>
                   <b> Precio:</b> ${item.precio}
                </p>
            </section>
            <footer>
                <ItemCount quantity={quantity} increment={increment} decrement={decrement} 
                handleAgregar={() => {handleAgregarCarrito (item, quantity)}}/>
            </footer>
        </article>
    )
}

export default ItemDetail