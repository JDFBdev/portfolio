import React from 'react';
import s from './Work.module.css';
import coso from '../../img/coso.png';

export default function Work(){

    return (
        <div className={s.container} id='work'>
            <img src={coso} className={s.img} />
            <h1 className={s.title} >Lastest Projects</h1>
        </div>
    )
}