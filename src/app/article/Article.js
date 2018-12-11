// @flow

import React from 'react';
import { type ArticleData } from '../Webservice';

type ArticleProps = {| data: ArticleData |};

export const Article = ({ data }: ArticleProps): React$Node => (
    <div>
        <img src={`https://cdn.pixabay.com/photo${data.cover}`} alt="cover" style={{ width: '100%' }} />
        <div>Title: {data.title}</div>
        <div>Authors: {data.authors}</div>
    </div>
);
