import React from "react";
import s from './DynamicHeader.module.css';
import Typewriter from "typewriter-effect";

export default function DynamicHeader(){


    return (
        <div translate="no" className={s.container}>
            <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 65,
                  }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString('Juan Diego')
                        .pauseFor(5000)
                        .deleteAll()
                        .typeString('a web developer')
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString('looking for new challenges')
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString('passionate for design')
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString('hungry for knowledge')
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString('gonna make it.')
                        .pauseFor(2500)
                        .deleteAll()
                        .start()
                        
                }}
            />
        </div>
    )
}