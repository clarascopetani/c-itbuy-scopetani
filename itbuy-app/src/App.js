import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer />
     <p>Acá va el contenido</p>
    </div>
  );
}

export default App;
