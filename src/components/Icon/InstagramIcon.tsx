import { Box, Image, ImageProps } from "@chakra-ui/react";
import React from "react";

const InstagramIcon: React.FunctionComponent<ImageProps> = ({...props}) => {

  return (
    <Box width="35px" height="35px" background={`url("/portfolio/images/icons.svg") no-repeat 0 1px`} backgroundSize="100% auto" {...props}></Box>
  )
}

export default InstagramIcon;