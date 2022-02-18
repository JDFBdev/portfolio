import React, {useState} from 'react';
import s from './Work.module.css';
import coso from '../../img/coso.png';
import Dot from '../Dot/Dot';
import HenryRestaurant from '../../img/HenryRestaurant.jpg';
import Poke from '../../img/Poke.jpg';
import Api from '../../img/API.jpg';
import Footer from '../Footer/Footer';
import VisibilitySensor from 'react-visibility-sensor';



export default function Work(){
    const [visible, setVisible] = useState({first: false, second: false, third: false});

    function onChangeFirst (isVisible) {
        setVisible((prev)=>({...prev, first: isVisible}));
    }

    function onChangeSecond (isVisible) {
        setVisible((prev)=>({...prev, second: isVisible}));
    }

    function onChangeThird (isVisible) {
        setVisible((prev)=>({...prev, third: isVisible}));
    }

    console.log(visible)

    return (
        <div className={s.container} id='work'>

            <img src={coso} className={s.img} />
            <h1 className={s.title} >Lastest<br/>Projects</h1>

            <Dot isdiv={true}/>
            <div className={s.line}/>
            <Dot isdiv={true} isdiv2={true}/>

            <img className={s.restaurantImg} src={HenryRestaurant} onClick={() => { window.open('https://www.linkedin.com/feed/update/urn:li:activity:6897664671508152320/','_blank')}}/>
            <VisibilitySensor onChange={onChangeFirst}>
                <div className={s.restaurantTitleContainer} style={{opacity: visible.first ? '1' : '0'}}>
                    <h4 className={s.restaurantTitle} >Henry<br/>Restaurant</h4>
                </div>
            </VisibilitySensor>

            <img  className={s.pokeImg} src={Poke} onClick={() => { window.open('https://www.linkedin.com/feed/update/urn:li:activity:6879435240272601088/','_blank')}}/>
            <VisibilitySensor onChange={onChangeSecond}>
                <div className={s.pokeTitleContainer} style={{opacity: visible.second ? '1' : '0'}}>
                    <h4 className={s.pokeTitle} >Post-Modern<br/>Pokedex</h4>
                </div>
            </VisibilitySensor>

            <img  className={s.apiImg} src={Api} onClick={() => { window.open('https://www.linkedin.com/feed/update/urn:li:activity:6878684525543604224/','_blank')}}/>
            <VisibilitySensor onChange={onChangeThird}>
                <div className={s.apiTitleContainer} style={{opacity: visible.third ? '1' : '0'}}>
                    <h4 className={s.apiTitle} >Recipe<br/>Api Project</h4>
                </div>
            </VisibilitySensor>

            <Footer/>
        </div>
    )
}