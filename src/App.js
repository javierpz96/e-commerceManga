import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
   <div>
      <NavBar/> 
      <ItemListContainer greetings='greetings to you!'/>

   </div>
  );
}

export default App;
