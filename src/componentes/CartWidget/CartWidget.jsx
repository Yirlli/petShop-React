
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () =>{
    return(
        <div class="mt-14 flex ">
            
            <FaShoppingCart />
            <span class="mx-4">0</span>
        </div>
    )
}

export default CartWidget