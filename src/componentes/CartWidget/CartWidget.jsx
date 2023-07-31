
import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () =>{

    const {quantityShopping} = useContext(CartContext);
    return(
        <div class="mt-14 flex ">
            
            <Link to="/carrito">
                <FaShoppingCart />

                <span class="mx-4">{quantityShopping()}</span>
            </Link>
        </div>
    )
}

export default CartWidget