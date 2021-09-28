import React from "react";
import cartWidget from "./cartWidget.css";

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
