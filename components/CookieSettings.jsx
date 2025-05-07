"use client";
import { useState, useEffect } from 'react';
import Portal from './Portal';

const CookieSettings = ({ onClose }) => {
  const [settings, setSettings] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const loadSettings = () => {
      const analyticsConsent = localStorage.getItem('analyticsConsent') === 'true';
      const marketingConsent = localStorage.getItem('marketingConsent') === 'true';
      
      setSettings(prev => ({
        ...prev,
        analytics: analyticsConsent,
        marketing: marketingConsent,
      }));
    };

    loadSettings();
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleToggle = (type) => {
    setSettings(prev => {
      const newSettings = {
        ...prev,
        [type]: !prev[type]
      };
      
      localStorage.setItem(`${type}Consent`, newSettings[type].toString());
      
      if (!newSettings.analytics && !newSettings.marketing) {
        localStorage.setItem('cookieConsent', 'declined');
      } else {
        localStorage.setItem('cookieConsent', 'customized');
      }

      return newSettings;
    });
  };

  const handleSave = () => {
    handleClose();
  };

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <Portal>
      <div 
        className={`
          fixed inset-0 z-50 flex items-end sm:items-center justify-center
          transition-all duration-300
          ${isClosing ? 'animate-fade-out' : 'backdrop-blur-sm bg-black/50'}
        `}
        onClick={handleClickOutside}
      >
        <div 
          className={`
            relative bg-white rounded-t-lg sm:rounded-lg p-4 w-full sm:max-w-md mx-auto
            transform transition-all duration-300 ease-in-out
            ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}
          `}
        >
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close settings"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="pr-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Cookie Settings</h2>
            
            <div className="space-y-4">
              {/* Necessary Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Necessary</h3>
                  <p className="text-xs text-gray-500">Required for basic functionality</p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="h-4 w-4 rounded border-gray-300 cursor-not-allowed opacity-60"
                  />
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Analytics</h3>
                  <p className="text-xs text-gray-500">Help improve our website</p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={settings.analytics}
                    onChange={() => handleToggle('analytics')}
                    className="h-4 w-4 rounded border-gray-300 cursor-pointer"
                  />
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Marketing</h3>
                  <p className="text-xs text-gray-500">Personalized advertisements</p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={settings.marketing}
                    onChange={() => handleToggle('marketing')}
                    className="h-4 w-4 rounded border-gray-300 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm bg-black text-white rounded-full hover:opacity-90 transition-opacity"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default CookieSettings; 