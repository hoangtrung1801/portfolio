import { Container, Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProjectItem from "../components/ProjectItem";
import NormalText from "../components/Text/NormalText";

const ListProjects: React.FunctionComponent = () => {
  return (
    <SimpleGrid columns={2}>
      <Box padding="10px">
        <ProjectItem />
      </Box>
    </SimpleGrid>
  );
};

const Projects: React.FunctionComponent = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      align="center"
      justify="center"
      direction="column"
      bgColor="bgDefault"
    >
      <Container maxW="container.md">
        <Heading color="textDefault.light">my projects</Heading>
        <NormalText>This is all my projects which I made.</NormalText>

        <ListProjects />
      </Container>
    </Flex>
  );
};

export default Projects;
