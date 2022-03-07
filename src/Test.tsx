import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import { 
  Provider,
  Link,
  withNavigationContext,
  withNavigationHandlers
// @ts-ignore
} from "react-awesome-slider/dist/navigation";
import Home from './pages/Home';
import { Box, Text } from '@chakra-ui/react';

// Wrapp the AwesomeSlider component with the navigationHandlers
const NavigationSlider = withNavigationHandlers(AwesomeSlider);

// Create an AwesomeSlider instance with some content
const Slider = () => {
  return (
    <NavigationSlider
      className="awesome-slider"
      media={[
        {
          slug: "page-one",
          className: "page-one",
          children: () => <Home /> 
        },
        {
          slug: "page-two",
          className: "page-two",
          children: () => <p>Page Two</p>
        }
      ]}
    />
   )
}

// Page header navigation
const Header = () => {
  return (
    <div>
      <nav>
        <Link href='page-one'>
          <Home />
        </Link>
        <Link href='page-two'>Page two</Link>
      </nav>
    </div>
  )
}

// Wrapp the aplication with the navigation Provider passing down the current page slug.
const Test = () => {
  const slug = "[THE INITIAL RENDERED SLUG]";

  return (
    <Provider slug={slug}>
      <Header />
      {/* <NavigationSlider /> */}
      <Slider />
    </Provider>
  )
}
export default Test;
