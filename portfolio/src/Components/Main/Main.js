import React from "react";
import neon from '../../img/neon.jpg';
import s from './Main.module.css';
import Dot from '../Dot/Dot'
import DynamicHeader from "../DynamicHeader/DynamicHeader";
import About from "../About/About";


export default function Main(){
    return(
        <div className={s.wrapper}>
            <div className={s.container}>
                <img className={s.img} src={neon}/>
                <div className={s.titleContainer}>
                    <h1 className={s.title}>
                        <div className={s.hello} >
                            Hello<Dot/>
                        </div>
                            I am
                        <div>
                            <DynamicHeader/>
                        </div>
                    </h1>
                </div>
            </div>
            <About/>
        </div>
    )
}