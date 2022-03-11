import { Box, Flex, LinkProps, Text } from "@chakra-ui/react";
import React from "react";

const Scroll = require("react-scroll");
const Link = Scroll.Link;

interface Props {
  activeNav: boolean;
  toggleNav: () => void;
}

const NavItem: React.FC<
  { onClick: React.MouseEventHandler<HTMLDivElement>; to: string } & LinkProps
> = ({ children, to, href, onClick }) => (
  <Box
    as={Link}
    to={to}
    spy={true}
    smooth={true}
    offset={0}
    duration={1200}
    textDecoration="none"
    color="#5a5a5a"
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
    onClick={onClick}
    _hover={{
      textDecor: "none",
      "&::before, &::after": {
        transform: "translate3d(0,0,0)",
      },
      "& p": {
        color: "#9f9f9f",
      },
    }}
    _focus={{
      boxShadow: "none",
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
      transition: "transform .4s cubic-bezier(.65,.15,0,1)",
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
      transition: "transform .4s cubic-bezier(.65,.15,0,1)",
    }}
  >
    <Text width="100%" textAlign="center" fontWeight="bold">
      {children}
    </Text>
  </Box>
);

const Nav: React.FC<Props> = ({ activeNav = false, toggleNav }) => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      bgColor="#333"
      position="fixed"
      top="0"
      left="0"
      zIndex="1001"
      align="center"
      justify="center"
      direction="column"
      padding="10% 0"
      transform={activeNav ? "translate(0, 0)" : "translate(0, -100%)"}
      transition="transform .45s cubic-bezier(.45,0,0,1)"
    >
      <NavItem to="about" onClick={toggleNav}>
        about
      </NavItem>
      <NavItem to="projects" onClick={toggleNav}>
        projects
      </NavItem>
      <NavItem to="blogs" onClick={toggleNav}>
        blogs
      </NavItem>
      <NavItem to="contact" onClick={toggleNav}>
        contact
      </NavItem>
    </Flex>
  );
};

export default Nav;
