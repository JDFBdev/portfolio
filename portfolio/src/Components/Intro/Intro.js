import React, { useState, useEffect } from "react";
import s from './Intro.module.css';
import logo from '../../img/JDFB.png';
import { CSSTransition } from 'react-transition-group';
import ParticleBackground from 'react-particle-backgrounds'

const settings2 = {
    particle: {
      particleCount: 150,
      color: "#e3d5d5",
      maxSize: 2
    },
    velocity: {
      directionAngle: 180,
      directionAngleVariance: 60,
      minSpeed: 0.1,
      maxSpeed: 0.3
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.4,
      opacityTransitionTime: 10000
    }
}

export default function Intro({show}){
    const [on, setOn] = useState(true);
  
    useEffect(() => {
      setTimeout(() => setOn(false), 2500);
    }, []);

    return(
        <CSSTransition
        in={on}
        timeout={500}
        appear={false}
        unmountOnExit
        key={0}
        classNames={{ exit: s.containerExit , exitActive: s.containerDone}}
        >
        <div className={s.container} style={{display: show ? "flex" : 'none'}}>
            
            <CSSTransition
            in={on}
            timeout={700}
            appear={true}
            unmountOnExit
            key={0}
            classNames={{ appear: s.MyClassEnterActive, enterDone: s.MyClassEnterDone, exit: s.exit , exitActive: s.done}}
            >
                <img src={logo} alt='logo' className={s.logo}/>
            </CSSTransition>
            <ParticleBackground className={s.background} settings={settings2}/>
        </div>
        </CSSTransition>
    )
}