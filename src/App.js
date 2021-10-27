import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemList from "./components/itemList/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemCategoriaContainer from "./components/ItemDetailContainer/ItemDetail/ItemCategoriaContainer";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CartProvider } from "./components/Context/CartContext";
import Cart from '../src/components/cart/Cart'

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/Home">
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
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
