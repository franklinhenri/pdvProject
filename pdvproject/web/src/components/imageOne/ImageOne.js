import React from 'react'
import './imageOne.css'
import garcons from './imgs/garcons.png'
import balao from './imgs/balao.png'

export default function ImageOne(){
    return(
        <div className='container imageOne'>
            <div className='container elementsBlock'>
                <div className='bloco'></div>
                <div className='vazio'></div>
                <div className='bloco'></div>
                <div className='vazio'></div>
                <div className='bloco'></div>
                <div className='vazio'></div>
                <div className='bloco'></div>
                <div className='vazio'></div>
                <div className='bloco'></div>
                <div className='vazio'></div>
                <div className='bloco'></div>
                <div className='vazio'></div>
                <div className='bloco'></div>
                <div className='vazio'></div>
                <div className='bloco'></div>
                <div className='vazio'></div>
                <div className='bloco'></div>
                <div className='vazio'></div>
                <div className='bloco'></div>
            </div>
            <div className='imageBlock imagensBlockOne'>
                    <img src={garcons} className="garconsImg"></img>
                    <div className='balaoBlock'>
                        <img src={balao} className="balao"></img>
                    </div>
            </div>
        </div>
    );
}