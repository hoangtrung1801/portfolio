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
            className={`min-h-screen bg-white dark:bg-dark ${
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
                className={`prose prose-lg relative mx-auto flex max-w-6xl flex-col justify-center bg-white px-4 dark:prose-dark dark:bg-dark`}
            >
                {showCircles && (
                    <div className="absolute top-0 left-0 right-0">
                        <div className="absolute top-0 left-16 overflow-visible opacity-50 dark:opacity-30">
                            <div className="circle-obj absolute h-[900px] w-[700px] rounded-[40rem] mix-blend-multiply"></div>
                        </div>

                        <div className="absolute top-28 left-52 overflow-visible opacity-50 dark:opacity-30">
                            <div className="circle-obj2 absolute h-[600px] w-[600px] rounded-[40rem] mix-blend-multiply"></div>
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
