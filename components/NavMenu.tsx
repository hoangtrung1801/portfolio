import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import siteMetadata from "@/data/siteMetadata";
import { Dialog } from "@headlessui/react";

function NavItem({ href, text }) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <NextLink href={href}>
            <a
                className={`${
                    isActive
                        ? "font-bold text-gray-900 dark:text-gray-200"
                        : "font-normal text-gray-600 dark:text-gray-400"
                } 'hidden rounded-full p-1 transition-all hover:bg-gray-100 dark:hover:bg-midnight sm:px-6 sm:py-2 md:inline-block`}
            >
                <span
                    className={`${
                        isActive
                            ? "border-b-2 border-teal-400 py-1 dark:border-teal-500"
                            : "capsize"
                    }`}
                >
                    {text}
                </span>
            </a>
        </NextLink>
    );
}

const NavMenu = () => {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    return (
        <div className="relative z-50 text-gray-900 dark:text-gray-100">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <span className="sr-only">Profile Picture</span>
                    <Image
                        alt={siteMetadata.name}
                        height={48}
                        width={48}
                        src={siteMetadata.avatarImage}
                        placeholder="blur"
                        blurDataURL={siteMetadata.avatarImage}
                        className="rounded-full"
                    />
                </div>
                <div
                    className="-my-2 -mr-2 md:hidden"
                    onClick={() => setIsOpen(true)}
                >
                    <div className="general-ring-state inline-flex cursor-pointer items-center justify-center rounded-full bg-gray-200 p-3.5 text-gray-600 hover:bg-gray-300 hover:text-gray-700 focus:outline-none dark:bg-midnight dark:text-gray-300">
                        <span className="sr-only">Open menu</span>
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M4.75 5.75H19.25"
                            ></path>
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M4.75 18.25H19.25"
                            ></path>
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M4.75 12H19.25"
                            ></path>
                        </svg>
                    </div>
                </div>
                <nav className="hidden space-x-6 text-lg md:flex">
                    <NavItem href="/" text="Home" />
                    <NavItem href="/about" text="About" />
                    <NavItem href="/projects" text="Projects" />
                    <NavItem href="/blog" text="Blog" />
                    {/* <NavItem href="/community-wall" text="Community wall" /> */}
                </nav>
                <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                    <button
                        aria-label="Toggle Dark Mode"
                        type="button"
                        className="general-ring-state flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 dark:bg-midnight"
                        onClick={() =>
                            setTheme(
                                resolvedTheme === "dark" ? "light" : "dark"
                            )
                        }
                    >
                        {mounted && (
                            <div>
                                {resolvedTheme === "dark" ? (
                                    <svg
                                        className="h-7 w-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="3.25"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                        ></circle>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M12 2.75V4.25"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M17.25 6.75L16.0659 7.93416"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M21.25 12.0001L19.75 12.0001"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M17.25 17.2501L16.0659 16.066"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M12 19.75V21.25"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M7.9341 16.0659L6.74996 17.25"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M4.25 12.0001L2.75 12.0001"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M7.93405 7.93423L6.74991 6.75003"
                                        ></path>
                                    </svg>
                                ) : (
                                    <svg
                                        className="h-7 w-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z"
                                        ></path>
                                    </svg>
                                )}
                            </div>
                        )}
                    </button>
                </div>
            </div>

            {/* Conditional rendering here to ensure that dialog portal isn't removed on route change. */}
            {isOpen && (
                <Dialog
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className="fixed inset-0 z-50 md:hidden"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80" />

                    <div className="dark:highlight-white/5 fixed top-4 right-4 w-full max-w-xs rounded-lg bg-white p-6 text-base font-semibold text-gray-900 shadow-lg dark:bg-gray-800 dark:text-gray-400">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                        >
                            <span className="sr-only">Close navigation</span>
                            <svg
                                viewBox="0 0 10 10"
                                className="h-2.5 w-2.5 overflow-visible"
                                aria-hidden="true"
                            >
                                <path
                                    d="M0 0L10 10M10 0L0 10"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                ></path>
                            </svg>
                        </button>
                        <ul className="space-y-6">
                            <li>
                                <NextLink href="/">
                                    <a className="hover:text-teal-400 dark:hover:text-teal-500">
                                        Home
                                    </a>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/about">
                                    <a className="hover:text-teal-400 dark:hover:text-teal-500">
                                        About
                                    </a>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/projects">
                                    <a className="hover:text-teal-400 dark:hover:text-teal-500">
                                        Projects
                                    </a>
                                </NextLink>
                            </li>
                            <li>
                                <NextLink href="/blog">
                                    <a className="hover:text-teal-400 dark:hover:text-teal-500">
                                        Blog
                                    </a>
                                </NextLink>
                            </li>
                            {/* <li>
                                <NextLink href="/community-wall">
                                    <a className="hover:text-teal-400 dark:hover:text-teal-500">
                                        Community wall
                                    </a>
                                </NextLink>
                            </li> */}
                        </ul>
                        <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-200/10">
                            <button
                                aria-label="Toggle Dark Mode"
                                type="button"
                                className="general-ring-state flex w-full items-center justify-center rounded-full bg-gray-200 py-3 dark:bg-midnight-hover"
                                onClick={() =>
                                    setTheme(
                                        resolvedTheme === "dark"
                                            ? "light"
                                            : "dark"
                                    )
                                }
                            >
                                {mounted && (
                                    <>
                                        <div>
                                            {resolvedTheme === "dark" ? (
                                                <svg
                                                    className="h-7 w-7"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        r="3.25"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                    ></circle>
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M12 2.75V4.25"
                                                    ></path>
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M17.25 6.75L16.0659 7.93416"
                                                    ></path>
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M21.25 12.0001L19.75 12.0001"
                                                    ></path>
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M17.25 17.2501L16.0659 16.066"
                                                    ></path>
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M12 19.75V21.25"
                                                    ></path>
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M7.9341 16.0659L6.74996 17.25"
                                                    ></path>
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M4.25 12.0001L2.75 12.0001"
                                                    ></path>
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M7.93405 7.93423L6.74991 6.75003"
                                                    ></path>
                                                </svg>
                                            ) : (
                                                <svg
                                                    className="h-7 w-7"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z"
                                                    ></path>
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z"
                                                    ></path>
                                                </svg>
                                            )}
                                        </div>
                                        {resolvedTheme === "dark" ? (
                                            <p className="ml-3 font-semibold">
                                                Change to light theme
                                            </p>
                                        ) : (
                                            <p className="ml-3 font-semibold">
                                                Change to dark theme
                                            </p>
                                        )}
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </Dialog>
            )}
        </div>
    );
};

export default NavMenu;
