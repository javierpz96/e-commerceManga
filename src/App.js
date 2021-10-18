import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemList from "./components/itemList/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemCategoriaContainer from "./components/ItemDetailContainer/ItemDetail/ItemCategoriaContainer";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
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
      </Switch>
    </Router>
  );
}

export default App;
