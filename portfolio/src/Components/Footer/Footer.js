import React from "react";
import s from './Footer.module.css';
import Redes from "../Redes/Redes";
import {IoIosArrowDropupCircle} from 'react-icons/io'

export default function Footer({color}){

    return (
        <div className={s.container}>
            <Redes/>

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
                    EF SET C2<br/>
                    Electronics<br/>
                    CorelDraw<br/>
                    Solid Works<br/>
                </p>
            </div>
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