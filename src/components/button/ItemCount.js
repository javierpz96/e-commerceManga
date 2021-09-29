import React, { useState } from "react";
import "./button.css";


const ItemCount = (props) => {
  // Estados

  const [unidades, setUnidades] = useState(parseInt(props.initial));
  const [stock, setStock] = useState(parseInt(props.stock));

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

  const onAdd = () => {
    alert(`se agrego ${unidades} unidades al carrito!`);
  };

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
    </div>
  );
};

export default ItemCount;
