import siteMetadata from "@/data/siteMetadata";
import Footer from "components/Footer";
import NavMenu from "components/NavMenu";
import { PageTransition } from "components/PageTransition";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    showCircles?: boolean;
    title?: string;
}

const Container: React.FC<ContainerProps> = ({
    children,
    showCircles,
    title
}) => {
    const router = useRouter();

    return (
        <div
            className={`bg-white dark:bg-dark min-h-screen ${
                showCircles && "overflow-hidden"
            }`}
        >
            <Head>
                <title>{title || siteMetadata.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={siteMetadata.description} name="description" />
                <meta
                    property="og:url"
                    content={`${siteMetadata.siteUrl}${router.asPath}`}
                />
                <meta name="application-name" content="&nbsp;" />
                <meta property="og:type" content={"website"} />
                <meta property="og:site_name" content="hoangtrung1801" />
                <meta
                    property="og:description"
                    content={siteMetadata.description}
                />
                <meta property="og:title" content={siteMetadata.title} />
                <meta property="og:image" content={siteMetadata.avatarImage} />
            </Head>
            <NavMenu />
            <main
                className={`flex flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:bg-dark prose prose-lg dark:prose-dark relative`}
            >
                {showCircles && (
                    <div className="absolute top-0 left-0 right-0">
                        <div className="absolute top-0 overflow-visible opacity-50 dark:opacity-30 left-16">
                            <div className="mix-blend-multiply absolute w-[700px] h-[900px] rounded-[40rem] circle-obj"></div>
                        </div>

                        <div className="absolute overflow-visible opacity-50 dark:opacity-30 top-28 left-52">
                            <div className="mix-blend-multiply absolute w-[600px] h-[600px] rounded-[40rem] circle-obj2"></div>
                        </div>
                    </div>
                )}
                <div className="z-10">
                    <PageTransition>{children}</PageTransition>
                </div>
                <Footer />
            </main>
        </div>
    );
};

export default Container;
