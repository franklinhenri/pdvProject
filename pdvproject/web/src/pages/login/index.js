import React from 'react'
import NavBar from '../../components/nav-bar/NavBar';
import FormLogin from '../../components/loginForm/LoginForm'
import LoginForm from '../../components/loginForm/LoginForm';

export default function Login(){
    return(
        <div className='container'>
            <NavBar/>
            <LoginForm/>
        </div>
    );
}