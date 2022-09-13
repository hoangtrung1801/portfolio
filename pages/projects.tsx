import Container from "layouts/Container";
import React, { Fragment } from "react";
import Image from "next/image";
import projects from "@/data/projects";
import { LinkSimple, GithubLogo } from "phosphor-react";
import { ArrowRight } from "phosphor-react";

const Projects = () => {
    return (
        <Container title="Projects - hoangtrung1801">
            <h1>
                <span className="block text-center text-base font-semibold uppercase tracking-wide text-teal-500 dark:text-teal-400">
                    Projects
                </span>
                <span className="mx-auto mt-2 block max-w-2xl text-center text-4xl font-bold leading-10 sm:text-5xl">
                    A selection of my favorite works.
                </span>
            </h1>
            <div className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-3 md:gap-y-24">
                {projects.map((project) => (
                    <Fragment key={project.title}>
                        <div className="col-span-1 py-2">
                            <h2 className="mt-0">{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="mb-4 flex space-x-4">
                                {project.link && (
                                    <a
                                        className="text-base text-neutral-700 decoration-neutral-500 hover:text-black dark:text-slate-300 dark:decoration-slate-300 hover:dark:text-slate-200"
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Preview
                                        <LinkSimple
                                            className="ml-1 inline"
                                            size={18}
                                        />
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a
                                        className="text-base text-neutral-700 decoration-neutral-500 hover:text-black dark:text-slate-300 dark:decoration-slate-300 hover:dark:text-slate-200"
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                        <GithubLogo
                                            className="ml-1 inline"
                                            size={18}
                                        />
                                    </a>
                                )}
                            </div>

                            {/* <a
                                className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Visit CSS Art Challenge
                            </a> */}
                        </div>
                        <div className="col-span-2 mb-16 md:mb-0">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
                                <div className="relative col-span-5 h-auto overflow-hidden rounded-lg md:h-[450px]">
                                    <Image
                                        objectFit="cover"
                                        src={project.imageUrl}
                                        placeholder="blur"
                                        blurDataURL={project.imageUrl}
                                        width={5110}
                                        height={3139}
                                        layout="intrinsic"
                                        alt={project.title}
                                    />
                                </div>
                            </div>
                        </div>
                    </Fragment>
                ))}

                <a
                    className="general-ring-state flex w-full cursor-pointer items-center justify-center rounded-full bg-midnight px-12 py-3 text-base font-medium text-white no-underline dark:bg-gray-200 dark:text-midnight md:inline-flex md:w-auto"
                    href="https://github.com/hoangtrung1801"
                    target="_blank"
                    rel="noreferrer"
                >
                    View more on github
                    <ArrowRight className="ml-2 inline" />
                </a>
            </div>
        </Container>
    );
};

export default Projects;
