import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";

interface IBlogProps {}

const Blogs: React.FunctionComponent<IBlogProps> = () => {
  return (
    <Layout>
      <Flex
        id="projects"
        width="100vw"
        minH="100vh"
        p="80px 0 60px"
        align="center"
        justify="flex-start"
        direction="column"
        bgColor="bgDefault"
      >
        <Container maxW="container.md">
          <Heading color="textDefault.light">blogs</Heading>
        </Container>
      </Flex>
    </Layout>
  );
};

export default Blogs;