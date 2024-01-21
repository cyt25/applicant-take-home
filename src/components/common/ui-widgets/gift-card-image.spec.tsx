import { render, screen } from '../../../testing/test-utils';
import React from 'react';
import '@testing-library/jest-dom';
import { GiftCardImage } from './gift-card-image';

describe('Test Gift Card Image Component', () => {
    const imageUrl = 'https://assets.prizeout.com/widget/global/generic-giftcard.png';

    test('Component matches snapshot', () => {
        const { asFragment } = render(<GiftCardImage imgUrl={imageUrl} />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Disabled class if disabled state is true', () => {
        render(<GiftCardImage imgUrl={imageUrl} isSelected />);

        expect(screen.getByTestId('gift-card-image')).toHaveClass('gift-card-image--selected');
    });
});
