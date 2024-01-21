import React from 'react';
import checkoutPanelViewWrapper from '../view-wrapper';
import CheckoutButton from './checkout-button';
import { useAppSelector } from '../../../hooks';
import {
    PrizeoutOfferValueOptions,
    selectSelectedGiftCard,
    selectSelectedGiftCardId,
    selectSelectedOffer,
    setSelectedGiftCardId,
} from '../../../slices/offers-slice';
import { Button, GiftCardImage } from '../../common';
import { formatCurrency } from '../../../utils/format-currency';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';

import './checkout.less';

const CheckoutPanelView: React.FC = (): React.ReactElement => {
    const selectedOffer = useAppSelector(selectSelectedOffer);
    const selectedGiftCardId = useAppSelector(selectSelectedGiftCardId);
    const selectedGiftCard = useAppSelector(selectSelectedGiftCard);
    const formattedValue = formatCurrency(selectedGiftCard?.value_in_cents);
    const formattedBonus = formatCurrency(selectedGiftCard?.value_in_cents * 0.25);
    const formattedTotal = formatCurrency(selectedGiftCard?.value_in_cents * 1.25);
    const dispatch = useDispatch<AppDispatch>();

    const giftCardClickHandler = (giftCard: PrizeoutOfferValueOptions) => {
        dispatch(setSelectedGiftCardId(giftCard.checkout_value_id));
    };

    const giftCardOptions = () => {
        return selectedOffer.giftcard_list.map((giftCard) => {
            const formattedValue = formatCurrency(giftCard.value_in_cents);
            const color = selectedGiftCardId == giftCard.checkout_value_id ? `primary` : `tertiary`;
            return (
                <Button
                    ariaLabel={formattedValue}
                    color={color}
                    size="xsmall"
                    text={formattedValue}
                    key={giftCard.checkout_value_id}
                    type="button"
                    onClick={() => giftCardClickHandler(giftCard)}
                />
            );
        });
    };

    return (
        <section className="checkout">
            <div className="grid grid--top-bottom grid--stretch-top">
                <div className="grid__item">
                    <section className="checkout__brand">
                        {selectedOffer && (
                            <>
                                <GiftCardImage imgUrl={selectedOffer.image_url} altText={selectedOffer.name} />
                                <h3>{selectedOffer.name}</h3>
                            </>
                        )}
                    </section>
                </div>
                {selectedOffer && (
                    <div className="grid grid__item">
                        <h4>Select Redemption Amount</h4>
                        <div className="grid grid-three-rows">
                            <div className="grid grid-button grid--four-columns">{giftCardOptions()}</div>
                            <div className="grid-item checkout__costs">
                                <div className="checkout__line">
                                    <h4 className="checkout__cost-text">Redemption Amount</h4>
                                    <h4 className="checkout__cost-text">{formattedValue}</h4>
                                </div>
                                <div className="checkout__line">
                                    <h4 className="checkout__cost-text bonus-text">Prizeout Bonus (+25%)</h4>
                                    <h4 className="checkout__cost-text bonus-text">{formattedBonus}</h4>
                                </div>
                                <div className="checkout__line">
                                    <h4 className="checkout__cost-text">You Get</h4>
                                    <h4 className="checkout__cost-text">{formattedTotal}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="grid__item">
                    <section className="checkout__calculation">
                        <CheckoutButton />
                    </section>
                </div>
            </div>
        </section>
    );
};

export default checkoutPanelViewWrapper(CheckoutPanelView, 'checkout');
