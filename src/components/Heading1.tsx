import { Heading, HeadingProps } from "@chakra-ui/react";
import React from "react";

interface Heading1Props {}

export default function H1({
  children,
  ...props
}: Heading1Props & HeadingProps) {
  return (
    <Heading
      as="h1"
      size='3xl'
      my="2rem"
      letterSpacing="1.5px"
      fontWeight="900"
      {...props}
    >
      {children}
    </Heading>
  );
}
