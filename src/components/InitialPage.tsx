import { Box, Center } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import React, { SetStateAction } from 'react';
import { useState } from 'react';

const blackBox: Variants = {
  initial: {
    height: '100vh', 
    bottom: 0
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1]
    }
  }
};

const textContainer: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
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

interface IInitialPageProps {
  setIsFirstMount: React.Dispatch<SetStateAction<boolean>>
  // isFirstMount: boolean
}

const InitialPage: React.FunctionComponent<IInitialPageProps> = ({setIsFirstMount}) => {
  // const [isFirstMount, setIsFirstMount] = useState(true);
  const mainTitle = "hoangtrung1801";

  return (
    <>
      {/* {isFirstMount && ( */}
        <Center position="absolute" inset="0" alignItems="flex-end">
          <Center
            as={motion.div}
            position="relative"
            zIndex="100"
            w="100%"
            bgColor="black"
            initial="initial"
            animate="animate"
            variants={blackBox}
            onAnimationStart={() => {
              document.body.style.overflow = 'hidden';
            }}
            onAnimationComplete={() => {
              document.querySelector("#title")?.remove();
              document.body.style.overflow = 'auto';
              setIsFirstMount(false);
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
                {mainTitle}
              </Box>
            </Box>
          </Center>
        </Center>
      {/* )} */}
    </>
  );
}

export default InitialPage;