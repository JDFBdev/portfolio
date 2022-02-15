import React from "react";
import neon from '../../img/neon.jpg';
import s from './Main.module.css';

export default function Main(){
    return(
        <div className={s.container}>
            <img className={s.img} src={neon}/>
            <h1 className={s.title}>Hello.<br/>I am<br/>Juan Diego</h1>
        </div>
    )
}