import { Box, LinkOverlay } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";
import Project from "../../types/Project";
import ProjectTitle from "./ProjectTitle";
import ReadmoreIcon from "./ReadmoreIcon";

const LinkOverlayMotion = motion(LinkOverlay);

const transition: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    zIndex: 100,
    transition: {
      duration: 0.5
    }
  }
}

interface ProjectItemProps {
  project: Project
}

export default function ProjectItem({project}: ProjectItemProps) {
  return (
    <Box
      className="project-item"
      position="relative"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
      as={motion.div}
      _hover={{
        "& > *::after": {
          h: "100%",
        },
        // "& > *::before": {
        //   boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px !important',
        // },
      }}
      variants={transition}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <LinkOverlayMotion
        href={project.href}
        target='_blank'
        _before={{
          zIndex: "11",
        }}
        _after={{
          content: `''`,
          position: "absolute",
          w: "100%",
          h: 0,
          top: "0",
          left: "0",
          zIndex: 9,
          bgColor: "rgba(10,10,10,0.3)",
          transition: "all 0.5s cubic-bezier(0.65, 0.15, 0, 1) 0s",
        }}
      >
        <Box
          className="project-content"
          position="absolute"
          bottom="0"
          zIndex="10"
          w="100%"
          p="1rem 2rem"
        >
          <ProjectTitle>{project.title}</ProjectTitle>
          <ReadmoreIcon />
        </Box>
      </LinkOverlayMotion>
      <Image
        src={project.image}
        width="100"
        height="75"
        objectFit="cover"
        layout="responsive"
      />
    </Box>
  );
}