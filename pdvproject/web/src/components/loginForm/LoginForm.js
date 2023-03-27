import './loginForm.css'
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { redirect } from 'react-router-dom';

export default function LoginForm() {

    const [email, setUseremail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([])
    const [id, setId] = useState("")

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            const foundUser = loggedInUser;
            setUser(foundUser);
        }
    }, [user]);

    const handleLogout = () => {
        console.log(user)
        setUser("");
        setUseremail("");
        setPassword("");
        setId("");
        localStorage.clear();
    };


    const handleSubmit = async e => {
        e.preventDefault();
        const user = { email, password };
        // enviar o nome de usuário e a senha ao servidor
        const response = await axios.post(
            "http://localhost:3003/auth/login",
            user,
        );
        const myMethod = response.method;
        // definir o state do usuário
        setUser(response.data)
        setId(response.data['id'])
        // armazenar o usuário em localStorage
        localStorage.setItem('token', response.data['token'])
        localStorage.setItem('email', email)
        localStorage.setItem('id', response.data['id'])
        console.log(localStorage)
    };

    if (id!= "") {
        window.location.href = "/userSelect/"+id
       // window.location.href = "/user/"+id - estava assim antes
    }
    else {
        console.log(localStorage)
        return (
            <div className='container loginForm'>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label for="email">Email</label>
                        <input type="text"
                            value={email}
                            placeholder="insira um nome de usuário"
                            onChange={({ target }) => setUseremail(target.value)}></input>
                        <label for="passowrd">passowrd</label>
                        <input type="password"
                            value={password}
                            placeholder="insira uma senha"
                            onChange={({ target }) => setPassword(target.value)}></input>
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
        );
    }
}
