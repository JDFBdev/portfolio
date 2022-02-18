import React from "react";
import s from './Redes.module.css';
import Linkedin from '../../img/linkedin.png';
import mail from '../../img/mail.png';
import git from '../../img/git.png';

export default function Redes(){

    return(
        <div className={s.redes}>
                <div className={s.red} onClick={() => { window.open('https://www.linkedin.com/in/jdfbdev/','_blank')}}>
                    <img src={Linkedin} className={s.Logo} />
                    <div className={s.Data}>
                        <p className={s.title}>Linkedin</p>
                        <p className={s.link}>linkedin.com/in/jdfbdev</p>
                    </div>
                </div>
                <div className={s.red} onClick={() => { window.open('mailto:JDFBdeveloper@gmail.com?','_blank')}}>
                    <img src={mail} className={s.Logo} />
                    <div className={s.Data} >
                        <p className={s.title}>E-Mail</p>
                        <p className={s.link}>JDFBdeveloper@gmail.com</p>
                    </div>
                </div>
                <div className={s.red} onClick={() => { window.open('https://github.com/JDFBdev','_blank')}}>
                    <img src={git} className={s.Logo} />
                    <div className={s.Data}>
                        <p className={s.title}>Github</p>
                        <p className={s.link}>https://github.com/JDFBdev</p>
                    </div>
                </div>
            </div>
    )
}