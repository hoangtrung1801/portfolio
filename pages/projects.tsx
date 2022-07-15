import Container from "layouts/Container";
import React from "react";
import Image from "next/image";
import projects from "@/data/projects";
import { LinkSimple, GithubLogo } from "phosphor-react";
import { ArrowRight } from "phosphor-react";

const Projects = () => {
    return (
        <Container title="Projects - Braydon Coyer">
            <h1>
                <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
                    Projects
                </span>
                <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
                    A selection of my favorite works.
                </span>
            </h1>
            <div className="grid grid-cols-1 gap-x-12 gap-y-4 md:gap-y-24 md:grid-cols-3">
                {projects.map((project) => (
                    <>
                        <div className="col-span-1 py-2">
                            <h2 className="mt-0">{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="flex space-x-4 mb-4">
                                {project.link && (
                                    <a
                                        className="text-base decoration-neutral-500 text-neutral-700 hover:text-black dark:text-slate-300 dark:decoration-slate-300 hover:dark:text-slate-200"
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Preview
                                        <LinkSimple
                                            className="inline ml-1"
                                            size={18}
                                        />
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a
                                        className="text-base decoration-neutral-500 text-neutral-700 hover:text-black dark:text-slate-300 dark:decoration-slate-300 hover:dark:text-slate-200"
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                        <GithubLogo
                                            className="inline ml-1"
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
                                <div className="relative col-span-5 overflow-hidden rounded-lg md:h-[450px] h-auto">
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
                    </>
                ))}

                <a
                    className="flex items-center justify-center w-full px-12 py-3 text-base font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
                    href="https://github.com/hoangtrung1801"
                    target="_blank"
                    rel="noreferrer"
                >
                    View more on github
                    <ArrowRight className="inline ml-2" />
                </a>
            </div>
        </Container>
    );
};

export default Projects;
