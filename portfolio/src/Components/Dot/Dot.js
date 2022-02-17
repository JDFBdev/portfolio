import React, {useState, useEffect} from "react";
import s from './Dot.module.css';

export default function Dot(){
    const [counter, setCounter] = useState(6);
    const [color,setColor] = useState({r:173, g:0, b: 0})

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 3000);
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

    return <p className={s.dot} 
        style={{
            color: `rgb(${color.r},${color.g},${color.b})`,
            transition: "all 4s ease",
            WebkitTransition: "all 4s ease",
            MozTransition: "all 4s ease"
            }} 
            >.</p>;
}