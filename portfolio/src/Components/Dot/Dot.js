import React from "react";
import s from './Dot.module.css';

export default function Dot({isdiv, isdiv2, color}){

    return <>
        {
            isdiv ? 
            <div className={ isdiv2 ? s.dotDiv2 : s.dotDiv} 
                style={{
                    backgroundColor: `rgb(${color.r},${color.g},${color.b})`,
                    transition: "all 4s ease",
                    WebkitTransition: "all 4s ease",
                    MozTransition: "all 4s ease"
                    }} 
                /> : 
                <p className={s.dot} 
                    style={{
                        color: `rgb(${color.r},${color.g},${color.b})`,
                        transition: "all 4s ease",
                        WebkitTransition: "all 4s ease",
                        MozTransition: "all 4s ease"
                        }} 
                        >.</p>
        }
        </>
}