import React from "react";
import "./BotonTienda.css";
import { Link } from "react-router-dom";

const BotonTienda = () => (
  <Link to={`/Carrito`}>
    <button type="button" class="btn btn-outline-success ">Finalizar</button>
  </Link>
);

export default BotonTienda;
