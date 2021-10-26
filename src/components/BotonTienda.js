import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "../components/button/BotonTienda.css";
import { Link } from "react-router-dom";

const BotonTienda = () => (
  <Link to={`/Carrito`}>
    <button type="button" class="btn btn-outline-success ">Finalizar</button>
  </Link>
);

export default BotonTienda;
