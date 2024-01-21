import React, { useState } from 'react';
import { Button } from '../../common';

interface APIRequestParams {
    checkout_value_id: string;
    cost_in_cents: number;
    name: string;
    value_in_cents: number;
}

interface CheckoutButtonProps {
    data: APIRequestParams;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ data }): React.ReactElement => {
    const [isLoadingCheckout, setIsLoadingCheckout] = useState(false);
    const buttonText = 'Prizeout Gift Card';

    // Would normally be using something like RTK Query here
    // Mocking an API call to the server with successful response
    const mockAPIRequest = (data: APIRequestParams): Promise<string> => {
        return new Promise((resolve) => {
            console.log('Making checkout request with data', data);
            setTimeout(() => {
                resolve('success');
            }, 1000);
        });
    };

    const buttonHandler = () => {
        setIsLoadingCheckout(true);
        mockAPIRequest(data)
            .then((response) => {
                console.log(response);
                setIsLoadingCheckout(false);
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            <Button
                ariaLabel="Prizeout your gift card"
                color={`primary`}
                onClick={buttonHandler}
                size="medium"
                text={buttonText}
                type="submit"
                isLoading={isLoadingCheckout}
            />
        </>
    );
};

export default CheckoutButton;
