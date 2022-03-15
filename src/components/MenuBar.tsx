import { Box } from "@chakra-ui/react";
import React, { MouseEventHandler } from "react";

const MenuBar = ({
  activeNav = false,
  toggleNav,
}: {
  activeNav: boolean;
  toggleNav: MouseEventHandler<HTMLDivElement>;
}): JSX.Element => {
  return (
    <Box
      className={activeNav ? "menu-bar-active" : ""}
      onClick={toggleNav}
      position="fixed"
      top="35px"
      right="35px"
      zIndex="60"
      cursor="pointer"
      padding="5px 4px"
      background="transparent"
      overflow="hidden"
      sx={{
        "& i": {
          display: "block",
          width: "42px",
          height: "2px",
          margin: "8px",
          bgColor: "#7a7a7a",
          transition:
            "transform .5s cubic-bezier(.43,.77,.15,1.5),background .3s ease",
        },
        "&:hover": {
          "& i:nth-child(1)": {
            transform: "translateY(-4px)",
          },
          "& i:nth-child(3)": {
            transform: "translateY(4px)",
          },
        },
      }}
    >
      <Box as="i"></Box>
      <Box as="i"></Box>
      <Box as="i"></Box>
    </Box>
  );
};

export default MenuBar;
