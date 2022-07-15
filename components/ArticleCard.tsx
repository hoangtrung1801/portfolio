import { Article, ArticlePreview } from "lib/types";
import Image from "next/image";
import siteMetadata from "@/data/siteMetadata";
import Router from "next/router";

interface ArticleCardProps {
    article: ArticlePreview;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    const handleArticleClicked = () => {};

    return (
        <div>
            {/* <button onClick={() => handleArticleClicked()}> */}
            <a
                className="no-underline"
                href={`${siteMetadata.hashnodeUrl}/${article.slug}`}
                target="_blank"
                rel="noreferrer"
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
                        <span className="text-base font-semibold flex items-center">
                            {new Date(article.dateAdded).toLocaleDateString(
                                "en-us",
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                }
                            )}
                        </span>
                        <span className="text-sm font-light">
                            {article.brief}
                        </span>
                    </div>
                </div>
            </a>
            {/* </button> */}
        </div>
    );
};

export default ArticleCard;
