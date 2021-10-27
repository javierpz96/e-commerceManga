import React, { useState, useContext } from "react";
import "./button.css";
import BotonTienda from "../BotonTienda";
import {CartContext} from '../Context/CartContext'

const ItemCount = (props) => {
  // Estados

  const [unidades, setUnidades] = useState(parseInt(props.initial));
  const [stock, setStock] = useState(parseInt(props.stock));
  const [boton,setBoton] = useState(false)

  const {addItem} = useContext(CartContext)


  // Función de suma
  // Si es 0 va saltar una alerta!
  // Si NO es 0 va aumentar una unidad y va a restar 1 al stock

  const sumar = () => {
    if (stock === 0) {
      alert("no hay mas stock");
    } else {
      setUnidades(unidades + 1);
      setStock(stock - 1);
    }
  };

  //----------------------------------------------------------

  //Función restar
  //Si unidades es 0 no me va a dejar comprar
  //Si unidades NO es 0, se va a restar una unidad y sumar una a stock
  //>>porque estaria dejando item de mi carrito <<

  const restar = () => {
    if (unidades === 0) {
      alert("no puedes comprar negativo");
    } else {
      setUnidades(unidades - 1);
      setStock(stock + 1);
    }
  };

  //función onAdd
  //Añade la función de avisarme cuantas unidades acabo de comprar al presionar onAdd

  const onAdd = () =>{
    alert(`Se agrego ${unidades} unidades al carrito`)
    if(unidades>0){
      setBoton(true)
      props.onAdd(unidades)
    }
  }

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
