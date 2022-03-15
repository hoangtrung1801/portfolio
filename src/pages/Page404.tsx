import { Box, Button, Center, Square } from "@chakra-ui/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const animation: Variants = {
  initial: {
    scale: 1,
  },
  exit: {
    scale: 0.6,
    transition: {
      type: "spring",
      duration: 5,
    },
  },
};

const square: Variants = {
  initial: { y: "150%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: {
    y: "50%",
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

interface IPage404 {}

const Page404: React.FunctionComponent<IPage404> = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    // <Center>
    //   <h1>Page not found 404</h1>
    // </Center>
    // <Layout>
    <AnimatePresence
      // initial={false}
      // exitBeforeEnter={true}
      // onExitComplete={() => console.log("animate end")}
      exitBeforeEnter={true}
    >
      <Box
        as={motion.div}
        key="test"
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{
          y: "50%",
          opacity: 0,
          transition: { duration: 0.1 },
        }}
        // initial={{opacity: 0.8}}
        // animate={{opacity: 1}}
        // exit={{opacity: 0.8}}
        // variants={animation}
        // animate="animate"
        // exit="exit"
        overflow="hidden"
        minW="100vw"
        height="100vh"
        bgColor="gray.500"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <h1>hello world</h1>
        <Link to="/">about</Link>
        <Button onClick={() => setIsShow(!isShow)}>Click</Button>
        {/* {isShow && <Square as={motion.div} size="100px" bg="tomato" />} */}
        <AnimatePresence>
          {isShow && (
            <motion.div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "tomato",
              }}
              initial={{ y: "50%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{
                y: "50%",
                opacity: 0,
                transition: { duration: 0.1 },
              }}
            />
          )}
        </AnimatePresence>
      </Box>
    </AnimatePresence>
    // </Layout>
  );
};

export default Page404;
