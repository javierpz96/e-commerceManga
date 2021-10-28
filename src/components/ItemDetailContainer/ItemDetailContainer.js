import ItemDetail from "./ItemDetail/ItemDetail";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data";
import Spinner from "../spinner/spinner";
import "../ItemDetailContainer/ItemDetail/itemDetailContainer.css";

const ItemDetailContainer = () => {
  //Estados

  const [resultado, setResultado] = useState();

  const { id } = useParams();

  const productos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    }).then((result) => {
      const producto = result.filter((elem) => elem.id == id);

      setResultado(producto);
    });
  };

  useEffect(productos, [id]);

  return (
    <div className="itemsDos">
      {resultado ? <ItemDetail data={resultado[0]} /> : <h1>Cargando...</h1>}
    </div>
  );
};

export default ItemDetailContainer;
