/* eslint-disable max-len */

import React,{useContext,useEffect} from "react";
import { Container, Divider, Image } from "semantic-ui-react";
import ItemCount from "../../button/ItemCount";
import "./ItemDetail.css";
import BotonTienda from "../../BotonTienda";
import {CartContext} from '../../Context/CartContext'

const ItemDetail = ({ data }) => {

 const {addItem,cart} = useContext(CartContext)

  const onAddCarrito = (cantidad) =>{
      addItem(data,cantidad)
  }

  useEffect(() => {
    console.log(cart);
  },[cart])



  return (
    <div>
      <div className="h1">
        <Container textAlign="center">
          <h1>{data.nombre}</h1>
        </Container>
      </div>
      <div className="imagen-detail">
        <Image
          className="imagenpng"
          src={data.imagen}
          wrapped
          ui={false}
          rounded
        />
      </div>
      <Container textAlign="right">{data.idioma}</Container>
      <Container textAlign="justified">
        <b>Justified</b>
        <Divider />
        {data.descripcion}
        <div className="container-itemcount">
          <ItemCount onAdd={onAddCarrito} stock="30" initial="0"></ItemCount>
        </div>
      </Container>
    </div>
  );
};

export default ItemDetail;
