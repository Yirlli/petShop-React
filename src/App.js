
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a la petShop"/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
      </Routes>
      
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
