import React, { useState, useContext, useEffect } from "react";
import "./button.css";
import BotonTienda from "./BotonTienda";
import { CartContext } from "../Context/CartContext";

const ItemCount = (props) => {

  //Estados

 
  const [stock, setStock] = useState(parseInt(props.stock));
  const [boton, setBoton] = useState(false);

  const {unidades, setUnidades, addItem, cart} = useContext(CartContext);

  //Funciones

  const sumar = () => {
    if (stock === 0) {
    } else {
      setUnidades(unidades + 1);
      setStock(stock - 1);
    }
  };


  const restar = () => {
    if (unidades === 0) {
    } else {
      setUnidades(unidades - 1);
      setStock(stock + 1);
    }
  };

  const onAdd = (data, cantidad) => {
    if (unidades > 0) {
      addItem(data, cantidad)
      setUnidades(0)
    }
  };


  useEffect(()=> {
    
  }, [cart])
  

  return (
    <div className="Contador">
      <p className="m-4">Unidades: {unidades}</p>
      <div className="m-3">
        <div>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              onClick={sumar}
              type="button"
              class="btn btn-outline-primary"
            >
              +
            </button>
            <button
              onClick={() => {
                setBoton(true)
                onAdd(props.data, unidades)
              }}
              type="button"
              class="btn btn-outline-success "
            >
              Añadir al carrito
            </button>
            <button
              onClick={restar}
              type="button"
              class="btn btn-outline-primary"
            >
              -
            </button>
          </div>
        </div>
      </div>

      <p className="m-3">Stock disponible: {stock} </p>

      {boton && <BotonTienda></BotonTienda>}
      
    </div>
  );
};

export default ItemCount;
