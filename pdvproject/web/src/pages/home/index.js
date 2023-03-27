import React from 'react'
import NavBar from "../../components/nav-bar/NavBar.js"
import ImageOne from "../../components/imageOne/ImageOne.js"
import Feactures from "../../components/feactures/Feactures.js"
import './style.css'
export default function Home(){
    return(
        <div className='container'>
            <NavBar/>
            <div className='container-row home'>
                <div className='elementOne'>
                    <Feactures/>
                </div>
                <div className='elementTwo'>
                    <ImageOne/>
                </div>
            </div>
        </div>
    );
}