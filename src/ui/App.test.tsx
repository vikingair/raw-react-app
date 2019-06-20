import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';

describe('App', () => {
    it('renders the content', () => {
        expect(shallow(<App />)).toMatchInlineSnapshot(`
            <div
              className="App"
            >
              <header>
                <img
                  alt="logo"
                  src="logo.svg"
                />
                <ArticleFilter />
              </header>
              <Main />
            </div>
        `);
    });
});
