import React from "react";


const CartWidget = (props) => {
  return (
    <div>
      <p>
        <i class="fas fa-shopping-cart "></i> {props.carrito}
      </p>
    </div>
  );
};

export default CartWidget;
