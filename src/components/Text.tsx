import React from "react";
import {
  Text as TextChakra,
  TextProps as TextChakarProps,
} from "@chakra-ui/react";

interface TextProps {}

export default function Text({
  children,
  ...props
}: TextProps & TextChakarProps) {
  return (
    <TextChakra mb="2rem" {...props}>
      {children}
    </TextChakra>
  );
}
