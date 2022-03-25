import { Button, ButtonProps, Link } from "@chakra-ui/react";
import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  href?: string;
}

export default function IconButton({
  icon,
  href,
  ...props
}: IconButtonProps & ButtonProps) {
  return (
    <Link href={href} target="_blank">
      <Button  bgColor="transparent" p="0" borderRadius="50%" {...props}>
        {icon}
      </Button>
    </Link>
  );
}
