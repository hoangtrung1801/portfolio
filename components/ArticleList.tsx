import { Article, ArticlePreview } from "lib/types";
import React from "react";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
    articles: ArticlePreview[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    return (
        <div className="grid list-none grid-cols-1 gap-8 md:grid-cols-2">
            {articles.map((article) => (
                <ArticleCard key={article.title} article={article} />
            ))}
        </div>
    );
};

export default ArticleList;
