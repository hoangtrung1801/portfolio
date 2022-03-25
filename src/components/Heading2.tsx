import { Heading, HeadingProps } from "@chakra-ui/react";
import React from "react";

interface Heading2Props {}

export default function H2({children, ...props}: Heading2Props & HeadingProps) {
  return (
    <Heading as="h2" size="xl" mt="3rem" mb="2rem" lineHeight="1.25" {...props}>
      {children}
    </Heading>
  );
}
