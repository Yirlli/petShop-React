
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from '.componentes/ItemDetailContainer/ItemDetailContainer'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a la petShop"/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada' , quantity)}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
