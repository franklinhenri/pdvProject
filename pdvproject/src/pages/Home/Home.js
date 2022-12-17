import React from 'react';
import './style.css'
import logo from './logo.svg'
import img1 from './img1.png'
export default function home() {
    return (
        <div className='home'>
            <nav className='menu'>
                <div className='logo'><img src={logo}></img></div>
                <ul className='menu-itens'>
                    <li>Conheça</li>
                    <li className='descubra'>Descubra como melhorar</li>
                    <li className='login'><a>Entrar</a></li>
                </ul>
            </nav>
            <div className='section1'>
                <div className='texto'>
                    <div className='tit'>
                        <h1>Ticket</h1>
                        <p>Transforme seu restaurante!</p>
                    </div>
                    <div className='vantagens'>
                        <ul>
                            <li>Controle de pedidos</li>
                            <li>Controle de estoque e ingredientes</li>
                            <li>Analise de produção</li>
                            <li>Emisão de cupom fiscal</li>
                        </ul>
                    </div>
                    <div className='btn-more'>
                        <button type='button'>Role o scroll</button>
                    </div>
                </div>
                <div className='imagem'><img src={img1} width='90%'></img></div>
            </div>
        </div>
    );
}