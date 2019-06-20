import React from 'react';
import { shallow } from 'enzyme';
import { ArticleFilter } from './ArticleFilter';

describe('<ArticleFilter />', () => {
    it('changing the input will be displayed', () => {
        const wrapper = shallow(<ArticleFilter />);

        expect(wrapper.find('input').props().value).toBe('');

        (wrapper.find('input') as any).props().onChange({ preventDefault: () => {}, target: { value: 'foo' } });

        expect(wrapper.find('input').props().value).toBe('foo');
    });
});
