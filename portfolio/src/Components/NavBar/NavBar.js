import React from "react";
import s from './NavBar.module.css';
import Dot from "../Dot/Dot";
import DynamicHeader from "../DynamicHeader/DynamicHeader";

export default function NavBar(){

    const handleContact = function(e){
        e.preventDefault();
        alert('puto')
    }

    return (
        <div className={s.container}>
            <div className={s.title}>
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