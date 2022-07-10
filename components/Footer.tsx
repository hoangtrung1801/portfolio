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
        // { name: 'Activity', href: '/activity' },
        { name: "Stats", href: "/stats" },
        { name: "Community wall", href: "/community-wall" },
        { name: "Toolbox", href: "/toolbox" }
    ],
    extra: [
        { name: "Changelog", href: "/changelog" },
        { name: "Meet up", href: "/meetup" }
        // { name: 'Books', href: '/books' }
    ],
    social: [
        {
            name: "LinkedIn",
            href: siteMetadata.linkedin,
            icon: (props) => (
                <svg
                    className="w-7 h-7 transform hover:rotate-[-4deg] transition"
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
                    className="w-7 h-7 transform hover:rotate-[-4deg] transition"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    viewBox="0 0 256 256"
                >
                    <rect width="256" height="256" fill="none"></rect>
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
                // <svg
                //     className="w-7 h-7 transform hover:rotate-[-4deg] transition"
                //     viewBox="0 0 24 24"
                //     fill="none"
                //     xmlns="http://www.w3.org/2000/svg"
                // >
                //     <path
                //         d="M4.75 12C4.75 10.7811 5.05079 9.63249 5.58219 8.62429L4.80156 6.0539C4.53964 5.19151 5.46262 4.44997 6.24833 4.89154L8.06273 5.91125C9.1965 5.17659 10.5484 4.75 12 4.75C13.4526 4.75 14.8054 5.17719 15.9396 5.91278L17.7624 4.8911C18.549 4.45014 19.4715 5.19384 19.2075 6.05617L18.42 8.62837C18.95 9.63558 19.25 10.7828 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z"
                //         stroke="currentColor"
                //         strokeWidth="1.5"
                //         strokeLinecap="round"
                //         strokeLinejoin="round"
                //     ></path>
                // </svg>
            )
        },
        {
            name: "Facebook",
            href: siteMetadata.facebook,
            icon: (props) => (
                <svg
                    className="w-7 h-7 transform hover:rotate-[-4deg] transition"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    viewBox="0 0 256 256"
                >
                    <rect width="256" height="256" fill="none"></rect>
                    <circle
                        cx="128"
                        cy="128"
                        r="96"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></circle>
                    <path
                        d="M168,88H152a23.9,23.9,0,0,0-24,24V224"
                        fill="none"
                        stroke="#000000"
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
                        stroke="#000000"
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
                                <h3 className="text-sm font-semibold tracking-wider uppercase">
                                    General
                                </h3>
                                <div role="list" className="mt-4 space-y-4">
                                    {navigation.general.map((item) => (
                                        <Link key={item.name} href={item.href}>
                                            <a className="block text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline">
                                                {item.name}
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold tracking-wider uppercase">
                                    Specifics
                                </h3>
                                <div role="list" className="mt-4 space-y-4">
                                    {navigation.specifics.map((item) => (
                                        <Link key={item.name} href={item.href}>
                                            <a className="block text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline">
                                                {item.name}
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold tracking-wider uppercase">
                                    Extra
                                </h3>
                                <div role="list" className="mt-4 space-y-4">
                                    {navigation.extra.map((item) => (
                                        <Link key={item.name} href={item.href}>
                                            <a className="block text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline">
                                                {item.name}
                                            </a>
                                        </Link>
                                    ))}
                                    <a
                                        target="_blank"
                                        href={siteMetadata.resume}
                                        className="block text-base text-gray-600 no-underline hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline"
                                        rel="noreferrer"
                                    >
                                        Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 mt-8 xl:mt-0">
                        <Contact size={ContactSize.SMALL} />
                        {/* <Subscribe size={SubscribeSize.SMALL} /> */}
                    </div>
                </div>
                <div className="flex items-center justify-between mt-12">
                    <div className="flex items-center order-2 space-x-6">
                        {navigation.social.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-600 dark:text-gray-400 important"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only">{item.name}</span>
                                <item.icon
                                    className="w-6 h-6"
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
