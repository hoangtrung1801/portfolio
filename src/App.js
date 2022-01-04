import { useState } from 'react';
import './App.css';
import MenuBar from './components/MenuBar';
import Nav from './components/Nav';
import Home from './pages';

function App() {
  const [activeNav, setActiveNav] = useState(false);
  const toggleNav = () => {
    setActiveNav(!activeNav);
  }
  return (
    <div className="App">
      <MenuBar toggleNav={toggleNav} activeNav={activeNav}/>
      <Nav activeNav={activeNav}/>
      <Home/>
    </div>
  );
}

export default App;
