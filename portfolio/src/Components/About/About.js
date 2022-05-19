import React from 'react'
import ParticleBackground from 'react-particle-backgrounds'
import s from './About.module.css';
import juan from '../../img/juan.jpg';

export default function About() {

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

  return (
        <div className={s.container} id='about'>
            <ParticleBackground className={s.background} settings={settings2}/>
            <div className={s.info}>
                <img className={s.img} src={juan} alt='juan' />
                <div className={s.data}>
                  <div className={s.line} />
                  <h3 className={s.name} >Juan Diego Fernández Bottarini</h3>
                  <div className={s.line} />
                  <h4 className={s.subtitle} >Full Stack Developer || Electronic Technitian</h4>
                  <div className={s.line} />
                  <p className={s.description} >
                    I am a Full Stack Developer, electronic technician and tech enthusiast
                    based in Argentina that loves getting creative to find innovative solutions
                    for any kind of assignment.
                    Plenty of experience working with software, electronics, 
                    design and in fully english speaking environments. Great at 
                    communicating ideas and teaching others as much as myself.
                    I've found joy in computers and robotics ever since I was a kid and have
                    done various projects to entertain myself with the relations between 
                    art and technology. My passions include music, gaming, training and 
                    creating. I believe curiosity makes humanity move forward.
                    I'd like to be part of a team where I can meet and learn from amazing 
                    people and develop great workflows.
                  </p>
                  <div className={s.line} />
                </div>
            </div>
        </div>
  )
}