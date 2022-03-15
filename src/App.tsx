import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import InitialPage from "./components/InitialPage";
import MenuBar from "./components/MenuBar";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Projects from "./pages/Projects";

const App: React.FC = () => {
  const [activeNav, setActiveNav] = useState(false);
  const location = useLocation();
  const [isFirstMount, setIsFirstMount] = useState(true);

  const toggleNav = () => {
    setActiveNav(!activeNav);
  };

  useEffect(() => {
    // setTimeout(() => {
    //   isFirstMount && setIsFirstMount(false);
    // }, 3000);
  }, []);

  return (
    <>
    <AnimatePresence exitBeforeEnter>
      {isFirstMount && <InitialPage setIsFirstMount={setIsFirstMount}/>}
      {/* <InitialPage isFirstMount={isFirstMount}/> */}

      <Routes location={location} key={location.pathname}>

        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />

      </Routes>
        <MenuBar activeNav={activeNav} toggleNav={toggleNav} />
        <Nav activeNav={activeNav} toggleNav={toggleNav} />
        {/* <Social />  */}
      {/* <Link to='/'>about</Link>
      <Link to='/projects'>projects</Link>
      <Link to='/contact'>contact</Link> */}
    </AnimatePresence>
    </>
  );
};

export default App;
