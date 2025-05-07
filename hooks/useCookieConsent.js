import { useState, useEffect } from 'react';

const useCookieConsent = () => {
  const [cookieConsent, setCookieConsent] = useState({
    consent: null,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    const analytics = localStorage.getItem('analyticsConsent') === 'true';
    const marketing = localStorage.getItem('marketingConsent') === 'true';

    setCookieConsent({
      consent,
      analytics,
      marketing,
    });
  }, []);

  const updateConsent = (type, value) => {
    localStorage.setItem(`${type}Consent`, value.toString());
    setCookieConsent(prev => ({
      ...prev,
      [type]: value,
    }));
  };

  return {
    cookieConsent,
    updateConsent,
    hasConsent: cookieConsent.consent !== null,
    // Helper functions to check specific consent
    hasAnalyticsConsent: cookieConsent.analytics,
    hasMarketingConsent: cookieConsent.marketing,
  };
};

export default useCookieConsent; 