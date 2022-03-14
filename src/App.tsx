import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import MenuBar from "./components/MenuBar";
import Nav from "./components/Nav";
import Social from "./components/Social";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Projects from "./pages/Projects";

const App: React.FC = () => {
  const [activeNav, setActiveNav] = React.useState<boolean>(false);
  const toggleNav = () => {
    setActiveNav(!activeNav);
  };
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route caseSensitive={true} path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
      <MenuBar activeNav={activeNav} toggleNav={toggleNav} />
      <Nav activeNav={activeNav} toggleNav={toggleNav} />
      <Social />
    </AnimatePresence>
  );
};

export default App;
