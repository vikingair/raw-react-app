// @flow

import { Icon } from './icon';

describe('Icon', () => {
    it('renders with additional className', () => {
        const iconAdd = Icon.Search();
        expect(iconAdd.type).toBe('svg');
        expect(iconAdd.props.className).toBe('icon');

        const iconBarCode = Icon.Spinner({ className: 'spinner' });
        expect(iconBarCode.type).toBe('svg');
        expect(iconBarCode.props.className).toBe('spinner icon');
    });
});
