// @flow

import React, { Component } from 'react';
import { ArticleList } from './article/ArticleList';
import { type ArticleData, Webservice } from './Webservice';
import { Icon } from '../icons/icon';
import { Store, StoreState } from './Store';

type MainProps = {| articles?: ArticleData[], filter?: string |};

export class MainContainer extends Component<MainProps> {
    componentDidMount = async () => {
        const articles = await Webservice.getArticles();
        StoreState.set({ articles });
    };

    render = () => {
        const { articles, filter } = this.props;

        if (!articles)
            return (
                <main className="loading">
                    <Icon.Spinner className="big-spinner" />
                </main>
            );

        return (
            <main>
                <ArticleList articles={articles.filter(a => !filter || a.title.indexOf(filter) !== -1)} />
            </main>
        );
    };
}

export const Main = () => (
    <Store.Consumer>{state => <MainContainer articles={state.articles} filter={state.filter} />}</Store.Consumer>
);
