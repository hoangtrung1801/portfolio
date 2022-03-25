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
      {children}
      <Footer />
    </>
  )
}