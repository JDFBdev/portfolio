import s from './App.module.css';
import Main from './Components/Main/Main';
import NavBar from "./Components/NavBar/NavBar";


function App() {
  return (
    <div id='main' className={s.app}>
      <Main/>
    </div>
  );
}

export default App;
