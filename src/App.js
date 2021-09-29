import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/button/ItemCount';

function App() {
  return (
   <div>
      <NavBar/> 
      <ItemListContainer greetings=''/>
      <ItemCount initial='1' stock='5'/>
   </div>
  );
}

export default App;
