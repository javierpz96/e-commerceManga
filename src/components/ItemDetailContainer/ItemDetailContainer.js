import ItemDetail from "./ItemDetail/ItemDetail";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../ItemDetailContainer/ItemDetail/itemDetailContainer.css";
import { Facebook } from "react-spinners-css";
import { only } from "../Firebase/Firebase";

const ItemDetailContainer = () => {
  //Estados

  const [resultado, setResultado] = useState();

  const { id } = useParams();


  useEffect(() => {
    const item = only(id);
    item.then((data) => {
      setResultado(data.data());
    });
  }, [id]);

  return (
    <div className="itemsDos">
      {resultado ? (
        <ItemDetail data={resultado} />
      ) : (
        <div className="spinnerr">
          <Facebook />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
