import { Article, ArticlePreview } from "lib/types";
import Image from "next/image";
import siteMetadata from "@/data/siteMetadata";

interface ArticleCardProps {
    article: ArticlePreview;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    return (
        <div>
            <button
            // onClick={() => handleArticleClicked(slug)}
            >
                <div className="group">
                    <Image
                        className="rounded-xl group-hover:opacity-75"
                        objectFit="cover"
                        src={article.coverImage}
                        placeholder="blur"
                        blurDataURL={article.coverImage}
                        width={800}
                        height={400}
                        layout="intrinsic"
                        alt={"article cover"}
                    />
                    <div className="text-left w-full">
                        <h3 className="mt-2 text-2xl">{article.title}</h3>
                        {/* {JSON.stringify(article)} */}
                        {/* <p>{article.summary}</p> */}
                        <span className="text-base font-semibold flex items-center">
                            {new Date(article.dateAdded).toLocaleDateString(
                                "en-us",
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                }
                            )}
                            {/* {hasRead && (
                                <span className="text-sm inline-flex items-center text-teal-600 dark:text-teal-800 opacity-75 ml-3">
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
                                            d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
                                        ></path>
                                    </svg>
                                    <span>read</span>
                                </span>
                            )} */}
                        </span>
                        <span className="text-sm font-light">
                            {article.brief}
                        </span>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default ArticleCard;
