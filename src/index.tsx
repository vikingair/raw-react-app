import './assets/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './ui/App';
import { StoreProvider } from './ui/Store';
import { Demo } from './demo/Demo';

const Content = localStorage.getItem('demo') ? Demo : App;

ReactDOM.render(
    <StoreProvider>
        <Content />
    </StoreProvider>,
    document.getElementById('root')
);
