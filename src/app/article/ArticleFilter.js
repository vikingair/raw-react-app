// @flow

import React, { Component } from 'react';
import { Icon } from '../../icons/icon';
import { StoreState } from '../Store';

type ArticleFilterProps = {||};
type ArticleFilterState = { value: string };

export class ArticleFilter extends Component<ArticleFilterProps, ArticleFilterState> {
    state: ArticleFilterState = { value: '' };

    onChange = (event: any) => event.preventDefault() || this.setState({ value: event.target.value });

    submit = (event: any) => {
        event.preventDefault();
        StoreState.set({ filter: this.state.value });
    };

    render = () => {
        const { value } = this.state;

        return (
            <div className="article-filter">
                <form onSubmit={this.submit}>
                    <input type="text" value={value} onChange={this.onChange} placeholder="Filter for..." />
                    <button>
                        <Icon.Search />
                    </button>
                </form>
            </div>
        );
    };
}
