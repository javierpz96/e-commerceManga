import Item from "./item/Item";
import React, { useState, useEffect } from "react";
import "./item/ItemList.css";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

import { Facebook } from "react-spinners-css";
import "../ItemDetailContainer/ItemDetail/itemDetailContainer.css";
import { allItem } from "../Firebase/Firebase";
import { useParams } from "react-router-dom";

const ItemList = () => {
  //Estados
  const { cat } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const items = allItem();
    items.then((data) => {
      const itemsAux = [];
      data.forEach((item) => {
        itemsAux.push({
          id: item.id,
          nombre: item.data().nombre,
          idioma: item.data().idioma,
          descripcion: item.data().descripcion,
          imagen: item.data().imagen,
          precio: item.data().precio,
        });
      });
      setProductos(itemsAux);
      setCargando(false);
    });
  }, []);

  return (
    <div className="items">
      {cargando ? (
        <div className="spinnerr">
          <Facebook />
        </div>
      ) : (
        productos.map((items) => (
          <div className="ItemList-Container">
            <div key={items.id}>
              <Link to={`/detail/${items.id}`}>
                <Item data={items} />
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemList;
