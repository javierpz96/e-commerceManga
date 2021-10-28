/* eslint-disable max-len */

import React,{useContext,useEffect} from "react";
import { Card,Container, Divider, Image } from "semantic-ui-react";
import ItemCount from "../../button/ItemCount";
import "./ItemDetail.css";
import BotonTienda from "../../BotonTienda";
import {CartContext} from '../../Context/CartContext'
import './itemDetailContainer.css'

const ItemDetail = ({ data }) => {

 const {addItem,cart} = useContext(CartContext)

  const onAddCarrito = (cantidad) =>{
      addItem(data,cantidad)
  }

 
  return (


<Card className="itemsDos">
    <div className="imagenpng">
      <Image src={data.imagen} wrapped ui={false} />
    </div>
    <Card.Content>
      <Card.Header>{data.nombre}</Card.Header>
      <Card.Meta>
        <span className='date'>{data.precio}</span>
      </Card.Meta>
      <Card.Description>
        {data.descripcion}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div className="container-itemcount">
       <ItemCount onAdd={onAddCarrito} stock="30" initial="0"></ItemCount>
      </div>
    </Card.Content>
  </Card>
  );
};

export default ItemDetail;
