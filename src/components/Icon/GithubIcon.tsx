import { Box, Image, ImageProps } from "@chakra-ui/react";
import React from "react";

const GithubIcon: React.FunctionComponent<ImageProps> = ({...props}) => {

  return (
    <Box width="35px" height="35px" background={`url("/portfolio/images/icons.svg") no-repeat 0 1px`} bgPos="0 -35px" backgroundSize="100% auto" {...props}></Box>
  )
}

export default GithubIcon;