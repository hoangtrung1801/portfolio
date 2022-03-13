import React from 'react';
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import {
  withNavigationHandlers,
  withNavigationContext
  // @ts-ignore
} from "react-awesome-slider/dist/navigation";
import {media} from './Media';
// import Startup from "../startup/startup";

const Slider = withNavigationHandlers(AwesomeSlider);

const Fullpage: React.FunctionComponent = () => {
  const animation = 'foldOutAnimation';
  return (
    <Slider 
      animation={animation}
      media={media}
    />
  )
}

export default Fullpage;