import { Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProjectItem from "../components/ProjectItem";
import NormalText from "../components/Text/NormalText";
import projects from "../constants/projects";

const ListProjects: React.FunctionComponent = () => {
  return (
    <SimpleGrid columns={2} columnGap='32px' rowGap='48px' mt='32px'>
      {
        projects.map(( project, id ) => (
          <ProjectItem project={project} />
        ))
      }
    </SimpleGrid>
  );
};

const Projects: React.FunctionComponent = () => {
  return (
    <Flex
      id='projects'
      width="100vw"
      minH='100vh'
      p='80px 0 60px'

      align="center"
      justify="flex-start"
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
