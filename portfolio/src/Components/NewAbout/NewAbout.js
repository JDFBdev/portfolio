import React, { useState, useEffect } from 'react'
import ParticleBackground from 'react-particle-backgrounds'
import s from './NewAbout.module.css';
import nav_slider from './Underline.js';
import juan from '../../img/juan.jpg';
import Transition from '../Transition/Transition';
import VoxRoom from '../VoxRoom/VoxRoom';
import VoxJuan from '../VoxJuan/VoxJuan';
import Earth from '../Earth/Earth';

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

export default function NewAbout({open}) {
  const [state, setState] = useState('WHO');
  const [render, setRender] = useState(true);
  let menu = document.getElementsByClassName(s.ul);
  let menu_slider_click = document.getElementById('nav_slide_click');


  useEffect(()=>{
    handleClick();
  })

  const handleClick = function(){
    nav_slider( menu[0], function( el, width, tempMarginLeft ) {
      el.onclick = () => {
          menu_slider_click.style.width =  width + 1.5 + '%';                    
          menu_slider_click.style.marginLeft = tempMarginLeft + -108.3 + '%';   // toca esto para ver donde inicia 
        }
    });
  }

  const handleSlider = function(e){
    setRender(false);
    setState(e);
    if(e === 'WHO' || e === 'WHY' || e === 'WHERE'){
      setTimeout(() => setRender(true), 250);
    } else {
      setRender(false);
    }
  }

  return (
        <div className={s.container} id='about'>
            <ParticleBackground className={s.background} settings={settings2}/>
            <div className={s.info}>
              <ul className={s.ul}>
                <li className={s.li} onClick={()=>{handleClick(); handleSlider('WHO');}} key='WHO'>WHO</li>
                <li className={s.li} onClick={()=>{handleClick(); handleSlider('WHY');}} key='WHY'>WHY</li>
                <li className={s.li} onClick={()=>{handleClick(); handleSlider('HOW');}} key='HOW'>HOW</li>
                <li className={s.li} onClick={()=>{handleClick(); handleSlider('WHERE');}} key='WHERE'>WHERE</li>
                <li className={s.li} onClick={()=>{handleClick(); handleSlider('WHEN');}} key='WHEN'>WHEN</li>
                <hr className={s.hr} id="nav_slide_click"/> 
              </ul>

              {
                state === 'WHO' &&
                <Transition>
                  <div className={s.who}>
                    <div className={s.juan3d}>
                      {
                        render ?
                        <VoxJuan/> :
                        null
                      }
                    </div>
                    <img className={s.img} src={juan} alt='juan' />
                    <div className={s.whoInfo}>
                      <div className={s.whoHeader}>
                        <h3 className={s.whoTitle} >Juan Diego Fernández Bottarini</h3>
                        <div className={s.line}/>
                      </div>
                      <h4 className={s.whoSubtitle} >Full Stack Developer || Electronic Technician</h4>
                      <p className={s.whoText}>
                        I love crafting digital experiences with my two greatest
                        passions: <span style={{color: '#C91865', fontWeight:'bold'}}>Art</span> and <span style={{color: '#C91865', fontWeight:'bold'}}>technology</span>.<br/>
                        <br/>
                        I am seriously <span style={{color: '#C91865', fontWeight:'bold'}}>enthusiastic</span> about UI effects, animations and creating
                        intuitive  <span style={{color: '#C91865', fontWeight:'bold'}}>user experiences</span>.<br/>
                        <br/>
                        The <span style={{color: '#C91865', fontWeight:'bold'}}>web</span> has become humanity’s most powerful achievement.
                        Together we can <span style={{color: '#C91865', fontWeight:'bold'}}>make it better</span>.
                      </p>
                    </div>
                  </div>
                </Transition>
              }

              {
                state === 'WHY' &&
                <div className={s.why}>  
                  {
                    render ?
                    <Earth/> :
                    <div className={s.loadingRoom}/>
                  }
                </div>
              }

              {
                state === 'HOW' &&
                <Transition>
                  <div className={s.how}> 
                    <h3 className={s.howTitle}>With the magic of <span style={{color: '#C91865', fontWeight:'bold'}}>web development</span>.<br/>These are my tools.</h3>
                    <p className={s.howSubtitle}>Click to stack the stack. Doubleclick to reset.</p>
                    <iframe className={s.stackGame} title="StackGame" src='https://stack-game-kappa.vercel.app/'></iframe>
                  </div>
                </Transition>
              }

              {
                state === 'WHERE' &&
                <Transition>
                  <div className={s.where}>
                    <h3 className={s.howTitle}>IN A <span style={{color: '#C91865', fontWeight:'bold'}}>GALAXY</span> FAR, FAR AWAY... Actually just <span style={{color: '#C91865', fontWeight:'bold'}}>Argentina</span></h3>
                    <p className={s.howSubtitle}>This is my workspace, where my journey begins.</p>
                    {
                      render ?
                      <VoxRoom/> :
                      <div className={s.loadingRoom}/>
                    } 
                  </div>
                </Transition>
              }

              {
                state === 'WHEN' &&
                <Transition>
                  <div className={s.when}>
                    <div className={s.whenData}>
                      <h3 className={s.whenTitle}>RIGHT NOW</h3>
                      <button className={s.whenBtn} onClick={open}>CONTACT</button>
                    </div>
                  </div>
                </Transition>
              }

            </div>
        </div>
  )
}