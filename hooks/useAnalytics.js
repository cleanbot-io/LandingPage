"use client";
import { useEffect } from "react";
import { initHotjar, removeHotjar } from "@/utils/hotjar";
import { initSentry, closeSentry } from "@/utils/sentry";

export const useAnalytics = () => {
  useEffect(() => {
    const handleAnalyticsConsent = () => {
      const hasAnalyticsConsent =
        localStorage.getItem("analyticsConsent") === "true";

      if (hasAnalyticsConsent) {
        initHotjar();
        initSentry();
      } else {
        removeHotjar();
        closeSentry();
      }
    };

    handleAnalyticsConsent();

    const handleStorageChange = (e) => {
      if (e.key === "analyticsConsent") {
        handleAnalyticsConsent();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      removeHotjar();
      closeSentry();
    };
  }, []);
};
