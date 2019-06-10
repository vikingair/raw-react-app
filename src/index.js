import './assets/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import { StoreProvider } from './app/Store';

const root = document.getElementById('root');
root &&
    ReactDOM.render(
        <StoreProvider>
            <App />
        </StoreProvider>,
        root
    );
