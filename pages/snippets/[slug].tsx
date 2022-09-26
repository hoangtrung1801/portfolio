import Container from "layouts/Container";
import getAllSnippets from "lib/getAllSnippets";
import getSnippetPage from "lib/getSnippetPage";
import { GetStaticPaths, GetStaticProps } from "next";
import { NotionRenderer } from "react-notion";
import "prismjs/themes/prism-tomorrow.css";

const SnippetPage = ({ snippet, snippetPage }) => {
    return (
        <Container title={""}>
            {snippet && snippetPage && (
                <>
                    <h1>
                        <span className="block text-center text-base font-semibold uppercase tracking-wide text-teal-500 dark:text-teal-400">
                            Snippet
                        </span>
                        <span className="mx-auto mt-2 block max-w-2xl text-center text-4xl font-bold leading-10 sm:text-5xl">
                            {snippet.Name}
                        </span>
                        <span className="mx-auto mt-1 block text-center text-sm font-medium leading-10 text-gray-500 dark:text-gray-400">
                            {snippet.Description}
                        </span>
                    </h1>
                    <NotionRenderer blockMap={snippetPage} />
                </>
            )}
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
        paths: paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
    const snippets: any[] = await getAllSnippets();
    const snippet = snippets.find((snippet) => snippet.Slug === slug);
    const snippetPage = await getSnippetPage(snippet.id);

    return {
        props: { snippet, snippetPage },
        revalidate: 43200
    };
};

export default SnippetPage;
