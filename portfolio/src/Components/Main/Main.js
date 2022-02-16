import React from "react";
import neon from '../../img/neon.jpg';
import s from './Main.module.css';
import Dot from '../Dot/Dot'

export default function Main(){
    return(
        <div className={s.container}>
            <img className={s.img} src={neon}/>
            <div className={s.titleContainer}>
                <h1 className={s.title}>
                    <div className={s.hello} >
                        Hello<Dot/>
                    </div>
                    I am
                    <div>
                        Juan Diego
                    </div>
                </h1>
            </div>
        </div>
    )
}