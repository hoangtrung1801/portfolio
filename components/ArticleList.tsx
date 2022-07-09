import { Article } from "lib/types";
import React from "react";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
    articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    return (
        <div className="list-none grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
                <ArticleCard key={article.title} article={article} />
            ))}
        </div>
    );
};

export default ArticleList;
