import { Box } from '@chakra-ui/react';
import React from 'react';
import MenuBar from './components/MenuBar';
import Nav from './components/Nav';
import { UseEffectScroll } from './hooks/UseEffectScroll';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

const App: React.FC = () => {

  const [activeNav, setActiveNav] = React.useState<boolean>(false);
  const toggleNav = () => {
    setActiveNav(!activeNav);
  }

  return (
    // <UseEffectScroll>
      <Box className="main">
        <Home />
        <Projects />
        <Contact />

        <MenuBar activeNav={activeNav} toggleNav={toggleNav} />
        <Nav activeNav={activeNav} toggleNav={toggleNav} />
      </Box>
    // </UseEffectScroll>
  );
}

export default App;