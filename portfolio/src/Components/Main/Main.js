import React, {useState} from "react";
import neon from '../../img/neon.jpg';
import s from './Main.module.css';
import Dot from '../Dot/Dot'
import DynamicHeader from "../DynamicHeader/DynamicHeader";
import About from "../About/About";
import NavBar from "../NavBar/NavBar";
import VisibilitySensor from "react-visibility-sensor";
import Work from "../Work/Work";

export default function Main(){
    const [visible, setVisible] = useState(true);
    const [visible2, setVisible2] = useState(true);

    function onChange (isVisible) {
        setVisible(isVisible);
    }

    function onChange2 (isVisible) {
        setVisible2(isVisible);
    }

    console.log(visible2)

    return(
        <div>
            <NavBar visibleMain={visible} visibleWork={visible2}/>
            <div className={s.wrapper} id='main'  >
                <div className={s.container}>
                    <img className={s.img} src={neon} />
                    <div  className={s.titleContainer}>
                        <h1 className={s.title}>
                            <div className={s.hello} >
                                Hello<Dot/>
                            </div>
                                I am
                            <div>
                                <VisibilitySensor onChange={onChange}>
                                    <DynamicHeader/>
                                </VisibilitySensor>
                            </div>
                        </h1>
                    </div>
                </div>
                <About/>
                <VisibilitySensor onChange={onChange2}>
                    <Work/>
                </VisibilitySensor>
            </div>
        </div>
    )
}