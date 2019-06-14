import './assets/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './ui/App';
import { StoreProvider } from './ui/Store';

const root = document.getElementById('root');
root &&
    ReactDOM.render(
        <StoreProvider>
            <App />
        </StoreProvider>,
        root
    );
