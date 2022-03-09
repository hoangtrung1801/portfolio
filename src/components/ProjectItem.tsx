import {
  Box,
  BoxProps, Image,
  LinkBox,
  LinkOverlay,
  Text
} from "@chakra-ui/react";
import React from "react";
import Project from "../types/Project";
import Skill from "./Skill";

const ProjectItem: React.FunctionComponent<{project: Project} & BoxProps> = ({project}) => {
  return (
    <Box as={LinkBox} boxShadow="8px 8px 0 rgb(0 0 0 / 15%)" overflow="hidden">
      <LinkOverlay
        href="#"
        _hover={{
          "& .main::after": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "& .skill": {
            opacity: "1",
            transform: 'translate3d(0,0,0) rotateX(0)'
          },
        }}
      >
        <Box
          width="100%"
          height="24px"
          bgColor="#ddd"
          color="#6a6a6a"
          position="relative"
          zIndex="100"
        >
          <Text
            textAlign="center"
            fontSize="10px"
            textTransform="uppercase"
            fontWeight="700"
            lineHeight="26px"
            position="relative"
          >
            {project.title}
          </Text>
        </Box>
        <Box
          className="main"
          position="relative"
          pt="58%"
          width="100%"
          _before={{
            content: `''`,
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "20",
            boxShadow: "0 0 50px rgb(0 0 0 / 75%) inset",
            transition: "transform .4s cubic-bezier(.65,.15,0,1)",
          }}
          _after={{
            content: `''`,
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            bgColor: "rgba(10,10,10,.7)",
            transform: "translateY(-100%)",
            transition: "transform .2s cubic-bezier(.65,.15,0,1)",
          }}
        >
          <Image
            src={project.image}
            width="100%"
            height="100%"
            position="absolute"
            top="0"
            left="0"
            fit="cover"
          />
          <Box
            className="tags"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            zIndex="10"
          >
            <Box
              position="relative"
              width="80%"
              height="100%"
              mx="auto"
              display="flex"
              justifyContent="center"
              alignContent="center"
              flexWrap="wrap"
            >
              {project.skills.map((skill, id) => (
                <Skill
                  className="skill"
                  key={id}

                  opacity='0'
                  zIndex='10'

                  transition='transform .4s cubic-bezier(.5,1.5,.5,1.5)'
                  transform="rotateX(92deg)"
                  transformOrigin="50% 50% -10px"
                  transitionDelay={`${0.45 + id * 0.05}s`}
                  style={{
                    backfaceVisibility: "hidden",
                    transformStyle: "flat",
                  }}
                >
                  {skill}
                </Skill>
              ))}
            </Box>
          </Box>
        </Box>
      </LinkOverlay>
    </Box>
  );
};

export default ProjectItem;
