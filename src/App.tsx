import React from 'react';
import MenuBar from './components/MenuBar';
import Nav from './components/Nav';
import Home from './pages/Home';

const App: React.FC = () => {

  const [activeNav, setActiveNav] = React.useState<boolean>(false);
  const toggleNav = () => {
    setActiveNav(!activeNav);
  }

  return (
    <>
      <Home />
      <MenuBar activeNav={activeNav} toggleNav={toggleNav} />
      <Nav activeNav={activeNav} />
    </>
  )
}

export default App;