import React from 'react';
import { shallow } from 'enzyme';
import { ArticleFilter, useArticleFilter } from './ArticleFilter';
import { Spy } from 'spy4js';
import { StoreState } from '../Store';

describe('<ArticleFilter />', () => {
    it('changing the input will be displayed', () => {
        const wrapper = shallow(<ArticleFilter />);

        expect(wrapper.find('input').props().value).toBe('');

        wrapper.find('input').props().onChange!({ preventDefault: () => {}, target: { value: 'foo' } } as any);

        expect(wrapper.find('input').props().value).toBe('foo');
    });
});

describe('useArticleFilter', () => {
    const Mock_StoreState = Spy.mock(StoreState, 'set');

    it('changing the input will be displayed', () => {
        // given
        const preventDefault = new Spy('preventDefault');
        const dummyCb = (() => {}) as any;
        let [value, onChange, onSubmit] = ['foo', dummyCb, dummyCb];
        const DummyComponent = () => {
            [value, onChange, onSubmit] = useArticleFilter();
            return null;
        };

        // when
        shallow(<DummyComponent />);

        // then - initial value
        expect(value).toBe('');

        // when - calling onChange
        onChange({ preventDefault, target: { value: 'bar' } });

        // then
        expect(value).toBe('bar');
        preventDefault.wasNotCalled();

        // when - submitting the current value
        onSubmit({ preventDefault });

        // then
        preventDefault.wasCalled(1);
        Mock_StoreState.set.hasCallHistory({ filter: 'bar' });
    });
});
