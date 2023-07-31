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

                        <li><Link to="/productos/Juguetes">Juguetes</Link></li>
                        <li><Link to="productos/Perros">Alimentos para perros</Link></li>
                        <li><Link to="productos/Gatos">Alimentos para gatos</Link></li>
                        <li><CartWidget/></li>
                        

                        
                    </ul>
        
                </div>
                

            </div>
            
            
        </nav>
        
    )
}
export default Navbar
