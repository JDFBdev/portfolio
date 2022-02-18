import React, {useState} from "react";
import neon from '../../img/neon.jpg';
import s from './Main.module.css';
import Dot from '../Dot/Dot'
import DynamicHeader from "../DynamicHeader/DynamicHeader";
import About from "../About/About";
import NavBar from "../NavBar/NavBar";
import VisibilitySensor from "react-visibility-sensor";
import Work from "../Work/Work";
import { useModal } from "react-hooks-use-modal";
import { CSSTransition } from "react-transition-group";
import omg from '../../img/omg.gif';
import Redes from "../Redes/Redes";

export default function Main(){
    const [visible, setVisible] = useState(true);
    const [visible2, setVisible2] = useState(true);
    const [Modal, open] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: true
    });

    function onChange (isVisible) {
        setVisible(isVisible);
    }

    function onChange2 (isVisible) {
        setVisible2(isVisible);
    }


    return(
        <div>
            <NavBar visibleMain={visible} visibleWork={visible2}  modal={open}/>
            <div className={s.wrapper}   >
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
            <Modal>
            <CSSTransition
                in={true}
                timeout={0}
                appear={true}
                key={0}
                classNames={{ appear: s.MyClassEnterActive, enterDone: s.MyClassEnterDone}}
            >
                <div className={s.modalContainer} >
                    <h1 className={s.modalTitle} >Looks like I managed to get your attention...</h1>
                    <div className={s.modalData}>
                        <Redes/>
                        <img src={omg} className={s.gif}/>
                    </div>
                </div>
            </CSSTransition>
            </Modal>
        </div>
    )
}