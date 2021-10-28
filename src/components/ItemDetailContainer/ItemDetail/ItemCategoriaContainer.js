import ItemDetail from "./ItemDetail";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../../data.js";
import Spinner from "../../spinner/spinner";
import "./itemDetailContainer.css";
import { Circle, Heart, Facebook } from "react-spinners-css";

const ItemCategoriaContainer = () => {
  //Estados

  const [resultado, setResultado] = useState();

  const { cat } = useParams();

  const productos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    }).then((result) => {
      const producto = result.filter((elem) => elem.categoria === cat);

      setResultado(producto);
    });
  };

  useEffect(productos, [cat]);

  return (
    <div className="itemsDos">
      {resultado ? (
        resultado.map((elem) => <ItemDetail data={elem} />)
      ) : (
        <div className="spinnerr">
          <Facebook />
        </div>
      )}
    </div>
  );
};

export default ItemCategoriaContainer;
