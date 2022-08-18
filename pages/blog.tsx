import ArticleList from "components/ArticleList";
import Tag from "components/Tag";
import Container from "layouts/Container";
import getAllPosts from "lib/getAllPosts";
import { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";

const tags = [
    "all",
    // "programming",
    "reactjs",
    "javascript",
    "nodejs",
    "express",
    "nextjs",
    "tailwind-css",
    "web-development"
];

interface BlogProps {
    posts: any[];
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
    const [selectedTag, setSelectedTag] = useState<string>("all");
    const [selectedPosts, setSelectedPosts] = useState<Array<any>>(posts);

    useEffect(() => {
        setSelectedPosts(
            posts.filter((post) => {
                const tags = post.tags.map((tag) => tag.slug);
                return selectedTag === "all"
                    ? true
                    : tags.includes(selectedTag);
            })
        );
    }, [posts, selectedTag]);

    return (
        <Container title="Blog - hoangtrung1801">
            <h1>
                <span className="block text-center text-base font-semibold uppercase tracking-wide text-teal-500 dark:text-teal-400">
                    My Blog
                </span>
                <span className="mx-auto mt-2 block max-w-2xl text-center text-4xl font-bold leading-10 sm:text-5xl">
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
            {/* Show when have no article */}
            {!posts && (
                <div className="mx-auto w-full rounded-lg bg-[#F8FAFC] p-4 dark:bg-midnight">
                    <p className="flex items-center justify-center text-2xl">
                        No articles found{" "}
                        <span>
                            <svg
                                className="ml-3 h-7 w-7"
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
            {posts && <ArticleList articles={selectedPosts} />}
        </Container>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const posts = await getAllPosts();

    return {
        props: {
            posts
        },
        // generate every 12h
        revalidate: 60 * 60 * 12
    };
};

export default Blog;
