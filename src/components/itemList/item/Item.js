import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ItemCount from "../../button/ItemCount";
import "./ItemList.css";
import { Link } from "react-router-dom";


const CardExampleCard = ({ data }) => {


  //Lo envolvemos en un Link
  //Este link to va a filtrar por los parametros que le vamos a pasar
  //En este caso primero va a filtrar por categoria y después por id

  

  return (

  <Link to ={`/item/${data.id}`}>
    
    <Card>
      <Image
        className="imagenpng"
        src={data.imagen}
        wrapped
        ui={false}
        rounded
      />
      <Card.Content>
        <Card.Header>{data.nombre}</Card.Header>
        <Card.Meta>
          <span className="date">{data.idioma}</span>
        </Card.Meta>
        <Card.Description>{data.descripcion}</Card.Description>
      </Card.Content>
      
      <Card.Content extra>${data.precio}</Card.Content>
    </Card>
  </Link>
  )
};

export default CardExampleCard;
