import React from 'react'
import './navBar.css'
import logo from './imgs/logo-svg.svg'
import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <nav className='nav-bar'>
            <ul className='nav-bar-grid'>
                <li><Link to="/"><img className='logo' src={logo}/></Link></li>
                <li></li>
                <li><a><h2>Conheça</h2></a></li>
                <li><a><h2>Como Melhora</h2></a></li>
                <li className='loginItem'><Link to="/login" className='login'><h2>Login</h2></Link></li>
            </ul>
        </nav>
    );
}