import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const SocialItem = ({
  bgColor,
  bgPosition,
  link,
}: {
  bgColor?: string;
  bgPosition?: string;
  link?: string;
}) => (
  <Center
    width="75px"
    height="55px"
    pl="20px"
    ml="-20px"
    background={bgColor}
    _hover={{ marginLeft: 0 }}
    transition="all 0.9s cubic-bezier(.05,.65,.18,1)"
    cursor="pointer"
    as={Link}
    href={link}
    isExternal={true}
  >
    {/* <Image src={`${src}`} width="100$" height="100%"/> */}
    <Box
      width="35px"
      height="35px"
      background={`url("/portfolio/images/icons.svg") no-repeat 0 1px`}
      backgroundSize="100% auto"
      bgPosition={bgPosition}
    ></Box>
  </Center>
);

const Social: React.FC = (): JSX.Element => {
  return (
    <Box position="fixed" left="0" top="30%">
      <Flex direction="column">
        {/* <Center p="2px 0"> */}
        <Text
          p="5px 0"
          textAlign="center"
          width="55px"
          as="i"
          fontSize={"10px"}
          color="#7a7a7a"
        >
          Follow me
        </Text>
        {/* </Center> */}
        {/* Github */}
        <SocialItem
          bgColor="#4e545a"
          bgPosition="0 -35px"
          link="https://github.com/hoangtrung1801"
        />
        {/* Instagram */}
        <SocialItem
          bgColor="radial-gradient(circle at 25% 110%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%),radial-gradient(circle at 25% 110%,#b9a800 0,#938500 5%,#b10f00 45%,#8c0061 60%,#002ca9 90%)"
          link="#"
        />
        {/* Facebook */}
        <SocialItem
          bgColor="#4064ac"
          bgPosition="0 -105px"
          link="https://facebook.com/trung181"
        />
      </Flex>
    </Box>
  );
};

export default Social;
