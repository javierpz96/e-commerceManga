import React, { useState } from "react";
import "./button.css";
import BotonTienda from "../BotonTienda";

const ItemCount = (props) => {
  // Estados

  const [unidades, setUnidades] = useState(parseInt(props.initial));
  const [stock, setStock] = useState(parseInt(props.stock));
  const [boton, setBoton] = useState(false);


  //Funciones para los botones

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------
  
  const sumar = () => {
    if (stock === 0) {
      alert("no hay mas stock");
    } else {
      setUnidades(unidades + 1);
      setStock(stock - 1);
    }
  };

  const restar = () => {
    if (unidades === 0) {
      alert("no puedes comprar negativo");
    } else {
      setUnidades(unidades - 1);
      setStock(stock + 1);
    }
  };

  const onAdd = () => {
    if (unidades > 0) {
      setBoton(true);
    }
  };
  
  //------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------

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
              onClick={onAdd}
              type="button"
              class="btn btn-outline-success "
            >
              {boton ? <BotonTienda></BotonTienda> : "Comprar"}
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
    </div>
  );
};

export default ItemCount;
