import React, {useState} from 'react';
import s from './Work.module.css';
import coso from '../../img/coso.png';
import Dot from '../Dot/Dot';
import Footer from '../Footer/Footer';
import VisibilitySensor from 'react-visibility-sensor';
import HenryRestaurant from '../../img/HenryRestaurant.jpg';
import Poke from '../../img/Poke.jpg';
import Aramis from '../../img/aramis.png';
import Movies from '../../img/Movies.jpg';
import Conciencia from '../../img/conciencia.png';

export default function Work({setVisible2, color}){
    const [visible, setVisible] = useState({first: false, second: false, third: false, fourth: false, fifth: false});

    function onChangeFirst (isVisible) {
        setVisible((prev)=>({...prev, first: isVisible}));
        setVisible2(prev=>({...prev, first: isVisible}))
    }

    function onChangeSecond (isVisible) {
        setVisible((prev)=>({...prev, second: isVisible}));
        setVisible2(prev=>({...prev, second: isVisible}))
    }

    function onChangeThird (isVisible) {
        setVisible((prev)=>({...prev, third: isVisible}));
        setVisible2(prev=>({...prev, third: isVisible}))
    }

    function onChangeFourth (isVisible) {
        setVisible((prev)=>({...prev, fourth: isVisible}));
        setVisible2(prev=>({...prev, fourth: isVisible}))
    }

    function onChangeFifth (isVisible) {
        setVisible((prev)=>({...prev, fifth: isVisible}));
        setVisible2(prev=>({...prev, fifth: isVisible}))
    }

    function onChangeDot1 (isVisible){
        setVisible2(prev=>({...prev, dot1: isVisible}))
    }

    function onChangeDot2 (isVisible){
        setVisible2(prev=>({...prev, dot2: isVisible}))
    }

    return (
        <div className={s.container} id='work'>

            <img src={coso} className={s.img} alt='coso' />
            <h1 className={s.title} >Latest<br/>Projects</h1>
            <div className={s.dot} >
                <VisibilitySensor onChange={onChangeDot1}>
                    <Dot isdiv={true} color={color}/>
                </VisibilitySensor>
            </div>
            <div className={s.line}/>
            <div className={s.dot2}>
                <VisibilitySensor onChange={onChangeDot2}>
                    <Dot isdiv={true} isdiv2={true} color={color}/>
                </VisibilitySensor>
            </div>
            <img 
                className={s.firstImg}
                src={HenryRestaurant}
                alt='First Project'
                onClick={() => { window.open('https://henry-restaurant.vercel.app/','_blank')}}
            />

            <VisibilitySensor partialVisibility={true} onChange={onChangeFirst}>
                <div className={s.firstTitleContainer} style={{transform: visible.first ? 'scale(1)' : 'scale(1,.1)'}}>
                    <h4 translate="no" className={ visible.first ? s.firstTitle2 : s.firstTitle1} style={{opacity: visible.first ? '1' : '0'}} >Henry<br/>Restaurant</h4>
                </div>
            </VisibilitySensor>

            <img 
                className={s.secondImg}
                src={Poke}
                alt='Second Project'
                onClick={() => { window.open('https://post-modern-pokedex.vercel.app/','_blank')}}
            />

            <VisibilitySensor partialVisibility={true} onChange={onChangeSecond}>
                <div className={s.secondTitleContainer} style={{transform: visible.second ? 'scale(1)' : 'scale(1,.1)'}} >
                    <h4 translate="no" className={ visible.second ? s.secondTitle2 : s.secondTitle1} style={{opacity: visible.second ? '1' : '0'}} >Post-Modern<br/>Pokedex</h4>
                </div>
            </VisibilitySensor>

            <img
                className={s.thirdImg}
                src={Conciencia}
                alt='Third Project'
                onClick={() => { window.open('https://conciencia-verde-sandbox.vercel.app/','_blank')}}
            />

            <VisibilitySensor partialVisibility={true} onChange={onChangeThird}>
                <div className={s.thirdTitleContainer} style={{transform: visible.third ? 'scale(1)' : 'scale(1,.1)'}}>
                    <h4 translate="no" className={ visible.third ? s.thirdTitle2 : s.thirdTitle1} style={{opacity: visible.third ? '1' : '0'}} >Conciencia<br/>Verde</h4>
                </div>
            </VisibilitySensor>

            <img
                className={s.fourthImg}
                src={Movies}
                alt='Fourth Project'
                onClick={() => { window.open('https://ivealreadyseenit.vercel.app/','_blank')}}
            />

            <VisibilitySensor partialVisibility={true} onChange={onChangeFourth}>
                <div className={s.fourthTitleContainer} style={{transform: visible.fourth ? 'scale(1)' : 'scale(1,.1)'}}>
                    <h4 translate="no" className={ visible.fourth ? s.fourthTitle2 : s.fourthTitle1} style={{opacity: visible.fourth ? '1' : '0'}} >I've Already<br/>Seen It</h4>
                </div>
            </VisibilitySensor>

            <img
                className={s.fifthImg}
                src={Aramis}
                alt='Fifth Project'
                onClick={() => { window.open('https://libreriaaramis.vercel.app/','_blank')}}
            />

            <VisibilitySensor partialVisibility={true} onChange={onChangeFifth}>
                <div className={s.fifthTitleContainer} style={{transform: visible.fifth ? 'scale(1)' : 'scale(1,.1)'}}>
                    <h4 translate="no" className={ visible.fifth ? s.fifthTitle2 : s.fifthTitle1} style={{opacity: visible.fifth ? '1' : '0'}} >Libreria<br/>Aramis</h4>
                </div>
            </VisibilitySensor>

            <div className={s.footer}>
                <Footer color={color}/>
            </div>
        </div>
    )
}
