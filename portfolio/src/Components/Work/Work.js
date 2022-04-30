import React, {useState} from 'react';
import s from './Work.module.css';
import coso from '../../img/coso.png';
import Dot from '../Dot/Dot';
import Footer from '../Footer/Footer';
import VisibilitySensor from 'react-visibility-sensor';
import HenryRestaurant from '../../img/HenryRestaurant.jpg';
import Poke from '../../img/Poke.jpg';
import Api from '../../img/API.jpg';
import HenryRestaurantGif from '../../img/RestaurantGif.gif';
import PokeGif from '../../img/PokeGif.gif';
import ApiGif from '../../img/ApiGif.gif';
import Movies from '../../img/Movies.jpg';
import Conciencia from '../../img/conciencia.png';

export default function Work({setVisible2, color}){
    const [visible, setVisible] = useState({first: false, second: false, third: false, fourth: false, fifth: false});
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
            <h1 className={s.title} >Lastest<br/>Projects</h1>
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
                className={s.restaurantImg}
                onMouseEnter={()=>setImages(prev=>({...prev, first: HenryRestaurantGif}))} 
                onMouseLeave={()=>setImages(prev=>({...prev, first: HenryRestaurant}))} 
                src={images.first}
                alt='Henry Restaurant'
                onClick={() => { window.open('https://www.linkedin.com/feed/update/urn:li:activity:6897664671508152320/','_blank')}}
            />

            <VisibilitySensor partialVisibility={true} onChange={onChangeFirst}>
                <div className={s.restaurantTitleContainer} style={{transform: visible.first ? 'scale(1)' : 'scale(1,.1)'}}>
                    <h4 translate="no" className={ visible.first ? s.restaurantTitle2 : s.restaurantTitle1} style={{opacity: visible.first ? '1' : '0'}} >Henry<br/>Restaurant</h4>
                </div>
            </VisibilitySensor>

            <img 
                className={s.pokeImg}
                onMouseEnter={()=>setImages(prev=>({...prev, second: PokeGif}))} 
                onMouseLeave={()=>setImages(prev=>({...prev, second: Poke}))} 
                src={images.second}
                alt='Post-Moden Pokedex'
                onClick={() => { window.open('https://post-modern-pokedex.vercel.app/','_blank')}}/>

            <VisibilitySensor partialVisibility={true} onChange={onChangeSecond}>
                <div className={s.pokeTitleContainer} style={{transform: visible.second ? 'scale(1)' : 'scale(1,.1)'}} >
                    <h4 translate="no" className={ visible.second ? s.pokeTitle2 : s.pokeTitle1} style={{opacity: visible.second ? '1' : '0'}} >Post-Modern<br/>Pokedex</h4>
                </div>
            </VisibilitySensor>

            <img
                className={s.apiImg}
                src={Conciencia}
                alt='Recipe Api'
                onClick={() => { window.open('https://conciencia-verde-sandbox.vercel.app/','_blank')}}/>

            <VisibilitySensor partialVisibility={true} onChange={onChangeThird}>
                <div className={s.apiTitleContainer} style={{transform: visible.third ? 'scale(1)' : 'scale(1,.1)'}}>
                    <h4 translate="no" className={ visible.third ? s.apiTitle2 : s.apiTitle1} style={{opacity: visible.third ? '1' : '0'}} >Conciencia<br/>Verde</h4>
                </div>
            </VisibilitySensor>

            <img
                className={s.movieImg}
                src={Movies}
                alt='Moives Api'
                onClick={() => { window.open('https://ivealreadyseenit.vercel.app/','_blank')}}/>

            <VisibilitySensor partialVisibility={true} onChange={onChangeFourth}>
                <div className={s.movieTitleContainer} style={{transform: visible.fourth ? 'scale(1)' : 'scale(1,.1)'}}>
                    <h4 translate="no" className={ visible.fourth ? s.movieTitle2 : s.movieTitle1} style={{opacity: visible.fourth ? '1' : '0'}} >I've Already<br/>Seen It</h4>
                </div>
            </VisibilitySensor>

            <img
                className={s.concienciaImg}
                onMouseEnter={()=>setImages(prev=>({...prev, third: ApiGif}))}
                onMouseLeave={()=>setImages(prev=>({...prev, third: Api}))}
                src={images.third}
                alt='Conciencia'
                onClick={() => { window.open('https://mealswipe.vercel.app/','_blank')}}/>

            <VisibilitySensor partialVisibility={true} onChange={onChangeFifth}>
                <div className={s.concienciaTitleContainer} style={{transform: visible.fifth ? 'scale(1)' : 'scale(1,.1)'}}>
                    <h4 translate="no" className={ visible.fifth ? s.concienciaTitle2 : s.concienciaTitle1} style={{opacity: visible.fifth ? '1' : '0'}} >Meal<br/>Swipe!</h4>
                </div>
            </VisibilitySensor>

            <div className={s.footer}>
                <Footer color={color}/>
            </div>
        </div>
    )
}