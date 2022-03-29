import {
  Center,
  Circle,
  Flex, HStack, Link as LinkStyle,
  LinkProps,
  Text,
  useColorMode
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GithubLogo, Moon, Sun } from "phosphor-react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { changeColor, selectIndexColor } from "../app/slices/icolorSlice";
import mainColors from "../constants/mainColors";
import IconButton from "./IconButton";

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

interface HeaderProps {
}

export default function Header({}: HeaderProps) {
  const dispatch = useAppDispatch();
  const icolor = useAppSelector(selectIndexColor);
  
  const {colorMode, toggleColorMode} = useColorMode();
  const router = useRouter();

  const handleChangeColor = () => {
    dispatch(changeColor());
  }

  return (
    <Flex maxW="3xl" mx="auto" p="3rem 1rem 0 1rem">
      <Center mr='16px' border='1px solid #b2bec3' p='5px' cursor='default' >
        <Text fontWeight='extrabold' fontSize='24px'>htu</Text>
      </Center>
      <HStack spacing="24px">
        {pages.map((page, id) => (
          <NavItem href={page.href} key={id} isActive={page.href === router.route}>
            {page.title}
          </NavItem>
        ))}
      </HStack>
      <HStack ml="auto">
        <IconButton icon={<GithubLogo size='1.2em' />} />
        <IconButton icon={<Circle size='12px' bgColor={mainColors[icolor]} transition='color .4s ease'/>} onClick={handleChangeColor}/>
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
