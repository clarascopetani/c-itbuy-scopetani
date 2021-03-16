import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { ListContainer } from './components/ListContainer/ListContainer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <ListContainer />
     <p>Acá va el contenido</p>
    </div>
  );
}

export default App;
