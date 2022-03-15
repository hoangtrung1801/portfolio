import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import "./App.css";
import InitialPage from "./components/InitialPage";
import MenuBar from "./components/MenuBar";
import Nav from "./components/Nav";
import ListRoute from "./components/Routes";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Projects from "./pages/Projects";

const App: React.FC = () => {
  const location = useLocation();
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   isFirstMount && setIsFirstMount(false);
    // }, 5000);
  }, []);

  return (
    <>
    {/* <AnimatePresence exitBeforeEnter> */}
      {/* {isFirstMount && <InitialPage isFirstMount={isFirstMount} setIsFirstMount={setIsFirstMount}/>} */}
      {/* <InitialPage isFirstMount={isFirstMount}/> */}
      <InitialPage />

      <ListRoute />
      {/* <Routes location={location} key={location.pathname}>

        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />

      </Routes> */}
        
      {/* <Link to='/'>about</Link>
      <Link to='/projects'>projects</Link>
      <Link to='/contact'>contact</Link> */}
    {/* </AnimatePresence> */}
    </>
  );
};

export default App;
