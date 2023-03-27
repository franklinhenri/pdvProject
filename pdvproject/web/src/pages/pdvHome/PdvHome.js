import React from 'react'
import './pdvhome.css'
export default function PdvHome() {

const handleLogout = () => {
    console.log(localStorage)
        localStorage.clear();
    console.log(localStorage)
    window.location.href = "/login"
    };

    return (
        <div className='container pdvhome'>
            <nav className='optionsPdv'>
                <h1>BEM VINDO {localStorage.name}</h1>
                <ul>
                    <li><h2>Item</h2></li>
                    <li><h2>Item</h2></li>
                    <li><h2>Item</h2></li>
                    <li><h2>Item</h2></li>
                    <li><button onClick={handleLogout}>SAIR</button></li>
                </ul>
            </nav>
            <div className="filtros">
                <input type="text"></input>
            </div>
            <div className="pdvTik">
                <div className="tiks">
                    <ul>
                        <li className="tiket" onClick={(e)=>{ let element = document.getElementsByClassName("ativo"); if(element.length>0){element[0].classList.remove('ativo');} e.target.classList.add('ativo'); console.log(element)}}>Itens1</li>
                        <li className="tiket" onClick={(e)=>{ let element = document.getElementsByClassName("ativo"); if(element.length>0){element[0].classList.remove('ativo');} e.target.classList.add('ativo'); console.log(element)}}>Itens2</li>
                        <li className="tiket" onClick={(e)=>{ let element = document.getElementsByClassName("ativo"); if(element.length>0){element[0].classList.remove('ativo');} e.target.classList.add('ativo'); console.log(element)}}>Itens3</li>
                        <li className="tiket" onClick={(e)=>{ let element = document.getElementsByClassName("ativo"); if(element.length>0){element[0].classList.remove('ativo');} e.target.classList.add('ativo'); console.log(element)}}>Itens4</li>
                        <li className="tiket" onClick={(e)=>{ let element = document.getElementsByClassName("ativo"); if(element.length>0){element[0].classList.remove('ativo');} e.target.classList.add('ativo'); console.log(element)}}>Itens5</li>
                        <li className="tiket" onClick={(e)=>{ let element = document.getElementsByClassName("ativo"); if(element.length>0){element[0].classList.remove('ativo');} e.target.classList.add('ativo'); console.log(element)}}>Itens6</li>
                        <li className="tiket" onClick={(e)=>{ let element = document.getElementsByClassName("ativo"); if(element.length>0){element[0].classList.remove('ativo');} e.target.classList.add('ativo'); console.log(element)}}>Itens</li>
                        <li className="tiket" onClick={(e)=>{ let element = document.getElementsByClassName("ativo"); if(element.length>0){element[0].classList.remove('ativo');} e.target.classList.add('ativo'); console.log(element)}}>Itens</li>
                        <li className="tiket" onClick={(e)=>{ let element = document.getElementsByClassName("ativo"); if(element.length>0){element[0].classList.remove('ativo');} e.target.classList.add('ativo'); console.log(element)}}>Itens</li>
                        <li className="tiket" onClick={(e)=>{ let element = document.getElementsByClassName("ativo"); if(element.length>0){element[0].classList.remove('ativo');} e.target.classList.add('ativo'); console.log(element)}}>Itens</li>
                        <li className="tiket" onClick={(e)=>{ let element = document.getElementsByClassName("ativo"); if(element.length>0){element[0].classList.remove('ativo');} e.target.classList.add('ativo'); console.log(element)}}>Itens</li>
                        <li className="tiket" onClick={(e)=>{ let element = document.getElementsByClassName("ativo"); if(element.length>0){element[0].classList.remove('ativo');} e.target.classList.add('ativo'); console.log(element)}}>Itens</li>
                    </ul>
                </div>
                <div className="itensTik">
                    <h2>Itens</h2>
                    <ul className="itenstiketdiv">
                        <li className="tiketitem">
                            <h3 className="valoresitens">Nome</h3>
                            <h3 className="valoresitens">10<span> un</span></h3>
                            <h3 className="valoresitens">R$10,00</h3>
                            <h3 className="valoresitens">R$100,00</h3>
                        </li>
                        <li className="tiketitem">
                            <h3 className="valoresitens">Nome</h3>
                            <h3 className="valoresitens">10<span> un</span></h3>
                            <h3 className="valoresitens">R$10,00</h3>
                            <h3 className="valoresitens">R$100,00</h3>
                        </li>
                        <li className="tiketitem">
                            <h3 className="valoresitens">Nome</h3>
                            <h3 className="valoresitens">10<span> un</span></h3>
                            <h3 className="valoresitens">R$10,00</h3>
                            <h3 className="valoresitens">R$100,00</h3>
                        </li>
                        <li className="tiketitem">
                            <h3 className="valoresitens">Nome</h3>
                            <h3 className="valoresitens">10<span> un</span></h3>
                            <h3 className="valoresitens">R$10,00</h3>
                            <h3 className="valoresitens">R$100,00</h3>
                        </li>
                        <li className="tiketitem">
                            <h3 className="valoresitens">Nome</h3>
                            <h3 className="valoresitens">10<span> un</span></h3>
                            <h3 className="valoresitens">R$10,00</h3>
                            <h3 className="valoresitens">R$100,00</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}