import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Social from "../components/Social";

const NormalText: React.FC = ({children}): JSX.Element => ( 
  <Text fontSize="1.1em" lineHeight="1.8rem" color="textDefault.darker">{children}</Text>
)

const HightlightText: React.FC = ({children}): JSX.Element => ( 
  <Text fontWeight="bold" color="textDefault.dark" as="span">{children}</Text>
)

const Home: React.FC = () => {
  return (
    <Flex width="100vw" height="100vh" align="center" justify="center" direction="column" bgColor="bgDefault" >
      <Heading as="h1" color="textDefault.light">
        Hello, my name is Trung
      </Heading>
      <NormalText>I am a <HightlightText>full-stack web developer</HightlightText></NormalText>
      <NormalText>Contact with me via <HightlightText>hoangtrung1801.2003@gmail.com</HightlightText></NormalText>
      <NormalText>Here are some technologies I've been working:</NormalText> 

      <Social />
    </Flex>   


    // <div className="about">
    //   <span style={{color: "#e4e4e4"}}>Hello, my name is</span>
    //   <h1>Lê Kim Hoàng Trung.</h1>
    //   <span>I am a <span className="/highlight">full-stack web developer</span></span>
    //   <span>Contact with me via <span className="highlight">hoangtrung1801.2003@gmail.com</span></span>
    //   <span>Here are some technologies I've been working:</span> 
    //   <div className="my-skill">
    //     <ul>
    //       <li>Html</li>
    //       <li>Css</li>
    //       <li>Node.js</li>
    //       <li>React</li>
    //       <li>Express</li>
    //       <li>Java</li>
    //       <li>MongoDB</li>
    //     </ul>
    //   </div>

    // </div>
  )
}

export default Home;