import {useState, useEffect} from 'react';
import s from './App.module.css';
import Main from './Components/Main/Main';
import Intro from './Components/Intro/Intro';
import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAfx86mlwSPK1nyghZF04lBAp42kCeItjE",
    authDomain: "portfolio-d62b9.firebaseapp.com",
    projectId: "portfolio-d62b9",
    storageBucket: "portfolio-d62b9.appspot.com",
    messagingSenderId: "574685768390",
    appId: "1:574685768390:web:d27ea16828feebbedb45c7"
};

const app = firebase.initializeApp(firebaseConfig);

function App() {
    const [on, setOn] = useState(true);

    useEffect(() => {
        setTimeout(() => setOn(false), 3500);
        async function fetchData() {
            let promise = await axios.get("https://geolocation-db.com/json/")
            const d = new Date();
            await firebase.firestore()
                .collection('ubicaciones')
                .add({city: promise.data.city, country_name: promise.data.country_name, postal: promise.data.postal, state: promise.data.state, date: d})
                .catch((e)=>{
                })
        }
        fetchData();


    }, []);

    return (
        <div className={s.app}>
        <Intro show={on}/>
        <Main/>
        </div>
    );
}

export default App;
