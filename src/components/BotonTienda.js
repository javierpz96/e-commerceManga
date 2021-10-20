import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import '../components/button/BotonTienda.css'
import { Link } from "react-router-dom";

const BotonTienda = () => (

<Link to ={`/Carrito`}>
  <div className="boton-tienda">
    <Button animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
  </div>
</Link>
)

export default BotonTienda