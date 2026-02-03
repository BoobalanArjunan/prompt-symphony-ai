/**
 * Utility to determine pricing and currency based on user's location (inferred from Timezone).
 * Defaulting to USD for international, INR for India.
 */
export const getCurrencyConfig = () => {
    try {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        // Check for Indian Standard Time zones (FORCE USD FOR DEMO)
        // const isIndian = timeZone === 'Asia/Kolkata' || timeZone === 'Asia/Calcutta' || timeZone === 'IST';
        const isIndian = false; // Forced false to show Foreign view

        if (isIndian) {
            return {
                code: 'INR',
                symbol: '₹',
                monthly: 249,
                yearly: 2499
            };
        }
    } catch (e) {
        console.warn('Timezone detection failed, defaulting to USD', e);
    }

    // Default to International (USD)
    return {
        code: 'USD',
        symbol: '$',
        monthly: 3,
        yearly: 30
    };
};
