import React, { useRef } from "react";
import s from './NavBar.module.css';
import Dot from "../Dot/Dot";
import DynamicHeader from "../DynamicHeader/DynamicHeader";

export default function NavBar({visibleMain, visibleWork}){

    const handleContact = function(e){
        e.preventDefault();
        alert('puto')
    }

   //color: visibleWork ? '#D2D3D5' : '#2F2F2F'
   
    return (
        <div className={s.container}>
            <div className={s.title} style={{opacity: visibleMain ? '0' : '1'}}>
                <div className={s.hello} >
                    Hello<Dot/>&nbsp;I am&nbsp;<DynamicHeader/>
                </div>
            </div>
            <div className={s.btns}>
                <a className={s.btn} href='#about' >ABOUT</a>
                <a className={s.btn} href='#work' >WORK</a>
                <a className={s.btn} onClick={handleContact} >CONTACT</a>
            </div>
        </div>
    ) 
}