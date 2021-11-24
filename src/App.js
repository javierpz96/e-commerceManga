import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemList from "./components/itemList/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemCategoriaContainer from "./components/ItemDetailContainer/ItemDetail/ItemCategoriaContainer";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { CartProvider } from "./components/Context/CartContext";
import Cart from "../src/components/cart/Cart";
import Envio from "../src/components/EnvioCompra/Envio";
import InfoEnvio from "../src/components/InfoEnvio/InfoEnvio";
import Carrusel from "./components/Carousel/Carrusel";
import NavBar2 from './components/navBar/navBar2'
import Divider from './components/divider/Divider'
import Aviso from './components/Aviso/Aviso'
import Beneficios from "./components/Beneficios/Beneficios";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <CartProvider>
      
      <Router>
        <Aviso></Aviso>
        <NavBar2></NavBar2>
        <Divider></Divider>

        <Switch>
          <Route path="/Home">
            <Carrusel></Carrusel>
            <Beneficios></Beneficios>
            
            
            <ItemList />
          </Route>
          <Route path="/categoria/:cat">
            <ItemCategoriaContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/Carrito" exact>
            <Cart />
          </Route>

          <Route path="/Envio" exact>
            <Envio />
          </Route>
          
          <Route path="/InfoEnvio" exact>
            <InfoEnvio/>
          </Route>
          
        </Switch>
      </Router>
      <Footer></Footer>
    </CartProvider>
  );
}

export default App;
