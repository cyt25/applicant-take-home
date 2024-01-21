export const formatCurrency = (value: number): string =>
    new Intl.NumberFormat('en-US', {
        currency: 'USD',
        style: 'currency',
    }).format(value / 100);
