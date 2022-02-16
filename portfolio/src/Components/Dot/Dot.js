import React from "react";
import s from './Dot.module.css';

export default function Dot(){
    const [counter, setCounter] = React.useState(7);
    const [color,setColor] = React.useState({r:255, g:0, b: 0})

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 5000);
        counter == 0 && setCounter(7)
    }, [counter]);



    return <p className={s.dot} style={{color: `rgb${color.r},${color.g},${color.b})`}} >.</p>;
}