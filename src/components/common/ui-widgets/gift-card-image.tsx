import React from 'react';
import Classnames from 'classnames';
import PropTypes from 'prop-types';

import './gift-card-image.less';

interface GiftCardImageProps {
    altText?: string;
    imgUrl: string;
    isSelected?: boolean;
}

export const GiftCardImage: React.FC<GiftCardImageProps> = ({ imgUrl, altText, isSelected }): React.ReactElement => {
    const classes: string = Classnames('gift-card-image', { 'gift-card-image--selected': isSelected }),
        imageAltText = altText || 'Gift Card';

    return (
        <div data-testid="gift-card-image" className={classes}>
            <div className="gift-card-image__wrapper">
                <img className="gift-card-image__image" src={imgUrl} alt={imageAltText} />
                <div className="gift-card-image__clear-overlay"></div>
            </div>
        </div>
    );
};

GiftCardImage.propTypes = {
    altText: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
};
