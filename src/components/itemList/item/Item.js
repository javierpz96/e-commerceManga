import React from "react";
import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./ItemList.css";
import { Link } from "react-router-dom";

const CardExampleCard = ({ data }) => {
  return (
    <Link to={`/item/${data.id}`}>
      <Card>
        <Image
          className="imagenpng"
          src={data.imagen}
          
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
  );
};

export default CardExampleCard;
