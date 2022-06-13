import React, {useState, useEffect} from "react";
import neon from '../../img/neon.jpg';
import s from './Main.module.css';
import Dot from '../Dot/Dot'
import DynamicHeader from "../DynamicHeader/DynamicHeader";
//import About from "../About/About";
import NewAbout from '../NewAbout/NewAbout';
import NavBar from "../NavBar/NavBar";
import VisibilitySensor from "react-visibility-sensor";
import Work from "../Work/Work";
import { useModal } from "react-hooks-use-modal";
import { CSSTransition } from "react-transition-group";
import omg from '../../img/omg.gif';
import Redes from "../Redes/Redes";

export default function Main(){
    const [visible, setVisible] = useState(true); // Let the navbar know if it has to display dynamic header
    const [visible2, setVisible2] = useState({dot1: false, first: false, second: false, third: false, fourth: false, fifth: false , dot2: false}); // Let the navbar know if it has to be dark text
    const [counter, setCounter] = useState(6);
    const [color,setColor] = useState({r:173, g:0, b: 0})
    const [Modal, open] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: true
    });

    function onChange (isVisible) {
        setVisible(isVisible);
    }

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 2000);
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

    return(
        <div>
            <NavBar visibleMain={visible} visibleWork={visible2}  modal={open} color={color}/>
            <div className={s.wrapper}>
                <div id='main'  className={s.container}>
                    <img className={s.img} src={neon} alt='Neo Tokyo' />
                    <div className={s.titleContainer}>
                        <h1 translate="no" className={s.title}>
                            <div className={s.hello} >
                                Hello<Dot color={color} />
                            </div>
                                I am
                            <div>
                                <VisibilitySensor partialVisibility={true} onChange={onChange}>
                                    <DynamicHeader/>
                                </VisibilitySensor>
                            </div>
                        </h1>
                    </div>
                </div>
                <NewAbout open={open}/>
                {/* <About/> */}
                <Work setVisible2={setVisible2} color={color} />
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
                        <img src={omg} className={s.gif} alt='omg'/>
                    </div>
                </div>
            </CSSTransition>
            </Modal>
        </div>
    )
}