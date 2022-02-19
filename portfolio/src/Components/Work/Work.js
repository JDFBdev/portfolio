import React, {useState} from 'react';
import s from './Work.module.css';
import coso from '../../img/coso.png';
import Dot from '../Dot/Dot';
import Footer from '../Footer/Footer';
import VisibilitySensor from 'react-visibility-sensor';
import HenryRestaurant from '../../img/HenryRestaurant.jpg';
import Poke from '../../img/Poke.jpg';
import Api from '../../img/API.jpg';
import RestaurantGif from '../../img/RestaurantGif.gif';
import PokeGif from '../../img/PokeGif.gif';
import ApiGif from '../../img/ApiGif.gif';

export default function Work({setVisible2}){
    const [visible, setVisible] = useState({first: false, second: false, third: false});
    const [images, setImages] = useState({first: HenryRestaurant, second: Poke, third: Api});

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
        setVisible2(prev=>({...prev, first: isVisible}))
    }

    function onChangeDot1 (isVisible){
        setVisible2(prev=>({...prev, dot1: isVisible}))
    }

    function onChangeDot2 (isVisible){
        setVisible2(prev=>({...prev, dot2: isVisible}))
    }

    return (
        <div className={s.container} id='work'>

            <img src={coso} className={s.img} />
            <h1 className={s.title} >Lastest<br/>Projects</h1>
            <VisibilitySensor onChange={onChangeDot1}>
                <Dot isdiv={true}/>
            </VisibilitySensor>
            <div className={s.line}/>

            <VisibilitySensor onChange={onChangeDot2}>
                <Dot isdiv={true} isdiv2={true}/>
            </VisibilitySensor>


            <img 
                className={s.restaurantImg}
                onMouseEnter={()=>setImages(prev=>({...prev, first: RestaurantGif}))} 
                onMouseLeave={()=>setImages(prev=>({...prev, first: HenryRestaurant}))} 
                src={images.first}
                alt='Henry Restaurant'
                onClick={() => { window.open('https://www.linkedin.com/feed/update/urn:li:activity:6897664671508152320/','_blank')}}
            />

            <VisibilitySensor partialVisibility={true} onChange={onChangeFirst}>
                <div className={s.restaurantTitleContainer} style={{transform: visible.first ? 'scale(1)' : 'scale(1,.1)'}}>
                    <h4 className={ visible.first ? s.restaurantTitle2 : s.restaurantTitle1} style={{opacity: visible.first ? '1' : '0'}} >Henry<br/>Restaurant</h4>
                </div>
            </VisibilitySensor>

            <img 
                className={s.pokeImg}
                onMouseEnter={()=>setImages(prev=>({...prev, second: PokeGif}))} 
                onMouseLeave={()=>setImages(prev=>({...prev, second: Poke}))} 
                src={images.second}
                alt='Post-Moden Pokedex'
                onClick={() => { window.open('https://www.linkedin.com/feed/update/urn:li:activity:6879435240272601088/','_blank')}}/>

            <VisibilitySensor partialVisibility={true} onChange={onChangeSecond}>
                <div className={s.pokeTitleContainer} style={{transform: visible.second ? 'scale(1)' : 'scale(1,.1)'}} >
                    <h4 className={ visible.second ? s.pokeTitle2 : s.pokeTitle1} style={{opacity: visible.second ? '1' : '0'}} >Post-Modern<br/>Pokedex</h4>
                </div>
            </VisibilitySensor>

            <img
                className={s.apiImg}
                onMouseEnter={()=>setImages(prev=>({...prev, third: ApiGif}))}
                onMouseLeave={()=>setImages(prev=>({...prev, third: Api}))}
                src={images.third}
                alt='Recipe Api'
                onClick={() => { window.open('https://www.linkedin.com/feed/update/urn:li:activity:6878684525543604224/','_blank')}}/>

            <VisibilitySensor partialVisibility={true} onChange={onChangeThird}>
                <div className={s.apiTitleContainer} style={{transform: visible.third ? 'scale(1)' : 'scale(1,.1)'}}>
                    <h4 className={ visible.third ? s.apiTitle2 : s.apiTitle1} style={{opacity: visible.third ? '1' : '0'}} >Recipe<br/>Api Project</h4>
                </div>
            </VisibilitySensor>

            <Footer/>
        </div>
    )
}