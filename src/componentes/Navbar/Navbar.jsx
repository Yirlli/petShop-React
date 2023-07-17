import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/petsh.png"
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav >
            <div class="flex justify-evenly">
                <img src={logo} alt="cart-widget" width="180px"/>
            
                <div class="flex ">
                    <ul class="flex gap-x-4 mt-14">
                        <li ><Link to="/">Inicio</Link></li>

                        <li ><Link to="/productos">Productos</Link></li>
                        <li><Link to="/productos/jueguetes">Juguetes Funcionales</Link></li>
                        <li><Link to="/productos/alimentos para perros">Alimentos para perros</Link></li>
                        <li><Link to="/productos/gatos">Alimentos para gatos</Link></li>
                        
                    </ul>
        
                </div>
                <CartWidget/>

            </div>
            
            
        </nav>
        
    )
}
export default Navbar
