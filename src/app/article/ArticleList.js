// @flow

import React from 'react';
import { Article } from './Article';
import { type ArticleData } from '../Webservice';

type ArticleListProps = {| articles: ArticleData[] |};

export const ArticleList = ({ articles }: ArticleListProps): React$Node => (
    <div className="article-list">
        {articles.map((data, index) => (
            <Article data={data} key={index} />
        ))}
    </div>
);
