
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a la PetShop"/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada' , quantity)}/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
