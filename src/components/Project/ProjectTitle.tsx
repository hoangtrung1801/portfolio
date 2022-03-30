import { Text, TextProps } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import React from "react";
import textTransition from "./textTransition";

interface ProjectTitleProps {}

export default function ProjectTitle({children, ...props}: ProjectTitleProps & TextProps) {

  return (
    <Text
      as={motion.p}
      color="white"
      fontSize="xl"
      fontWeight="700"
      mb="6px"
      textTransform="uppercase"
      fontStyle="italic"
      fontFamily="Rubik, san-serif"
      variants={textTransition}
      {...props}
    >
      {children}
    </Text>
  );
}