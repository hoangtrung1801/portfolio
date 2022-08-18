import Container from "layouts/Container";
import getAllSnippets from "lib/getAllSnippets";
import { GetStaticProps } from "next";
import Link from "next/link";

const Snippets = ({ snippets }) => {
    return (
        <Container title="Snippets - hoangtrung1801">
            <h1>
                <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
                    My Snippets
                </span>
                <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
                    All the code snippets I collected
                </span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 prose-headings:m-0 prose-p:mb-2">
                {snippets.map((snippet) => (
                    <Link key={snippet.Slug} href={`/snippets/${snippet.Slug}`}>
                        <div className="w-full h-44 p-4 flex flex-col group border border-gray-100 dark:border-gray-500 transform transition-all hover:scale-105 shadow hover:shadow-lg rounded-lg cursor-pointer">
                            <h3>{snippet.Name}</h3>
                            <p>{snippet.Description}</p>
                            <div className="mt-auto space-x-2 flex flex-wrap">
                                {snippet.Tags.map((tag) => (
                                    <div
                                        key={`${snippet.slug}/tag`}
                                        className="border border-teal-500 rounded-lg px-2 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-400"
                                    >
                                        <span className="uppercase text-sm font-headings ">
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
