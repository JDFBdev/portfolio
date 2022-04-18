import {useState, useEffect} from 'react';
import s from './App.module.css';
import Main from './Components/Main/Main';
import Intro from './Components/Intro/Intro';

function App() {
  const [on, setOn] = useState(true);

  useEffect(() => {
    setTimeout(() => setOn(false), 3500);
  }, []);

  return (
    <div className={s.app}>
      <Intro show={on}/>
      <Main/>
    </div>
  );
}

export default App;
