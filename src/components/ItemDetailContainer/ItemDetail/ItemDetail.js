/* eslint-disable max-len */

import React from "react";
import { Container, Divider, Image } from "semantic-ui-react";
import ItemCount from "../../button/ItemCount";
import "./ItemDetail.css";
import BotonTienda from "../../BotonTienda";

const ItemDetail = ({ data }) => (
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
        <ItemCount stock="30" initial="0"></ItemCount>
      </div>
    </Container>
  </div>
);

export default ItemDetail;
