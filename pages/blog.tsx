import ArticleList from "components/ArticleList";
import Tag from "components/Tag";
import Container from "layouts/Container";
import client from "lib/apollo-client";
import getAllPosts from "lib/getAllPosts";
import { GET_POSTS } from "lib/queries";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";

const tags = [
    "all",
    "programming",
    "react",
    "javascript",
    "nodejs",
    "express",
    "html",
    "css",
    "web"
];

interface BlogProps {
    posts: any[];
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
    const [selectedTag, setSelectedTag] = useState<string>("all");

    return (
        <Container title="Blog - hoangtrung1801">
            <h1>
                <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
                    My Blog
                </span>
                <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
                    Insightful and helpful content curated for you.
                </span>
            </h1>
            <div className="relative my-12 flex flex-wrap">
                {tags.map((tag, id) => (
                    <div key={tag} className="p-2">
                        <Tag
                            activeTag={selectedTag}
                            tag={tag}
                            cb={() => setSelectedTag(tag)}
                        />
                    </div>
                ))}
            </div>
            {!posts && (
                <div className="w-full mx-auto rounded-lg bg-[#F8FAFC] dark:bg-midnight p-4">
                    <p className="flex items-center justify-center text-2xl">
                        No articles found{" "}
                        <span>
                            <svg
                                className="ml-3 w-7 h-7"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M8.75 4.75H15.25C17.4591 4.75 19.25 6.54086 19.25 8.75V15.25C19.25 17.4591 17.4591 19.25 15.25 19.25H8.75C6.54086 19.25 4.75 17.4591 4.75 15.25V8.75C4.75 6.54086 6.54086 4.75 8.75 4.75Z"
                                ></path>
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M7.75 15.25C7.75 15.25 9 12.75 12 12.75C15 12.75 16.25 15.25 16.25 15.25"
                                ></path>
                                <circle
                                    cx="14"
                                    cy="10"
                                    r="1"
                                    fill="currentColor"
                                ></circle>
                                <circle
                                    cx="10"
                                    cy="10"
                                    r="1"
                                    fill="currentColor"
                                ></circle>
                            </svg>
                        </span>
                    </p>
                </div>
            )}
            {posts && <ArticleList articles={posts} />}
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const posts = await getAllPosts();

    return {
        props: {
            posts
        }
    };
};

export default Blog;
