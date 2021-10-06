import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/button/ItemCount';
import ItemList from './components/itemList/ItemList';
import ItemDetail from './components/ItemDetailContainer/ItemDetail/ItemDetail';

function App() {
  return (
   <div>
      <NavBar/> 
      <ItemListContainer greetings=''/>
      <ItemList/>
      <ItemDetail/>
   </div>
  );
}

export default App;
