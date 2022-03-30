import { Text, TextProps } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "phosphor-react";
import React from "react";
import textTransition from "./textTransition";

interface ReadmoreIconProps {}

export default function ReadmoreIcon({children, ...props}: ReadmoreIconProps & TextProps) {
  return (
    <Text
      as={motion.p}
      color="white"
      fontSize="sm"
      fontFamily="Rubik, san-serif"
      variants={textTransition}
      {...props}
    >
      <ArrowRight size={20} />
    </Text>
  );
}