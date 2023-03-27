import React from 'react'
import './feactures.css'

export default function Feactures() {
    return (
        <div className='feactures'>
            <div>
                <h1>Ticket</h1>
                <h2>Transforme seu restaurante!</h2>
            </div>
            <div>
                <ul>
                    <li><h3>Controle de pedidos</h3><div className='sublinhado'></div></li>
                    <li><h3>Controle de estoque e ingredientes</h3><div className='sublinhado'></div></li>
                    <li><h3>Analise de produção</h3><div className='sublinhado'></div></li>
                    <li><h3>Emisão de cupom fiscal</h3><div className='sublinhado'></div></li>
                </ul>
            </div>
            <div><button type='btn'>Role o Scroll</button></div>
        </div>
    );
}