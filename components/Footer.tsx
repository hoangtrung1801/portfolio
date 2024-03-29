import Link from "next/link";
// import { Subscribe } from './Subscribe';
// import { SubscribeSize } from '@/lib/types';
import siteMetadata from "@/data/siteMetadata";
import Contact from "./Contact";
import { ContactSize } from "lib/types";
import React from "react";

const navigation = {
    general: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" }
    ],
    specifics: [
        // { name: "Stats", href: "/stats" },
        { name: "Snippets", href: "/snippets" }
        // { name: 'Activity', href: '/activity' },
        // { name: "Community wall", href: "/community-wall" },
        // { name: "Toolbox", href: "/toolbox" }
    ],
    extra: [
        { name: "Resume", href: siteMetadata.resume }
        // { name: "Changelog", href: "/changelog" },
        // { name: "Meet up", href: "/meetup" }
        // { name: 'Books', href: '/books' }
    ],
    social: [
        {
            name: "LinkedIn",
            href: siteMetadata.linkedin,
            icon: (props) => (
                <svg
                    className="h-7 w-7 transform transition hover:rotate-[-4deg]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M10.75 16.25V14C10.75 12.7574 11.7574 11.75 13 11.75C14.2426 11.75 15.25 12.7574 15.25 14V16.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M10.75 11.75V16.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M7.75 11.75V16.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M7.75 8.75V9.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            )
        },
        {
            name: "GitHub",
            href: siteMetadata.github,
            icon: (props) => (
                <svg
                    className="h-7 w-7 transform transition hover:rotate-[-4deg]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 256 256"
                >
                    <rect width="256" height="256" fill="none"></rect>
                    <path
                        d="M84,240a23.9,23.9,0,0,0,24-24V168"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></path>
                    <path
                        d="M172,240a23.9,23.9,0,0,1-24-24V168"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></path>
                    <path
                        d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></path>
                    <path
                        d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></path>
                    <path
                        d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></path>
                </svg>
            )
        },
        {
            name: "Facebook",
            href: siteMetadata.facebook,
            icon: (props) => (
                <svg
                    className="h-7 w-7 transform transition hover:rotate-[-4deg]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                >
                    <rect width="256" height="256" fill="none"></rect>
                    <circle
                        cx="128"
                        cy="128"
                        r="96"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></circle>
                    <path
                        d="M168,88H152a23.9,23.9,0,0,0-24,24V224"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></path>
                    <line
                        x1="96"
                        y1="144"
                        x2="160"
                        y2="144"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></line>
                </svg>
            )
        }
    ]
};

const Footer = () => {
    return (
        <>
            <footer>
                <hr />
                <div className="xl:grid xl:grid-cols-4 xl:gap-2">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider">
                                    General
                                </h3>
                                <div role="list" className="mt-4 space-y-4">
                                    {navigation.general.map((item) => (
                                        <Link key={item.name} href={item.href}>
                                            <a className="block text-base text-gray-600 no-underline hover:text-gray-800 hover:underline dark:text-gray-400 dark:hover:text-gray-300">
                                                {item.name}
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold uppercase tracking-wider">
                                    Specifics
                                </h3>
                                <div role="list" className="mt-4 space-y-4">
                                    {navigation.specifics.map((item) => (
                                        <Link key={item.name} href={item.href}>
                                            <a className="block text-base text-gray-600 no-underline hover:text-gray-800 hover:underline dark:text-gray-400 dark:hover:text-gray-300">
                                                {item.name}
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider">
                                    Extra
                                </h3>
                                <div role="list" className="mt-4 space-y-4">
                                    {navigation.extra.map((item) => (
                                        <Link key={item.name} href={item.href}>
                                            <a
                                                className="block text-base text-gray-600 no-underline hover:text-gray-800 hover:underline dark:text-gray-400 dark:hover:text-gray-300"
                                                data-splitbee-event={
                                                    item.name === "Resume"
                                                        ? "View my resume"
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </a>
                                        </Link>
                                    ))}
                                    {/* <a
                                        target="_blank"
                                        href={siteMetadata.resume}
                                        className="block text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline"
                                        rel="noreferrer"
                                    >
                                        Resume
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 mt-8 xl:mt-0">
                        <Contact size={ContactSize.SMALL} />
                        {/* <Subscribe size={SubscribeSize.SMALL} /> */}
                    </div>
                </div>
                <div className="mt-12 flex items-center justify-between">
                    <div className="order-2 flex items-center space-x-6">
                        {navigation.social.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="important text-gray-600 dark:text-gray-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only">{item.name}</span>
                                <item.icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </a>
                        ))}
                    </div>
                    <p className="order-1 text-base">
                        &copy; {new Date().getFullYear()} {siteMetadata.author}
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
