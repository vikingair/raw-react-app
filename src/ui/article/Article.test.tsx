import React from 'react';
import { shallow } from 'enzyme';
import { Article } from './Article';

describe('Article', () => {
    it('uses correct image src', () => {
        const wrapper = shallow(<Article data={{ cover: '/foo', title: 'test-title', authors: 'test-authors' }} />);

        const image = wrapper.find('img');
        expect(image.props().src).toBe('https://cdn.pixabay.com/photo/foo');
    });
});
