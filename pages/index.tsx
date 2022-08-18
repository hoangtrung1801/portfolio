import siteMetadata from "data/siteMetadata";
import { Button } from "components/Button";
import Container from "layouts/Container";
import { ButtonType, ContactSize } from "lib/types";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Contact from "components/Contact";

const Home: NextPage = () => {
    const { push } = useRouter();

    return (
        <Container showCircles>
            <div>
                <div>
                    <div className="mt-12 grid grid-cols-1 items-center text-center md:mt-24 md:grid-cols-6 md:text-left">
                        <h1 className="order-2 col-span-5 text-4xl leading-tight sm:text-5xl md:order-1 md:leading-normal">
                            I{"'"}m{" "}
                            <span className="text-teal-500 dark:text-teal-400">
                                {siteMetadata.name}
                            </span>
                            . I{"'"}m a software engineer, full-stack developer
                            working as a freelancer.
                            <span className="inline-flex items-center">👋</span>
                        </h1>
                        <div className="order-1 md:order-2">
                            <Image
                                alt="Braydon Coyer"
                                height={160}
                                width={160}
                                src={siteMetadata.avatarImage}
                                placeholder="blur"
                                blurDataURL={siteMetadata.avatarImage}
                                className="col-span-1 rounded-full"
                                layout="fixed"
                            />
                        </div>
                    </div>
                    <div className="space-y-6 md:space-y-0 md:space-x-4">
                        <Button
                            buttonType={ButtonType.PRIMARY}
                            onButtonClick={() => push("/blog")}
                        >
                            Read the blog
                        </Button>
                        <Button
                            buttonType={ButtonType.SECONDARY}
                            onButtonClick={() => push("/about")}
                        >
                            More about me
                        </Button>
                    </div>
                </div>
                <hr className="hr"></hr>
                <div>
                    {/* <h2>I love to share my knowledge through writing.</h2>
                    <p>Check out a few of my most recent publishings.</p>
                    <ArticleList articles={recentArticles} />
                    <div className="my-16">
                        <Button
                            buttonType={ButtonType.PRIMARY}
                            onButtonClick={() => push("/blog")}
                        >
                            See all articles
                        </Button>
                    </div> */}
                    <div className="mt-16">
                        {/* <Subscribe size={SubscribeSize.LARGE} /> */}
                        <Contact size={ContactSize.LARGE} />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Home;
