import React from "react";
import s from './Footer.module.css';
import {IoIosArrowDropupCircle} from 'react-icons/io'
import Linkedin from '../../img/linkedin.png';
import mail from '../../img/mail.png';
import git from '../../img/git.png';

export default function Footer({color}){

    return (
        <div className={s.container}>
            <div className={s.redes}>
                <img src={Linkedin} className={s.Logo} alt='linkedin logo' onClick={() => { window.open('https://www.linkedin.com/in/jdfbdev/','_blank')}} />
                <img src={mail} className={s.Logo} alt='email logo' onClick={() => { window.open('mailto:JDFBdeveloper@gmail.com?','_blank')}} />
                <img src={git} className={s.Logo} alt='github logo' onClick={() => { window.open('https://github.com/JDFBdev','_blank')}} />
            </div>
            <p className={s.p}>© 2022<br/>Juan Diego<br/>Fernández Bottarini</p>
            <div className={s.btnContainer}>
                <a href='#main' >
                <IoIosArrowDropupCircle size='3.5rem' color={`rgb(${color.r},${color.g},${color.b})`} 
                    style={{
                        transition: "all 4s ease",
                        WebkitTransition: "all 4s ease",
                        MozTransition: "all 4s ease",
                        cursor: 'pointer'
                        }} />
                    </a>
            </div>
        </div>
    )
}