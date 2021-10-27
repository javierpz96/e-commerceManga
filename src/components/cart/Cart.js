import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Image, Item } from "semantic-ui-react";
import "./Cart.css";

const Cart = () => {
  const { cart, total, removeItem, clear } = useContext(CartContext);

  return (
    <div className="CartCSS">
      {cart.length > 0 ? (
        cart.map((item) => (
          <Item>
            <Item.Content>
              <Item.Header as="a">{item.nombre}</Item.Header>
              <Item.Meta>{item.idioma}</Item.Meta>
              <Item.Description>precio: {item.precio}</Item.Description>
              <Item.Extra>SubTotal: {item.subTotal}</Item.Extra>
              <button onClick={() => removeItem(item.id)}>
                Eliminar producto
              </button>
              <button onClick={() => clear()}>Vaciar carrito</button>
            </Item.Content>

            <Item.Image size="tiny" src={item.imagen} />
          </Item>
        ))
      ) : (
        <div>El carrito se encuentra vacio</div>
      )}
    </div>
  );
};

export default Cart;
