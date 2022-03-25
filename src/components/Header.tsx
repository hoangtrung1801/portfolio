import {
  Box,
  HStack,
  Text,
  Link as LinkStyle,
  LinkProps,
  useColorMode,
  Button,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { GithubLogo, Moon, Sun } from "phosphor-react";
import IconButton from "./IconButton";
import { useRouter } from "next/router";

const pages: { title: string; href: string}[] = [
  {
    title: "About",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const {colorMode, toggleColorMode} = useColorMode();
  const router = useRouter();

  return (
    <Flex maxW="3xl" mx="auto" p="3rem 1rem 0 1rem">
      <HStack spacing="24px">
        {pages.map((page, id) => (
          <NavItem href={page.href} key={id} isActive={page.href === router.route}>
            {page.title}
          </NavItem>
        ))}
      </HStack>
      <HStack ml="auto">
        <IconButton icon={<GithubLogo size='1.2em' />} />
        <IconButton onClick={toggleColorMode} icon={colorMode === 'light' ? <Sun size='1.2em'/> : <Moon size='1.2em' />} />
      </HStack>
    </Flex>
  );
}

const NavItem = ({
  children,
  href,
  isActive
}: {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
} & LinkProps) => (
  <Link href={href}>
    <LinkStyle textDecor={isActive && 'underline'}>{children}</LinkStyle>
  </Link>
);
