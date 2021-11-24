/* eslint-disable max-len */

import React from "react";
import { Card, Image } from "semantic-ui-react";
import ItemCount from "../../button/ItemCount";
import "./ItemDetail.css";


import "./itemDetailContainer.css";
import "../../itemList/item/ItemList.css";

const ItemDetail = ({ data }) => {
  


  

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
