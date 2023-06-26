import CartWidget from "../CartWidget/CartWidget"
import logo from "../CartWidget/assets/petsh.png"


const Navbar = () => {
    return (
        <nav >
            <div class="flex justify-evenly">
                <img src={logo} alt="cart-widget" width="180px"/>
            
                <div class="flex ">
                    <ul class="flex gap-x-4 mt-14">

                        <li ><a href="#">Juguetes</a></li>
                        <li><a href="#">Ropa</a></li>
                        <li><a href="#">Camas</a></li>
                        
                    </ul>
        
                </div>
                <CartWidget/>

            </div>
            
            
        </nav>
        
    )
}
export default Navbar
