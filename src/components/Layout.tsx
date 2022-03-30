import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import InitialTransition from './InitialTransition';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({children} : LayoutProps) {
  return (
    <Box minH='100vh'>
      <InitialTransition />
      <Header />  
      <Container maxW='2xl' py='2rem'>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}