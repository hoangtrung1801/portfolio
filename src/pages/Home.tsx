import {
  Box, Container,
  Flex,
  Heading
} from "@chakra-ui/react";
import React from "react";
import Skill from "../components/Skill";
import Social from "../components/Social";
import HighLightText from "../components/Text/HighlightText";
import NormalText from "../components/Text/NormalText";




const Introduction: React.FC = () => (
  <>
    <Heading as="h1" color="textDefault.light">
      Hello, my name is Trung
    </Heading>
    <NormalText>
      I am a <HighLightText>full-stack web developer</HighLightText>
    </NormalText>
    <NormalText>
      Contact with me via{" "}
      <HighLightText>hoangtrung1801.2003@gmail.com</HighLightText>
    </NormalText>
    <NormalText>Here are some technologies I've been working:</NormalText>
  </>
);

const Skills: React.FunctionComponent = () => {
  const skills = [
    "javascript",
    "nodejs",
    "java",
    "html5",
    "css",
    "sass",
    "reactjs",
    "mongodb",
    "redis",
    "mysql",
    "expressjs",
    "redux",
    "c++",
    "python",
  ];

  return (
    <Box mt="6px" textAlign="center">
      {skills.map((skill, id) => (
        <Skill key={id}>{skill}</Skill>
      ))}
    </Box>
  );
};

const Home: React.FC = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      align="center"
      justify="center"
      direction="column"
      bgColor="bgDefault"
      position="relative"
    >
      <Container
        maxW="container.md"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Introduction />
        <Skills />
      </Container>
      <Social />
    </Flex>
  );
};

export default Home;
