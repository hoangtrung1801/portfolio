import { Container } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({children} : LayoutProps) {
  return (
    <>
      <Header />  
      <Container maxW='2xl' py='2rem'>
        {children}
      </Container>
      <Footer />
    </>
  )
}