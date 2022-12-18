/* eslint-disable react/no-unescaped-entities */
import siteMetadata from "@/data/siteMetadata";
import Container from "layouts/Container";
import Image from "next/image";
import Link from "next/link";
// import VietnamIcon from "static/images/vietnam.svg";

const educations = [
    {
        school: "Vietnam - Korea University of Information and Communication Technology",
        major: "Information technology",
        duration: "2021 - Now"
    }
];

const awards = [
    {
        name: "The First prize of The city contest for gifted students in informatics",
        year: 2021
    },
    {
        name: "The Second prize of The Information Technology Olympiad for high school students in the Central - Central Highlands Vietnam",
        year: 2021
    },
    {
        name: "The Third prize of The IT Competition for Young People",
        year: 2021
    },
    {
        name: "The Second prize of The city Science and Technology Contest",
        year: 2019
    }
];

const About = () => {
    return (
        <Container title="About Me - hoangtrung1801">
            <h1>
                <span className="block text-center text-base font-semibold uppercase tracking-wide text-teal-500 dark:text-teal-400">
                    About me
                </span>
                <span className="mx-auto mt-2 block max-w-2xl text-center text-4xl font-bold leading-10 sm:text-5xl">
                    Here's my story.
                </span>
            </h1>
            <p>
                I’m Lê Kim Hoàng Trung, a software engineer, full-stack
                developer. I am a Vietnamese{" "}
                <Image
                    className="-mb-[3px]"
                    src={"/images/vietnam.svg"}
                    alt="Vietnam icon"
                    layout="fixed"
                    width={24}
                    height={24}
                />
                , living in Danang City.
            </p>
            <p>
                I'm currently studying at Vietnam - Korea University of
                Information and Communication Technology and my major is
                information technology. I have started studied since 2021.
            </p>
            <p>
                Prior to become student in university, I touch myself becoming
                web developer since 2018.
            </p>
            <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-x-5">
                <div className="col-span-1">
                    <Image
                        className="rounded-xl group-hover:opacity-75"
                        objectFit="cover"
                        src={siteMetadata.avatarImage}
                        placeholder="blur"
                        blurDataURL={siteMetadata.avatarImage}
                        width={260}
                        height={260}
                        layout="responsive"
                        alt={"avatar cover"}
                    />
                </div>
                <div className="col-span-3">
                    <p>
                        Technologies and tools I'm currently exploring and
                        intersted about <a href="https://reactjs.org">React</a>,{" "}
                        <a href="https://nextjs.org/">Next.js</a>,{" "}
                        <a href="https://tailwindcss.com">TailwindCSS</a>,{" "}
                        <a href="https://www.typescriptlang.org/">Typescript</a>
                        , <a href="https://nodejs.org/">Nodejs</a>,{" "}
                        <a href="https://expressjs.com/">Expressjs</a>{" "}
                    </p>
                    <p>
                        You can find me on{" "}
                        <a href={siteMetadata.github}>Github</a>{" "}
                        where I share tech-related tidbits and build in public .
                        I often write about my findings on my{" "}
                        <Link href="/blog">
                            <a>blog</a>
                        </Link>
                        {". "} You also can connect with me through{" "}
                        <a href={siteMetadata.facebook}>Facebook</a>{" "}
                        or{" "}
                        <a href={siteMetadata.linkedin}>
                            Linkedin
                        </a>
                        .
                    </p>
                </div>
            </div>
            <div className="mt-4 inline-flex w-full md:w-auto">
                <a
                    className="general-ring-state w-full items-center justify-center rounded-full bg-midnight px-4 py-3 text-center text-sm font-medium text-white no-underline dark:bg-gray-200 dark:text-midnight md:px-12 md:text-xl"
                    href={siteMetadata.resume}
                    target="_blank"
                    rel="noreferrer"
                >
                    View my resume
                </a>
            </div>
            <hr className="my-16 h-10 w-full border-none text-center before:text-2xl before:text-[#D1D5DB] before:content-['∿∿∿']"></hr>
            <div className="flex justify-center">{/* <Ad /> */}</div>
            <div className="mt-12 space-y-6">
                <h2 className="m-0 text-gray-900 dark:text-white">Education</h2>
                {/* <p>Here's a brief rundown of my most recent experiences.</p> */}
                <div className="space-y-2 overflow-x-auto">
                    {educations.map((education) => (
                        <div
                            key={education.school}
                            className="group flex items-center space-x-3"
                        >
                            <span className="gover-hover:underline max-w-[85%] flex-none text-gray-900 dark:text-white">
                                {education.school}
                            </span>
                            <span className="w-full shrink border-t border-dashed border-gray-300 dark:border-gray-700"></span>
                            <span className="flex-none">{education.major}</span>
                            <span className="flex-none">
                                {education.duration}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="my-16 h-10 w-full border-none text-center before:text-2xl before:text-[#D1D5DB] before:content-['∿∿∿']"></hr>

            <div className="mt-12 space-y-6">
                <h2 className="m-0 text-gray-900 dark:text-white">Awards</h2>
                {/* <p>Here's a brief rundown of my most recent experiences.</p> */}
                <div className="space-y-2 overflow-x-auto">
                    {awards.map((award) => (
                        <div
                            key={award.name}
                            className="group flex items-center space-x-3"
                        >
                            <span className="gover-hover:underline max-w-[85%] flex-none text-gray-900 dark:text-white">
                                {award.name}
                            </span>
                            <span className="w-full shrink border-t border-dashed border-gray-300 dark:border-gray-700"></span>
                            <span className="flex-none">{award.year}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default About;
