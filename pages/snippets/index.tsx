import Container from "layouts/Container";
import getAllSnippets from "lib/getAllSnippets";
import { GetStaticProps } from "next";
import Link from "next/link";

const Snippets = ({ snippets }) => {
    return (
        <Container title="Snippets - hoangtrung1801">
            <h1>
                <span className="block text-center text-base font-semibold uppercase tracking-wide text-teal-500 dark:text-teal-400">
                    My Snippets
                </span>
                <span className="mx-auto mt-2 block max-w-2xl text-center text-4xl font-bold leading-10 sm:text-5xl">
                    All the code snippets I collected
                </span>
            </h1>
            <div className="grid grid-cols-1 gap-4 prose-headings:m-0 prose-p:mb-2 sm:grid-cols-2 lg:grid-cols-3">
                {snippets.map((snippet) => (
                    <Link key={snippet.Slug} href={`/snippets/${snippet.Slug}`}>
                        <div className="group flex h-44 w-full transform cursor-pointer flex-col rounded-lg border border-gray-100 p-4 shadow transition-all hover:scale-105 hover:shadow-lg dark:border-gray-500">
                            <h3>{snippet.Name}</h3>
                            <p>{snippet.Description}</p>
                            <div className="mt-auto flex flex-wrap space-x-2">
                                {snippet.Tags.map((tag) => (
                                    <div
                                        key={`${snippet.slug}/tag`}
                                        className="duration-400 rounded-lg border border-teal-500 px-2 text-teal-500 transition-all hover:bg-teal-500 hover:text-white"
                                    >
                                        <span className="font-headings text-sm uppercase ">
                                            {tag}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Container>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const snippets = await getAllSnippets();

    return {
        props: { snippets },
        revalidate: 60 * 60 * 12
    };
};

export default Snippets;
