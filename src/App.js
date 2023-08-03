
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { ShoppingProvider } from './context/CartContext';
import ShoppingCart from './componentes/ShoppingCart/ShoppingCart';
import Checkout from './componentes/Checkout/Checkout';
import CheckoutForm from './componentes/Checkout/CheckoutForm';

function App() {

  
  return (
    <div className="App">
      <ShoppingProvider>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a la petShop"/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
          <Route path="/carrito" element={<ShoppingCart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/checkoutForm" element={<CheckoutForm/>}/>
        </Routes>
      
      
      
      
        </BrowserRouter>
      </ShoppingProvider>
      
    </div>
  );
}

export default App;
