import React from 'react'
import './Beneficios.css'

const Beneficios = () => {
    return (
        <div className="Beneficios">
            <div className="divisor">

            </div>
            <ul>
                <div className="Beneficios2">
                <li>
                    Beneficios
                    Comivic
                </li>
                </div>
               
                <li>
                <i class="fas fa-money-bill"></i> Promociones Bancarias 
                </li>
                <li>
                <i class="fas fa-archive"></i> Almacenaje y envios conjuntos
                </li>
                <li>
                <i class="fas fa-shipping-fast"></i> Envios al todo el pais
                </li>
                <li>
                <i class="fas fa-birthday-cake"></i> Pedidos especiales
                </li>
            </ul>
            <div className="divisor">

            </div>
        </div>
    )
}

export default Beneficios
