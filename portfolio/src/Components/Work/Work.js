import React from 'react';
import s from './Work.module.css';
import coso from '../../img/coso.png';
import Dot from '../Dot/Dot';
import HenryRestaurant from '../../img/HenryRestaurant.jpg';
import Poke from '../../img/Poke.jpg';
import Api from '../../img/API.jpg';
import Footer from '../Footer/Footer';

export default function Work(){

    return (
        <div className={s.container} id='work'>
            <img src={coso} className={s.img} />
            <h1 className={s.title} >Lastest<br/>Projects</h1>
            <Dot isdiv={true}/>
            <div className={s.line}/>
            <Dot isdiv={true} isdiv2={true}/>
            <img  className={s.restaurantImg} src={HenryRestaurant}/>
            <div className={s.restaurantTitleContainer}>
                <h4 className={s.restaurantTitle} >Henry<br/>Restaurant</h4>
            </div>
            <img  className={s.pokeImg} src={Poke}/>
            <div className={s.pokeTitleContainer}>
                <h4 className={s.pokeTitle} >Post-Modern<br/>Pokedex</h4>
            </div>
            <img  className={s.apiImg} src={Api}/>
            <div className={s.apiTitleContainer}>
                <h4 className={s.apiTitle} >Recipe<br/>Api Project</h4>
            </div>
            <Footer/>
        </div>
    )
}