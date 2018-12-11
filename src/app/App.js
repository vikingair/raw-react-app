// @flow

import React, { PureComponent } from 'react';
import logo from './logo.svg';
import { Main } from './Main';
import { ArticleFilter } from './article/ArticleFilter';

type AppProps = {||};

class App extends PureComponent<AppProps> {
    render() {
        return (
            <div className="App">
                <header>
                    <img src={logo} alt="logo" />
                    <ArticleFilter />
                </header>
                <Main />
            </div>
        );
    }
}

export default App;
