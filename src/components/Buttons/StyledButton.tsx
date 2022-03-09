import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

const StyledButton: React.FunctionComponent<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      bgColor="rgb(158, 158, 158)"
      color="rgb(196, 196, 196)"
      height="47px"
      fontSize="12px"
      lineHeight="24px"
      fontWeight="bold"
      textTransform="uppercase"
      borderRadius="3px"
      // boxShadow='0 5px 0 rgba(0, 0, 0, 0.3)'
      // boxShadow='0 5px 0 rgb(115, 115, 115)'
      boxShadow="1px 1px 0px 0px rgb(115, 115, 115), 2px 2px 0px 0px rgb(115, 115, 115), 3px 3px 0px 0px rgb(115, 115, 115), 4px 4px 0px 0px rgb(115, 115, 115), 5px 5px 0px 0px rgb(115, 115, 115)"
      transition="background-color 0.3s ease-out 0s"
      _hover={{
        bgColor: "#8e8e8e",
      }}

      {...props}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
