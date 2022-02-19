import s from './App.module.css';
import Main from './Components/Main/Main';
import {useEffect} from 'react';

function App() {

  useEffect(()=>{
    console.log(`This is an Easter egg`)
  },[])

  return (
    <div className={s.app}>
      <Main/>
    </div>
  );
}

export default App;
