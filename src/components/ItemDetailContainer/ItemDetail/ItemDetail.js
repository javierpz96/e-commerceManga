/* eslint-disable max-len */

import React, { useContext } from "react";
import { Card, Image } from "semantic-ui-react";
import ItemCount from "../../button/ItemCount";
import "./ItemDetail.css";

import { CartContext } from "../../Context/CartContext";
import "./itemDetailContainer.css";
import "../../itemList/item/ItemList.css";
import Cart from "../../cart/Cart";

const ItemDetail = ({ data }) => {
  const { addItem, unidades, setUnidades, cart} = useContext(CartContext);


  

  return (
    <Card className="itemsDos">
      <div className="imagenpng">
        <Image src={data.imagen} wrapped ui={false} />
      </div>
      <Card.Content>
        <Card.Header>{data.nombre}</Card.Header>
        <Card.Meta>
          <span className="date">{data.precio}</span>
        </Card.Meta>
        <Card.Description numberOfLines={1}>{data.descripcion}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="container-itemcount">
          <ItemCount data={data} stock="30" initial="0"></ItemCount>
        </div>
      </Card.Content>
    </Card>
  );
};

export default ItemDetail;
