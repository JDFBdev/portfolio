import React, {useState, useEffect} from "react";
import s from './DynamicHeader.module.css';
import Typical from 'react-typical';

export default function DynamicHeader(){

    return (
        <div className={s.container}>
            <Typical
            loop={Infinity}
            wrapper='b'
            steps={[
                'Juan Diego', 5000,
                'a web developer', 4000,
                'available for you', 4000,
                'passionate for design', 4000,
                'hungry for knowledge', 4000,
                'gonna make it.', 4000
            ]}
            />
        </div>
    )
}