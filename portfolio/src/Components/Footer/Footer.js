import React, { useState, useEffect } from "react";
import s from './Footer.module.css';
import Linkedin from '../../img/linkedin.png';
import mail from '../../img/mail.png';
import git from '../../img/git.png';
import {IoIosArrowDropupCircle} from 'react-icons/io'

export default function Footer(){

    const [counter, setCounter] = useState(6);
    const [color,setColor] = useState({r:173, g:0, b: 0})

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 2000);
        counter === 0 && setCounter(6)
        if (counter === 6){
            setColor({r:173, g: 0, b:0})
        }
        if (counter === 5){
            setColor({r:173, g: 173, b:0})
        }
        if (counter === 4){
            setColor({r:0, g: 173, b:0})
        }
        if (counter === 3){
            setColor({r:0, g: 173, b:173})
        }
        if (counter === 2){
            setColor({r:0, g: 0, b:173})
        }
        if (counter === 1){
            setColor({r:173, g: 0, b:173})
        }

    }, [counter]);


    return (
        <div className={s.container}>
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
            <div className={s.skills}>
                <h6 className={s.title}>Skills</h6>
                <p className={s.stack}>JavaScript<br/>
                    React<br/>
                    Redux<br/>
                    Express<br/>
                    Sequelize<br/>
                    PostgreSQL<br/>
                    HTML<br/>
                    CSS<br/>
                    Node.js<br/>
                    Scrum<br/>
                    TypeScript<br/>
                    Github
                </p>
                <p className={s.stack}>
                    GraphQL<br/>
                    Apollo<br/>
                    Restful API's<br/>
                    EF SET C2 Proficienct<br/>
                    Electronics<br/>
                    CorelDraw<br/>
                    Solid Works<br/>
                </p>
            </div>
            <div className={s.btnContainer}>
                <a href='#main' >
                <IoIosArrowDropupCircle size='3rem' color={`rgb(${color.r},${color.g},${color.b})`} 
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