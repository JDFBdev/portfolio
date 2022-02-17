import React, {useState, useEffect} from "react";
import s from './DynamicHeader.module.css';
import Typewriter from "typewriter-effect";

export default function DynamicHeader(){


    return (
        <div className={s.container}>
            <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 65,
                  }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString('Juan Diego')
                        .pauseFor(4000)
                        .deleteAll()
                        .typeString('a web developer')
                        .pauseFor(4000)
                        .deleteAll()
                        .typeString('available for you')
                        .pauseFor(4000)
                        .deleteAll()
                        .typeString('passionate for design')
                        .pauseFor(4000)
                        .deleteAll()
                        .typeString('hungry for knowledge')
                        .pauseFor(4000)
                        .deleteAll()
                        .typeString('gonna make it.')
                        .pauseFor(4000)
                        .deleteAll()
                        .start()
                        
                }}
            />
        </div>
    )
}