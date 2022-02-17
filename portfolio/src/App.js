import logo from './logo.svg';
import s from './App.module.css';
import Main from './Components/Main/Main';
import NavBar from "./Components/NavBar/NavBar";
import About from './Components/About/About';

function App() {
  return (
    <div className={s.app}>
      <NavBar/>
      <Main/>
    </div>
  );
}

export default App;
