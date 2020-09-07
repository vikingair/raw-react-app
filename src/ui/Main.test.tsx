import React from 'react';
import { render, act } from '@testing-library/react';
import { Main } from './Main';
import { StoreProvider } from './Store';
import { Spy } from 'spy4js';
import { Webservice } from '../services/Webservice';
import { mount } from 'enzyme';
import { IconSpinner } from '../icons/icon';
import { ArticleList } from './article/ArticleList';
import { Mock } from '../services/mocks';

Spy.mockReactComponents('./article/ArticleList', 'ArticleList');

const Mock$Webservice = Spy.mock(Webservice, 'getArticles');

describe('<Main />', () => {
    beforeEach(() => {
        Mock$Webservice.getArticles.resolves(Mock.articles);
    });

    it('REACT-TESTING_LIBRARY: displays a spinner while loading the articles', async () => {
        const { container } = render(
            <StoreProvider>
                <Main />
            </StoreProvider>
        );

        Mock$Webservice.getArticles.wasCalled(1);
        expect(container.querySelector('main')).toHaveClass('loading');

        await act(global.nextTick);

        Mock$Webservice.getArticles.wasCalled(1);
        expect(container.querySelector('main')).not.toHaveClass('loading');
    });

    it('ENZYME: displays a spinner while loading the articles', async () => {
        const wrapper = mount(
            <StoreProvider>
                <Main />
            </StoreProvider>
        );
        wrapper.setProps({});

        Mock$Webservice.getArticles.wasCalled(1);
        expect(wrapper.find(IconSpinner).length).toBe(1);
        expect(wrapper.find(ArticleList).length).toBe(0);

        await act(global.nextTick);
        wrapper.update();

        Mock$Webservice.getArticles.wasCalled(1);
        expect(wrapper.find(IconSpinner).length).toBe(0);
        expect(wrapper.find(ArticleList).length).toBe(1);
    });
});
