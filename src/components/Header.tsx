import {
  Box,
  HStack,
  Text,
  Link as LinkStyle,
  LinkProps,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect } from "react";

const pages: { title: string; href: string }[] = [
  {
    title: "About",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blogs",
  },
];

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <Box maxW="3xl" mx="auto" p='3rem 1rem 0 1rem'>
      <HStack spacing="24px">
        {pages.map((page, id) => (
          <NavItem href={page.href} key={id}>
            {page.title}
          </NavItem>
        ))}
      </HStack>
    </Box>
  );
}

const NavItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
} & LinkProps) => (
  <LinkStyle as={Link} href={href}>
    <a>{children}</a>
  </LinkStyle>
);
