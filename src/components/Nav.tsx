import React from "react";
import { Box, Flex, Text } from '@chakra-ui/react';

interface Props {
  activeNav: boolean
}

const NavItem: React.FC = ({children}) => (
  <Box 
    color="#5a5a5a"
    // color: #9f9f9f;
    width="90%"
    maxWidth="600px"
    height="calc(100% / 4)"

    fontSize="2em"
    bgColor="rgba(0, 0, 0, 0.02)"

    position="relative"
    overflow="hidden"

    display="flex"
    alignItems="center"
    justifyContent="center"
    textAlign="center"

    cursor="pointer"

    _hover={{
      "&::before, &::after": {
        transform: "translate3d(0,0,0)"
      },
      "& p": {
        color: "#9f9f9f"
      }
    }}

    _before={{
      content: `""`,
      height: "75%",
      width: "100%",
      position: "absolute",
      left: "0",
      top: "0",
      transform: "translate3d(-100%, 0, 0)",
      bgColor: "#2e2e2e",
      zIndex: "-1",
      transition: "transform .4s cubic-bezier(.65,.15,0,1)"
    }}

    _after={{
      content: `""`,
      height: "75%",
      width: "100%",
      position: "absolute",
      left: "0",
      bottom: "0",
      transform: "translate3d(100%, 0, 0)",
      bgColor: "#2e2e2e",
      zIndex: "-1",
      transition: "transform .4s cubic-bezier(.65,.15,0,1)"
    }}
  >
    <Text
      width="100%"
      textAlign="center"
      fontWeight="bold"
    >{children}</Text>
  </Box>
)

const Nav: React.FC<Props> = ({activeNav = false}) => {
  return (
    <Flex width="100vw" height="100vh" bgColor="#333" position="fixed" top="0" left="0" zIndex="1001" align="center" justify="center" direction="column" padding="10% 0" transform={activeNav ? "translate(0, 0)" : "translate(0, -100%)"} transition="transform .45s cubic-bezier(.45,0,0,1)">
      <NavItem>about</NavItem>
      <NavItem>portofolio</NavItem>
      <NavItem>labs</NavItem>
      <NavItem>contact</NavItem>

    </Flex>
    // <nav className={`nav ${activeNav ? "nav-active" : ""}`}>
    //   <a href="">
    //     <span>
    //       about
    //     </span>
    //   </a>
    //   <a href="">
    //     <span>
    //       portofolio
    //     </span>
    //   </a>
    //   <a href="">
    //     <span>
    //       labs
    //     </span>
    //   </a>
    //   <a href="">
    //     <span>
    //       contact
    //     </span>
    //   </a>
    // </nav>
  )
}

export default Nav;