import React from "react";
import s from './NavBar.module.css';
import Dot from "../Dot/Dot";
import DynamicHeader from "../DynamicHeader/DynamicHeader";


export default function NavBar({visibleMain, visibleWork, modal, color}){

    const handleContact = function(e){
        e.preventDefault();
        modal();
    }
   
    return (
        <div className={s.container}  style={{justifyContent: visibleMain && 'flex-end', flexDirection: visibleMain && 'row' }}>
            <div className={s.title} style={{display: visibleMain ? 'none' : 'inline', color: (visibleWork.dot1 || visibleWork.first || visibleWork.second || visibleWork.third || visibleWork.dot2) ? '#2F2F2F' : '#D2D3D5'}}>
                <div className={s.hello} >
                    Hello<Dot color={color} />&nbsp;I am&nbsp;<DynamicHeader/>
                </div>
            </div>
            <div className={s.btns}>
                <a className={s.btn} href='#about' style={{color: (visibleWork.dot1 || visibleWork.first || visibleWork.second || visibleWork.third || visibleWork.dot2) ? '#2F2F2F' : '#D2D3D5'}}>ABOUT</a>
                <a className={s.btn} href='#work'  style={{color: (visibleWork.dot1 || visibleWork.first || visibleWork.second || visibleWork.third || visibleWork.dot2) ? '#2F2F2F' : '#D2D3D5'}}>PROJECTS</a>
                <button className={s.btn} onClick={handleContact} style={{color: (visibleWork.dot1 || visibleWork.first || visibleWork.second || visibleWork.third || visibleWork.dot2) ? '#2F2F2F' : '#D2D3D5'}}>CONTACT</button>
            </div>
        </div>
    ) 
}