import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import Projects from '../pages/Projects';

interface IRoutesProps {

}

const ListRoute: React.FunctionComponent<IRoutesProps> = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter={true} initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </AnimatePresence>
  );
}

export default ListRoute;
