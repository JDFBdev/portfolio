import React, { useRef } from "react";
import s from './NavBar.module.css';
import Dot from "../Dot/Dot";
import DynamicHeader from "../DynamicHeader/DynamicHeader";

export default function NavBar({visibleMain, visibleWork, modal}){

    const handleContact = function(e){
        e.preventDefault();
        modal();
    }
   
    return (
        <div className={s.container}>
            <div className={s.title} style={{opacity: visibleMain ? '0' : '1', color: (visibleWork.dot1 || visibleWork.first || visibleWork.second || visibleWork.third || visibleWork.dot2) ? '#2F2F2F' : '#D2D3D5'}}>
                <div className={s.hello} >
                    Hello<Dot/>&nbsp;I am&nbsp;<DynamicHeader/>
                </div>
            </div>
            <div className={s.btns}>
                <a className={s.btn} href='#about' style={{color: (visibleWork.dot1 || visibleWork.first || visibleWork.second || visibleWork.third || visibleWork.dot2) ? '#2F2F2F' : '#D2D3D5'}}>ABOUT</a>
                <a className={s.btn} href='#work'  style={{color: (visibleWork.dot1 || visibleWork.first || visibleWork.second || visibleWork.third || visibleWork.dot2) ? '#2F2F2F' : '#D2D3D5'}}>WORK</a>
                <a className={s.btn} onClick={handleContact} style={{color: (visibleWork.dot1 || visibleWork.first || visibleWork.second || visibleWork.third || visibleWork.dot2) ? '#2F2F2F' : '#D2D3D5'}}>CONTACT</a>
            </div>
        </div>
    ) 
}