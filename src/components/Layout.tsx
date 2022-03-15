import { motion, Transition, Variants } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import MenuBar from './MenuBar';
import MotionBox from './motionComponents/MotionBox';
import Nav from './Nav';
import Social from './Social';

interface ILayoutProps {
  children: React.ReactNode
}

const animatedLayout: Variants = {
  initial: {x: '-100vw'},
  animate: {x: 0},
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: {duration: 0.8, ease: 'easeOut'}
  }
}

const transitionLayout: Transition = {
  duration: 0.6,
  ease: 'easeInOut'
}

const Layout: React.FunctionComponent<ILayoutProps> = ({children}) => {
  const [activeNav, setActiveNav] = useState(false);

  const toggleNav = () => {
    setActiveNav(!activeNav);
  };

  useEffect(() => {
    console.log("render");
  }, [])

  return (
    <MotionBox
      overflow="hidden"
      as={motion.div}
      variants={animatedLayout}
      initial='initial'
      animate="animate"
      exit="exit"
      transition={transitionLayout}
    >
      {children}
      <MenuBar activeNav={activeNav} toggleNav={toggleNav} />
      <Nav activeNav={activeNav} toggleNav={toggleNav} />
      <Social />
    </MotionBox>
  );
}

export default Layout;