"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import CookieSettings from "./CookieSettings";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const cookieChoice = localStorage.getItem("cookieConsent");
    if (!cookieChoice) {
      setTimeout(() => setShowBanner(true), 500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("analyticsConsent", "true");
    localStorage.setItem("marketingConsent", "true");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    localStorage.setItem("analyticsConsent", "false");
    localStorage.setItem("marketingConsent", "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={`
      fixed bottom-6 right-6 bg-white p-4 shadow-lg z-40
      max-w-sm rounded-lg border border-gray-100
      transform transition-all duration-500 ease-in-out
      ${showBanner ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      hover:shadow-xl
    `}>
      <div className="space-y-3">
        <div className="text-sm text-gray-800">
          <p className="mb-2">
            We use cookies to enhance your experience. By continuing, you agree to our{' '}
            <Link href="/privacy-policy" className="text-blue-600 underline hover:text-blue-800">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center justify-end space-x-3">
          <button
            onClick={() => setShowSettings(true)}
            className="text-sm text-gray-600 hover:text-gray-800 underline"
          >
            Settings
          </button>
          <button
            onClick={handleAccept}
            className="bg-black text-white px-4 py-1.5 text-sm rounded-full hover:opacity-90 transition-opacity"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="border border-gray-300 text-gray-700 px-4 py-1.5 text-sm rounded-full hover:bg-gray-50 transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
      {showSettings && <CookieSettings onClose={() => setShowSettings(false)} />}
    </div>
  );
};

export default CookieConsent;
