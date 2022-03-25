import { Center, HStack, Text, VStack } from "@chakra-ui/react";
import { EnvelopeSimple, FacebookLogo, GithubLogo, InstagramLogo } from "phosphor-react";
import React from "react";
import IconButton from "./IconButton";

const description = '© 2022, Le Kim Hoang Trung • Da Nang • Vietnam';

interface FooterProps {

}

export default function Footer({} : FooterProps) {
  return (
    <Center flexDirection='column' mt='auto' my='2rem'>
      <HStack my='1rem'>
        <IconButton icon={<GithubLogo size='1.2em'/>} href='https://github.com/hoangtrung1801'/>
        <IconButton icon={<FacebookLogo size='1.2em'/>} href='https://facebook.com/trung181'/>
        <IconButton icon={<InstagramLogo size='1.2em'/>} href='https://instagram.com/hoangtrung1801'/>
        <IconButton icon={<EnvelopeSimple size='1.2em'/>}/>
      </HStack>
      <VStack>
        <Text color='#a0aec0' fontSize='0.75em' >{description}</Text>
        <Text color='#a0aec0' fontSize='0.75em' >hoangtrung1801.2003@gmail.com</Text>
      </VStack>
    </Center>
  )
}