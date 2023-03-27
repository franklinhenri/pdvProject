import React, { useState, useEffect } from 'react'
import './userSelect.css'
import logo from '../../components/nav-bar/imgs/logo-svg.svg'
export default function UserSelect() {
    const userLog = 'Mercadinho Medeiros'
    const [userName, setUserName] = useState('')
    const [usage, setUsage] = useState('')
    const [page, setPage] = useState('')
    const user = {
        name: '',
        usage: ''
    }

    useEffect(() => {
        user.name = userName;
        user.usage = usage;
        console.log(user.name)
        console.log(user.usage)
        console.log(page)
    }, [userName, usage, page])


    const userLocal = localStorage

    if (page == 0) {
        return (
            <div className='container selectUsage'>
                <img className='logoUsageSelect' src={logo} width="10%"></img>
                <h1 className='usageUser'>{userLog}</h1>
                <div className='selectUserUsage'>
                    <form className='formSelectUsage' id='usuarios'>
                        <h3 className='userSelectedUsage'>Usuario selecionado: {userName}</h3>
                        <button className='SelectUsageItem' type="button"
                            onClick={(e) => {
                                setUserName(e.target.innerHTML)
                                const el = document.getElementsByClassName('SelectedUsageItem')
                                if (el.length > 0) {
                                    el[0].classList.remove('SelectedUsageItem')
                                }
                                e.target.classList.add('SelectedUsageItem')
                            }}
                        >Bruna</button>
                        <button className='SelectUsageItem' type="button"
                            onClick={(e) => {
                                setUserName(e.target.innerHTML)
                                const el = document.getElementsByClassName('SelectedUsageItem')
                                if (el.length > 0) {
                                    el[0].classList.remove('SelectedUsageItem')
                                }
                                e.target.classList.add('SelectedUsageItem')
                            }}
                        >jose</button>
                        <button className='SelectUsageItem' type="button"
                            onClick={(e) => {
                                setUserName(e.target.innerHTML)
                                const el = document.getElementsByClassName('SelectedUsageItem')
                                if (el.length > 0) {
                                    el[0].classList.remove('SelectedUsageItem')
                                }
                                e.target.classList.add('SelectedUsageItem')
                            }}
                        >Romar</button>
                        <button className='NextUsage' type='button' onClick={() => {
                            if (user.name != '') {
                                const el = document.getElementsByClassName('SelectedUsageItem')
                                if (el.length > 0) {
                                    el[0].classList.remove('SelectedUsageItem')
                                }
                                localStorage.setItem('name', user.name)
                                setPage(1)
                            }
                        }}>Selecionar</button>
                    </form>
                </div>
            </div>
        );
    }
    if (page == 1 && user.usage == "") {
        return (
            <div className='container selectUsage'>
                <img className='logoUsageSelect' src={logo} width="10%"></img>
                <h1 className='usageUser'>{userLog}</h1>
                <div className='selectUserUsage'>
                    <form className='formSelectUsage' id='usuarios'>
                        <h3 className='userSelectedUsage'>Usuario selecionado: {userName}</h3>
                        <button className='SelectUsageItem' type="button"
                            onClick={(e) => {
                                setUsage(e.target.innerHTML)
                                const el = document.getElementsByClassName('SelectedUsageItem')
                                if (el.length > 0) {
                                    el[0].classList.remove('SelectedUsageItem')
                                }
                                e.target.classList.add('SelectedUsageItem')
                            }}
                        >PDV</button>
                        <button className='SelectUsageItem' type="button"
                            onClick={(e) => {
                                setUsage(e.target.innerHTML)
                                const el = document.getElementsByClassName('SelectedUsageItem')
                                if (el.length > 0) {
                                    el[0].classList.remove('SelectedUsageItem')
                                }
                                e.target.classList.add('SelectedUsageItem')
                            }}
                        >TICKET</button>
                        <button className='SelectUsageItem' type="button"
                            onClick={(e) => {
                                setUsage(e.target.innerHTML)
                                const el = document.getElementsByClassName('SelectedUsageItem')
                                if (el.length > 0) {
                                    el[0].classList.remove('SelectedUsageItem')
                                }
                                e.target.classList.add('SelectedUsageItem')
                            }}
                        >ANALYTCS</button>
                        <div className='buttonsUsageNextBack'>
                            <button className='BackUsage' type='button' onClick={() => {
                                if (user.name != '') {
                                    const el = document.getElementsByClassName('SelectedUsageItem')
                                    if (el.length > 0) {
                                        el[0].classList.remove('SelectedUsageItem')
                                    }
                                    setPage(0)
                                }
                            }}>Voltar</button>
                            <button className='NextUsage' type='button' onClick={() => {
                                if (user.name != '' && user.usage != '') {
                                    localStorage.setItem('usage', user.usage)
                                    setPage(2)
                                }
                            }}>Selecionar</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    if (page == 2) {
        return (
            window.location.href = "/"+userLocal.id+"/pdvHome"
        )
    }
}