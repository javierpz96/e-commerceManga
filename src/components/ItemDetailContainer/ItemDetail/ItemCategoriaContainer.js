import ItemDetail from "./ItemDetail";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../../data.js";
import Spinner from "../../spinner/spinner";
import "./itemDetailContainer.css";
import { Circle, Heart, Facebook } from "react-spinners-css";
import "../../itemList/item/ItemList.css";
import { allItem, itemCat } from "../../Firebase/Firebase";

const ItemCategoriaContainer = () => {
  //Estados

  const [resultado, setResultado] = useState();

  const { cat } = useParams();


  useEffect(() => {
    const items = itemCat(cat);
    items.then((data) => {
      console.log(data)
      const itemsAux = [];
      const producto = data.filter((item) => item.categoria === item.data().categoria);
      if (producto === true){
        data.forEach((item) => {
          itemsAux.push({
            id:item.id,
            nombre:item.data().nombre,
            idioma:item.data().idioma,
            descripcion:item.data().descripcion,
            imagen:item.data().imagen,
            precio:item.data().precio,
          });
        });
        setResultado(itemsAux)
        
      }
    });
  },[]);




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
