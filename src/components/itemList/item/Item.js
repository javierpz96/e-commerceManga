import React from 'react'
import ItemCount from '../../button/ItemCount'

const Item = ({nombre,descripcion,precio,idioma,id,imagen}) => {
    return (
        <div className='item'>   
            <h2>{nombre}</h2>
            <img src={imagen} alt="imagen" />  
            <h4>{descripcion}</h4>
            <h2>${precio}</h2>
            <h4>{idioma}</h4>
            <h2>{id}</h2>
            <ItemCount stock ='30' initial='0'></ItemCount>
            
        </div>
    )
}

export default Item
