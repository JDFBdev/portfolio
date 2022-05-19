import React from 'react'
import { CSSTransition } from 'react-transition-group';
import s from './Transition.module.css';

export default function Transition({children, timeout}){

  return (
    <CSSTransition
      in={true}
      timeout={timeout || 0}
      appear={true}
      key={0}
      classNames={{ appear: s.MyClassEnterActive, enterDone: s.MyClassEnterDone }}
    >
        {children}
    </CSSTransition>
  )
}

