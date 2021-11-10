import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import {
  Image,
  Card,
  CardDescription,
  Button,
  Message,
  Icon,
} from "semantic-ui-react";
import "./Cart.css";
import "../itemList/item/ItemList.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, total, removeItem, clear } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="Error">
        <Message>
          <Message.Header>Whoops!</Message.Header>
          <p>
            <Icon link name="close" /> El carrito aún no tiene ningun producto,
            te esperaremos hasta que puedas encontrar el que te guste{" "}
            <Icon link name="heart" />
          </p>
        </Message>
      </div>
    );
  }

  return (
    <div className="items cartcart">
      {cart.map((item) => (
        <Card color="green">
          <Image className="imagenpng" src={item.imagen} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{item.nombre}</Card.Header>
            <Card.Meta></Card.Meta>
            <Card.Description>Precio: {item.precio}</Card.Description>
            <Card.Description>Subtotal: {item.subTotal}</Card.Description>
            <CardDescription>
              <Button onClick={() => removeItem(item.id)} color="google plus">
                Eliminar articulo
              </Button>

              <Link to={`/Envio`}>
                <Button positive>Terminar compra</Button>
              </Link>
            </CardDescription>
          </Card.Content>
        </Card>
      ))}
      <div className="SeccionCarrito">
        <h2>Total carrito: {total}</h2>
        <div className="Vaciar">
          <Button onClick={() => clear()} color="google plus">
            Vaciar Carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
