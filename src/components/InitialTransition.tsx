import { Box, Center } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import React from "react";

interface InitialTransitionProps {}

const blackBox: Variants = {
  initial: {
    height: "100vh",
    top: 0
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer: Variants = {
  initial: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: -100, 
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};

const text: Variants = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export default function InitialTransition({}: InitialTransitionProps) {
  return (
    <Center
      id="initialWrapper"
      position="absolute"
      alignItems="flex-end"
      maxW='100%'
      h='100vh'
      fontFamily='Rubik, san-serif'
    >
      <Center
        as={motion.div}
        key="initialPage"
        position="relative"
        zIndex="100"
        w="100vw"
        bgColor="black"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => {
          document.body.style.overflow = "hidden";
        }}
        onAnimationComplete={() => {
          document.querySelector("#title")?.remove();
          document.body.style.removeProperty("overflow");
          ( document.querySelector("#initialWrapper") as HTMLElement).style.height = '0';
        }}
      >
        <Box
          id="title"
          as={motion.svg}
          position="absolute"
          zIndex={100}
          display="flex"
          variants={textContainer}
        >
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            style={{ color: "white" }}
          >
            <Box as="rect" w="100%" h="100%" fill="currentcolor" />
            <Box
              as={motion.rect}
              w="100%"
              h="100%"
              color="gray.600"
              fill="currentcolor"
              variants={text}
            />
          </pattern>
          <Box
            as="text"
            fontSize="4xl"
            fontWeight="bold"
            text-anchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            hoangtrung1801
          </Box>
        </Box>
      </Center>
    </Center>
  );
}
// <motion.svg className="absolute z-50 flex" variants={textContainer}>
//   <Box as='pattern'
//     id="pattern"
//     patternUnits="userSpaceOnUse"
//     width={750}
//     height={800}
//     color='white'
//   >
//     <Box as='rect' w='full' h='full' fill='current' />
//     <Box as={motion.rect} w='full' h='full' color='gray.600' fill='current' variants={text}/>
//   </Box>
//   <Box
//     as='text'
//     fontSize='4xl'
//     fontWeight='bold'
//     text-anchor="middle"
//     x="50%"
//     y="50%"
//     style={{ fill: "url(#pattern)" }}
//   >
//     tailstore
//   </Box>
// </motion.svg>
