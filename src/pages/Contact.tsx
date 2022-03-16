import {
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import ButtonSocial from "../components/Buttons/ButtonSocial";
import StyledButton from "../components/Buttons/StyledButton";
import FacebookIcon from "../components/Icon/FacebookIcon";
import GithubIcon from "../components/Icon/GithubIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";
import Layout from "../components/Layout";
import HighLightText from "../components/Text/HighlightText";
import NormalText from "../components/Text/NormalText";
import EmailLogo from "../images/email.svg";
import UserLogo from "../images/user.svg";

const StyledInput: React.FunctionComponent<
  { logo: any; placeholder: string } & InputProps
> = ({ logo, placeholder }) => (
  <InputGroup sx={{ "--default": "#797979" }}>
    <InputLeftElement
      pointerEvents="none"
      children={<Image width="20px" src={logo} />}
    />
    <Input
      variant="flushed"
      placeholder={placeholder}
      borderColor="var(--default)"
      color="var(--default)"
      fontSize="18px"
      fontWeight="semibold"
      lineHeight="18px"
      _placeholder={{
        color: "var(--default)",
      }}
      _focus={{
        borderColor: "var(--default)",
      }}
    />
  </InputGroup>
);

const Contact: React.FunctionComponent = () => {
  return (
    <Layout>
      <Flex
        id="contact"
        width="100vw"
        minH="100vh"
        p="80px 0 60px"
        align="center"
        justify="flex-start"
        direction="column"
        bgColor="bgDefault"
      >
        <Container
          maxW="container.md"
          height="100%"
          display="flex"
          flexGrow="1"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Stack>
            <Heading color="textDefault.light">Get in touch</Heading>
            <NormalText>
              If you wanna get in touch, please send an email to{" "}
              <HighLightText>hoangtrung1801@gmail.com</HighLightText> or fill up
              form below then I'll contact you soon
            </NormalText>
          </Stack>

          <Stack spacing="24px">
            <StyledInput logo={UserLogo} placeholder="Fill with your name" />
            <StyledInput logo={EmailLogo} placeholder="Fill with your email" />
            <HStack>
              <StyledButton disabled={true}>Submit your message</StyledButton>
            </HStack>
          </Stack>

          <Stack>
            <Heading
              color="textDefault.darker"
              fontWeight="semibold"
              fontSize="3xl"
              mb="0"
            >
              Let's get social
            </Heading>
            <NormalText mt="0">Follow me on social network</NormalText>
            <HStack mt="6px" spacing="18px">
              <ButtonSocial
                bgColor="rgb(72, 104, 173)"
                boxShadowColor="rgb(47, 67, 112)"
                Icon={FacebookIcon}
                _hover={{}}
              >
                facebook
              </ButtonSocial>
              <ButtonSocial
                bgColor="rgb(53, 53, 53)"
                boxShadowColor="rgb(79, 79, 79)"
                Icon={GithubIcon}
                _hover={{}}
              >
                github
              </ButtonSocial>
              <ButtonSocial
                background="radial-gradient(circle at 25% 110%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%),radial-gradient(circle at 25% 110%,#b9a800 0,#938500 5%,#b10f00 45%,#8c0061 60%,#002ca9 90%)"
                bgColor="radial-gradient(circle at 25% 110%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%),radial-gradient(circle at 25% 110%,#b9a800 0,#938500 5%,#b10f00 45%,#8c0061 60%,#002ca9 90%)"
                boxShadowColor="#f9a16f"
                Icon={InstagramIcon}
                _hover={{}}
              >
                Instagram
              </ButtonSocial>
            </HStack>
          </Stack>
        </Container>
      </Flex>
    </Layout>
  );
};

export default Contact;
