import {
  Box,
  LinkOverlay,
  SimpleGrid,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "phosphor-react";
import React from "react";
import projects from "../constants/projects";
import ProjectItem from "./Project/ProjectItem";


interface ProjectListProps {}

export default function ProjectList({}: ProjectListProps) {
  return (
    <SimpleGrid columns={[1,2]} spacingX="12px" spacingY='24px' mb='2rem'>
      {projects.map(project => (
        <ProjectItem project={project} key={project.title} />
      ))}
    </SimpleGrid>
  );
}