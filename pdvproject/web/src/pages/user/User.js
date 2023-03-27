import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'



export default function User(){

    const id = useParams().id
    const token = localStorage['token']
    const  [getInf, setGetInf] = useState('')
    useEffect(()=>{axios.get(
        "http://localhost:3003/user/"+id,{
            headers: {
              'Authorization': `token ${token}`
            }
          }
    )
    .then(
        res=>{setGetInf(res.data); }//LocalStorage esta resetando os valores depois do login. Estava com um erro que o token validava qualquer usuario com um id valido
        )
    .catch(
        (err) => {
        console.error("ops! ocorreu um erro" + err);
      }
      );}, [])
    const user =  getInf.user
    
    if(user){
        console.log(user.products)
        return(
            <div>
                <h1>Bem vindo {user.name}</h1>
                <h1>Email de usuario {user.email}</h1>
                <button type='button' onClick={()=>{
                    localStorage.clear();
                    window.location.href = "/login"
                }}>Sair</button>
            </div>
        );
    }
    else{
        return(
            <div>
                <h1>Carregando</h1>
            </div>
        );
    }
}