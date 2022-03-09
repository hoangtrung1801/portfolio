import { Box, BoxProps, Text } from "@chakra-ui/react";
import React from "react";

const Skill: React.FunctionComponent<BoxProps> = ({children, ...props}) => {
  return (
    <Box
      display="inline-block"
      m="3px"

      padding="8px 5px"
      bgColor="#313131"
      color="#999"
      borderWidth="1px 1px 2px 1px"
      borderStyle="solid"
      borderColor={"#222"}
      borderRadius="3px"

      textTransform={"uppercase"}
      fontWeight="bold"
      fontSize={".75em"}
      lineHeight="1em"

      boxShadow={"1px 1px 0 rgb(0 0 0 / 25%)"}
      cursor={"pointer"}
      position="relative"
      overflow="hidden"

      {...props}

      _before={{
        content: `""`,
        top: "0",
        left: "0",
        bgColor: "#515151",
        position: "absolute",
        height: "50%",
        width: "100%",
        zIndex: "1",
        transition: "transform .3s cubic-bezier(.65,.05,.1,1)",
        transform: "translate3d(-105%,0,0)",
      }}
      _after={{
        content: `""`,
        bottom: "0",
        left: "0",
        bgColor: "#3f3f3f",
        position: "absolute",
        height: "50%",
        width: "100%",
        zIndex: "1",
        transition: "transform .3s cubic-bezier(.65,.05,.1,1)",
        transform: "translate3d(105%,0,0)",
        transitionDelay: "75ms",
      }}
      _hover={{
        "&::before, &::after": {
          transform: "translate3d(0,0,0)",
        },
      }}
    >
      <Text zIndex="2" position={"relative"}>
        {children}
      </Text>
    </Box>
  );
};

export default Skill;