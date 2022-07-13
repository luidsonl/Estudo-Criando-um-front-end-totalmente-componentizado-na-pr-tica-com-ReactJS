import './App.css';
import Introduction from './components/Introduction';
import Logo from "./components/Logo.js"
import Menu from "./components/Menu.js"
import Quotes from './components/Quotes';


function App() {
  return (
    <div className="App">
      <Menu/>
      <Logo/>
      <div className='container'>
        <Introduction/>
        <span></span>
        <Quotes/>
      </div>

      
    </div>
  );
}

export default App;
