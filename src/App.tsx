import { Box } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import MenuBar from "./components/MenuBar";
import Nav from "./components/Nav";
import Social from "./components/Social";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App: React.FC = () => {
  const [activeNav, setActiveNav] = React.useState<boolean>(false);
  const toggleNav = () => {
    setActiveNav(!activeNav);
  };

  return (
    <Box className="main">
      <Home />
      <Projects />
      <Contact />

      <MenuBar activeNav={activeNav} toggleNav={toggleNav} />
      <Nav activeNav={activeNav} toggleNav={toggleNav} />
      <Social />
    </Box>
  );
};

export default App;
