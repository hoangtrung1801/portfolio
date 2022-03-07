import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import {
  Provider,
  withNavigationHandlers,
  withNavigationContext
  // @ts-ignore
} from 'react-awesome-slider/dist/navigation';
import { media } from './Media';
import { Box, Center, Text } from '@chakra-ui/react';

const NavigationSlider = withNavigationHandlers(AwesomeSlider);

const Slider: React.FunctionComponent = () => {
  return (
    <NavigationSlider 
      className="awesome-slider"
      animation="foldOutAnimation"
      media={[
        {
          slug: "page-one",
          className: "page-one",
          children: (
            <Center width="100w" height="100vh !important" bgColor="red.100">
              <Text>Page one</Text>
            </Center>
          )
        },
        {
          slug: "page-two",
          className: "page-two",
          children: (
            <Center width="100w" height="100vh" bgColor="gray.100">
              <Text>Page two</Text>
            </Center>
          )
        }
      ]}
    >

    </NavigationSlider>
  )
}

const Fullpage = withNavigationContext(({fullpage}: {fullpage: any}) => {

  return (
    <Provider slug="[the initial]">
      <Slider/>
    </Provider>
  )
})

export default Fullpage;