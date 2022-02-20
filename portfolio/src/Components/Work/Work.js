import React, {useState} from 'react';
import s from './Work.module.css';
import coso from '../../img/coso.png';
import Dot from '../Dot/Dot';
import Footer from '../Footer/Footer';
import VisibilitySensor from 'react-visibility-sensor';
import HenryRestaurant from '../../img/HenryRestaurant.jpg';
import Poke from '../../img/Poke.jpg';
import Api from '../../img/API.jpg';

export default function Work({setVisible2, color}){
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
                <Dot isdiv={true} color={color}/>
            </VisibilitySensor>
            <div className={s.line}/>

            <VisibilitySensor onChange={onChangeDot2}>
                <Dot isdiv={true} isdiv2={true} color={color}/>
            </VisibilitySensor>


            <img 
                className={s.restaurantImg}
                onMouseEnter={()=>setImages(prev=>({...prev, first: 'https://lh3.googleusercontent.com/iZPD31Ec84FjW0fOYuhj8jAkO2bPjrwOeBOaTW3pCitfEiTff2XJfgzVCY8mj4PEloL2adAImKL03zr0svhVrJtiebqcWdc5sFJT2fgdDGHwTiRzgJ-11eF2vj6RRPCzEvc5t8W5AEOBme50fpTF5Wtjnarqgw2WcSKvpYVULbOeKlA0sGgdR6SjzsjFxJRofeNPM2n2u-gOHRrSNdyNpxVXVhI2Ve4BMyXJkc4suqXpZrcrb3_6BKsaECHGBnv8YqPvUP4W1HZv8lPs59JEEZWJboGWU0NCt_DBm_CVwWkFv3w5VC3EM8V-TfOZV4sjR3rkHtDYIDwtWH1DK4frJ6pQwpPi9E0Ae02eIl29rM2FtLbUbyO5yRvpE1vdsRBfmkpYfovNoSTK03dKUayqhGsFlZkL9-T6Q1-MZJKQGWvgeuQfmgV8uMYrR3OEl00j2HOmH5JZB5ZzggmJPeBZ-bLJktormyypvjozWNe6wkA_mzvu2473v40goLOf5-DTv7GY6eguG_4L1SYtf_ShYRfteioiIyyXFouZOmoPPDmD9OBC5Wfu9w2kGocCyYj7CacUdunpGQGjbw6eux6pfJBstepC5yypUOk7mP8JBuLfcbfEASPvtq7ZrRDb2TZImZQ3o-1tT_gMexqZQ2a8TVspXzc1NrFqgqWNWDxfwq6DqqOJFMRIOFHyi_MEZq2XaWaucpomtf5H-LWdSkb4_NJL=w1080-h722-no'}))} 
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
                onMouseEnter={()=>setImages(prev=>({...prev, second: 'https://lh3.googleusercontent.com/oHIy5SMacZEN3pJwdvEPpYALvE7fT2WiL-gCOev1MTWMDARrLlf9QnDnD1uDc0s7D9v_pmvChunbixNlpv0kBmTBtWMkxIimD8MkAU6xnStZBjjhZCk11T9At93AVidemgfSUeuVhL5loFFnjCe4p9KeQd55mT-HH-OUzG37Sc-7Cofv8e8OmJYsPCnMSxb5WuOfucUFUBFZQbwq_kOt0unWbMVTBPpjHFwwwwrNmBEZNDiDw7mcaswD0GLS8GawUWVxHXZPEEyDopYXq11xPXPglnVUjUcQdkILGjD6PtRSXO7fiMKPN4PDQITL4xdP91YE3LM8posTaQgDyoRJibRzoenaCiDiojMuD_Kqc6_7GknMAWE8w19WU3UncPZyGr210otli1RK7kVvQ_6EPfiJOz6bz2YnSlUziUijPVOVSkkC0cZ0NBpdPFau32dxzzHj2B39LMx-cerpjDbXxsEJjX4vRf-k4SLnR0L9k0q_e1FrVwX3TEa8teG8yRszAQzNdcgwrKo13IoKZjy2EyhcikgcidYCIH561QbJ07mJUyytm0jl5dH5It_GEJ21Yi5ktVbem1Dh5Z2ZW9h_Vl9W_slsOx7k1IEbPUeIts2FqZsBJbEuoFTuhzsjKJAj_JFWtIM0RVLQYpHOSvkpDnOAkv2OTD0wXroJ8CsQ9D34gLypCgDSoXzG_6-lqFmI-eH6vmLJWokCllWOMTYZI93V=w1080-h722-no?authuser=0'}))} 
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
                onMouseEnter={()=>setImages(prev=>({...prev, third: 'https://lh3.googleusercontent.com/qKCZZ1MFW5dpclC8hJIzwj87zL7Fu_6GKBrY720uoGXc-XTS7d2iSrrbl0wB7Ro7lBYDjntrPPFogkxBsfI7NL1XZakVpHI-0rgnpCSyV9hizuHK0jKRsDTFKUKW_frcFl6J8rGo67DeUvNPuoxZjKFxdPdBZMeILOGRLRN4_IzQhhQ1P2dLH8MwTaPeK1Ok_PZZ9GD-YTG6sfLmSmWyJ4BBELjowPQd1Iz5W8YxFvMdHU7Jf82qEgmtumHxnoxfSRVz7erzmliZCV514LYxbR0pFkWUQxmT1qODyNsVbTupheqtoaAmcJpz98OZ2yaEOKwlTAI-zURKeBdfOO3-rT7mlbMHGCGbTX4UZpSAYeC61Jy4IOHOISb0W3Vzqmv1eOYmX0U_PatUnJyfNlS6IORlOzL1J494wtKzaj8ePb2X5RGIo_tnsJQNE2FbqHqv-WvTTPHFjtQQWqd2Yz3A6CqnRGMSLIJdcsm5u6zpVYVDr7F6kQyGut8UnAQSp-S9yh8gL8TzRLQPwdkGdm24YHyBV4Yob8YxAFxczuCsbjX_K8UIOwnouoc7kg9w-gvCO6XRYYzW6xtWRR5ZtwO-PJHHeZ-dgi2WUWTwFHCJY2cfC4Aqropi7sSLeQmXqN8xRCXrQT6YkHCZKN4UgCIbspBe5OdrEdrAm1ZzyPoW9xuZY_7geB_EG-X4LpVTVy8diR1sMt8WhrLfgOnvGgWiX93K=w1080-h722-no?authuser=0'}))}
                onMouseLeave={()=>setImages(prev=>({...prev, third: Api}))}
                src={images.third}
                alt='Recipe Api'
                onClick={() => { window.open('https://www.linkedin.com/feed/update/urn:li:activity:6878684525543604224/','_blank')}}/>

            <VisibilitySensor partialVisibility={true} onChange={onChangeThird}>
                <div className={s.apiTitleContainer} style={{transform: visible.third ? 'scale(1)' : 'scale(1,.1)'}}>
                    <h4 className={ visible.third ? s.apiTitle2 : s.apiTitle1} style={{opacity: visible.third ? '1' : '0'}} >Recipe<br/>Api Project</h4>
                </div>
            </VisibilitySensor>

            <Footer color={color}/>
        </div>
    )
}