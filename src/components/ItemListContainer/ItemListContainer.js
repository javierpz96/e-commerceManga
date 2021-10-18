import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {

    

    return (
        <div className='Saludo' >
            <p>{props.greetings}</p>
        </div>
    )
}

export default ItemListContainer
