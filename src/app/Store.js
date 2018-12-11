// @flow

import React, { Component } from 'react';
import type { ArticleData } from './Webservice';

type State = { articles?: ArticleData[], filter?: string };
const initialState: State = { articles: undefined, filter: undefined };
export const Store = React.createContext<State>(initialState);

export const StoreState = { set: (state: State) => {} };

export class StoreProvider extends Component<{| children: React$Node |}, State> {
    state = initialState;
    setStore = (storeState: State): void => this.setState(storeState);

    componentDidMount = () => (StoreState.set = this.setStore);

    render = () => <Store.Provider value={this.state}>{this.props.children}</Store.Provider>;
}
