import './assets/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './ui/App';
import { StoreProvider } from './ui/Store';

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById('root')
);
