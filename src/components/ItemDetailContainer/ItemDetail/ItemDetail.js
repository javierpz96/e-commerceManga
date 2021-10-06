import React from 'react'
import ItemCount from '../../button/ItemCount'

const ItemDetail = ({nombre,descripcion,precio,idioma,id,img}) => {
    return (
        <div className='item'>
            <h1>ITEM DETAIL</h1>   
            <h2>{nombre}</h2>
            <img src={img} alt="imagen" />  
            <h2>{descripcion}</h2>
            <h2>${precio}</h2>
            <h2>{idioma}</h2>
            <h2>{id}</h2>
            <ItemCount stock ='30' initial='0'></ItemCount>
            
        </div>
    )
}

export default ItemDetail
