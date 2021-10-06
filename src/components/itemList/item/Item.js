import React from "react";
import ItemCount from "../../button/ItemCount";
import "./ItemList.css";

const Item = ({ nombre, descripcion, precio, idioma, id, imagen }) => {
  return (
    <div className="item">
      <h2>{nombre}</h2>

      <img src={imagen} alt="imagen" />

      <p>{descripcion}</p>
      <div className="precio">
        <h2>${precio}</h2>
      </div>
      <h4>{idioma}</h4>
      <h2>{id}</h2>
      <div className="contador">
        <ItemCount stock="30" initial="0"></ItemCount>
      </div>
    </div>
  );
};

export default Item;
