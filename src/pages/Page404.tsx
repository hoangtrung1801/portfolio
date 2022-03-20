import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";

interface IPage404 {}

const Page404: React.FunctionComponent<IPage404> = () => {
  return (
    <Layout>
      <Flex
        id="projects"
        width="100vw"
        minH="100vh"
        p="80px 0 60px"
        align="center"
        justify="center"
        direction="column"
        bgColor="bgDefault"
      >
        <Container maxW="container.md">
          <Heading color="textDefault.light">Page 404</Heading>
        </Container>
      </Flex>
    </Layout>
  );
};

export default Page404;
