import { ButtonProps } from "@chakra-ui/react";
import React from "react";
import StyledButton from "./StyledButton";

const ButtonSocial: React.FunctionComponent<
  {
    bgColor: string;
    boxShadowColor: string;
    Icon: React.FunctionComponent;
  } & ButtonProps
> = ({ bgColor, boxShadowColor, Icon, children, ...props }) => {
  return (
    <StyledButton
      display="flex"
      bgColor={bgColor}
      color="white"
      boxShadow={`1px 1px 0px 0px ${boxShadowColor}, 2px 2px 0px 0px ${boxShadowColor}, 3px 3px 0px 0px ${boxShadowColor}, 4px 4px 0px 0px ${boxShadowColor}, 5px 5px 0px 0px ${boxShadowColor}`}
      leftIcon={<Icon />}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonSocial;
