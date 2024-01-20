import React from 'react';
import Classnames from 'classnames';
import PropTypes from 'prop-types';
import { GiftCardImage } from './gift-card-image';
import { constants } from '../../../utils/constants';

import './gift-card.less';

interface GiftCardProps {
    altText?: string;
    className?: string;
    imgUrl?: string;
    isSelected?: boolean;
    name: string;
    value?: number;
}

export const GiftCard: React.FC<GiftCardProps> = ({
    name,
    value,
    imgUrl,
    altText,
    className,
    isSelected,
}): React.ReactElement => {
    const classes: string = Classnames('gift-card', className),
        imageUrl = imgUrl || constants.defaultGiftCardUrl,
        imageAltText = altText || 'Gift Card';

    return (
        <div className={classes}>
            <GiftCardImage imgUrl={imageUrl} altText={imageAltText} isSelected={isSelected} />
            <div className="gift-card__row">
                <p className="gift-card__name">
                    <strong>{name}</strong>
                </p>
                {value && <span className="gift-card__value">{value}</span>}
            </div>
        </div>
    );
};

GiftCard.propTypes = {
    altText: PropTypes.string,
    imgUrl: PropTypes.string,
    isSelected: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.number,
};
