import ItemDetail from "./ItemDetail/ItemDetail";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data";
import Spinner from "../spinner/spinner";
import "../ItemDetailContainer/ItemDetail/itemDetailContainer.css";
import { Circle, Heart, Facebook } from "react-spinners-css";
import { only } from "../Firebase/Firebase";

const ItemDetailContainer = () => {
  //Estados

  const [resultado, setResultado] = useState();

  const { id } = useParams();

  // const items = allItem()
  // items.then((result) => {
  //     const producto = result.filter((item) => item.id === id);

  //     setResultado(producto);
  //   });
  // };

  // useEffect(productos, [id]);

  useEffect(()=>{
    const item = only(id)
    item.then((data)=>{
      setResultado(data.data())
    })
  },[id])


  return (
    
    <div className="itemsDos">

      {resultado ? <ItemDetail data={resultado} /> : 
      <div className="spinnerr">
        <Facebook />  
      </div>
      }
    </div>
  );
};

export default ItemDetailContainer;
