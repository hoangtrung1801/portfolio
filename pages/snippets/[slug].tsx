import Container from "layouts/Container";
import getAllSnippets from "lib/getAllSnippets";
import getSnippetPage from "lib/getSnippetPage";
import { GetStaticPaths, GetStaticProps } from "next";
import { NotionRenderer } from "react-notion";
import "prismjs/themes/prism-tomorrow.css";

const SnippetPage = ({ snippet, snippetPage }) => {
    return (
        <Container title={""}>
            <h1>
                <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
                    Snippet
                </span>
                <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
                    {snippet.Name}
                </span>
                <span className="block mx-auto mt-1 text-sm text-gray-500 dark:text-gray-400 text-center leading-10 font-medium">
                    {snippet.Description}
                </span>
            </h1>
            <NotionRenderer blockMap={snippetPage} />
        </Container>
    );
};

export const getStaticPaths: GetStaticPaths = async ({}) => {
    const snippets = await getAllSnippets();
    const paths = snippets.map((snippet) => {
        return {
            params: {
                slug: snippet.Slug
            }
        };
    });

    return {
        paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
    const snippets: any[] = await getAllSnippets();
    const snippet = snippets.find((snippet) => snippet.Slug === slug);
    const snippetPage = await getSnippetPage(snippet.id);

    return {
        props: { snippet, snippetPage }
    };
};

export default SnippetPage;
