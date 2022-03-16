import { motion, Transition, useAnimation, Variants } from "framer-motion";
import React, { useState } from "react";
import MenuBar from "./MenuBar";
import MotionBox from "./motionComponents/MotionBox";
import Nav from "./Nav";
import Social from "./Social";

interface ILayoutProps {
  children: React.ReactNode;
}

const animatedLayout: Variants = {
  initial: { x: "-100vw"},
  animate: { x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  exit: {
    // scale: 0.8,
    x: "100vw",
    transition: { duration: 0.4, ease: "easeInOut", delay: 0.4 },
  },
};

const transitionLayout: Transition = {
  delay: 0.5,
  duration: 0.6,
  ease: "easeOut",
};

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  const [activeNav, setActiveNav] = useState(false);
  const controls = useAnimation();

  const toggleNav = () => {
    setActiveNav(!activeNav);
  };

  return (
    <MotionBox
      overflow="hidden"
      as={motion.div}
      // animate={controls}
      variants={animatedLayout}
      initial="initial"
      animate="animate"
      exit="exit"
      // transition={transitionLayout}
    >
      {children}
      <MenuBar activeNav={activeNav} toggleNav={toggleNav} />
      <Nav activeNav={activeNav} toggleNav={toggleNav} />
      <Social />
    </MotionBox>
  );
};

export default Layout;
