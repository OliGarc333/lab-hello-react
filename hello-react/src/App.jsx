import logoTop from './images/ironhack-logo-xs.png';
import menuTop from './images/menu-top-xs.png';
import solved from './images/solved.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <img src={solved} alt="Small Ironhack logo" />
        <img src={menuTop} alt="small" />
        <p>Say hello to ReactJS</p>
      </div>
      <p>Testing!</p>
      <div></div>
    </div>
  );
}
export default App;
