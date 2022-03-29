import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HeadingProps,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  ListItem,
  Text as TextChakra,
  TextProps,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { EnvelopeSimple, User } from "phosphor-react";
import Text from "../components/Text";
import React, { useState } from "react";
import H2 from "../components/Heading2";
import H1 from "../components/Heading1";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectIndexColor } from "../app/slices/icolorSlice";


export default function Index() {

  return (
    <>
      <H1>
        Hi, I'm Hoang Trung
      </H1>
      <Text>I am a full-stack developer, I come from Vietnam.</Text>
      <Text>
        This is my portfolio, where I introduces myself, my projects and I
        writes blog in here.
      </Text>

      <H2>Projects</H2>
      <Text>
        I usually go to build project for myself, practice or clients. In
        front-end, my weapons of choice are React, Typescript and Nextjs. In
        back-end, I uses Nodejs, Expressjs for building API.
      </Text>
      <Text>Here are some of the major projects I've made: </Text>
      <UnorderedList my="2rem">
        <ListItem>
          <Link
            color="teal.500"
            href="https://github.com/hoangtrung1801/portfolio"
          >
            Portfolio
          </Link>
        </ListItem>
      </UnorderedList>
      <Text>
        <Link color="teal.500" href="https://github.com/hoangtrung1801">
          Read more
        </Link>{" "}
        about my projects.
      </Text>

      <H2>About me</H2>
      <Box
        overflow="hidden"
        borderRadius="lg"
        width="640px"
        height="640px"
        boxShadow="xl"
        mt='2rem'
        mb='3.5rem'
      >
        <Image
          src="/images/avatar.jpg"
          width="640px"
          height="640px"
          objectFit="cover"
        />
      </Box>
      <Text>
        I am Lê Kim Hoàng Trung. I am full-stack webdeveloper. In present, I am
        studying at Viet - Korea University of Information Communication
        Technology
      </Text>

      <H2>Get in touch</H2>
      <Text>
        If you wanna get in touch, please send an email to{" "}
        <Text color="teal.400" display="inline">
          hoangtrung1801@gmail.com
        </Text>{" "}
        or fill up form below then I'll contact you soon
      </Text>

      <FormControl my='2rem'>
        <VStack spacing='1rem'>
          <InputGroup>
            <InputLeftElement h='100%'>
              <User size="1.2em" />
            </InputLeftElement>
            <Input type="text" placeholder="Your name" size='lg'/>
          </InputGroup>
          <InputGroup>
            <InputLeftElement h='100%'>
              <EnvelopeSimple size="1.2em" />
            </InputLeftElement>
            <Input type="text" placeholder="Your email" size='lg' />
          </InputGroup>
          <Button colorScheme='teal' alignSelf='flex-start' p='1.5rem 1rem' isDisabled>Submit your message</Button>
        </VStack>
      </FormControl>
    </>
  );
}