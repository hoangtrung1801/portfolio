import Container from "layouts/Container";
import React from "react";
import Image from "next/image";
import projects from "@/data/projects";

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
            <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-3">
                {projects.map((project) => (
                    <>
                        <div className="col-span-1 py-2">
                            <h2 className="mt-0">{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="flex space-x-4 mb-4">
                                {project.link && (
                                    <a
                                        className="text-base decoration-neutral-500 text-neutral-700 hover:text-black"
                                        href={project.link}
                                    >
                                        Preview
                                        <svg
                                            className="inline ml-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="#000000"
                                            viewBox="0 0 256 256"
                                        >
                                            <rect
                                                width="256"
                                                height="256"
                                                fill="none"
                                            ></rect>
                                            <path
                                                d="M122.3,71.4l19.8-19.8a44.1,44.1,0,0,1,62.3,62.3l-28.3,28.2a43.9,43.9,0,0,1-62.2,0"
                                                fill="none"
                                                stroke="#000000"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="16"
                                            ></path>
                                            <path
                                                d="M133.7,184.6l-19.8,19.8a44.1,44.1,0,0,1-62.3-62.3l28.3-28.2a43.9,43.9,0,0,1,62.2,0"
                                                fill="none"
                                                stroke="#000000"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="16"
                                            ></path>
                                        </svg>
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a
                                        className="text-base decoration-neutral-500 text-neutral-700 hover:text-black"
                                        href={project.githubLink}
                                    >
                                        Github
                                        <svg
                                            className="inline ml-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="#000000"
                                            viewBox="0 0 256 256"
                                        >
                                            <rect
                                                width="256"
                                                height="256"
                                                fill="none"
                                            ></rect>
                                            <path
                                                d="M84,240a23.9,23.9,0,0,0,24-24V168"
                                                fill="none"
                                                stroke="#000000"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="16"
                                            ></path>
                                            <path
                                                d="M172,240a23.9,23.9,0,0,1-24-24V168"
                                                fill="none"
                                                stroke="#000000"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="16"
                                            ></path>
                                            <path
                                                d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                                                fill="none"
                                                stroke="#000000"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="16"
                                            ></path>
                                            <path
                                                d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                                                fill="none"
                                                stroke="#000000"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="16"
                                            ></path>
                                            <path
                                                d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                                                fill="none"
                                                stroke="#000000"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="16"
                                            ></path>
                                        </svg>
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
                        <div className="col-span-2">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
                                <div className="relative col-span-5 overflow-hidden rounded-lg dark:bg-midnight md:h-[450px] h-auto">
                                    <Image
                                        objectFit="cover"
                                        src={project.imageUrl}
                                        placeholder="blur"
                                        blurDataURL={project.imageUrl}
                                        // layout="responsive"
                                        // width={"100%"}
                                        // height={"100%"}
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
            </div>
        </Container>
    );
};

export default Projects;
