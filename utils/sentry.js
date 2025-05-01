import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN =
  "https://8fe64cb3fd369b2cdbdb96e280472b5b@o4509247206785024.ingest.us.sentry.io/4509247208030208";

export const initSentry = () => {
  if (typeof window === "undefined") return;

  const hasAnalyticsConsent =
    localStorage.getItem("analyticsConsent") === "true";
  if (!hasAnalyticsConsent) return;

  Sentry.init({
    dsn: SENTRY_DSN,

    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    enabled: process.env.NODE_ENV === "development",
  });
};

export const closeSentry = () => {
  if (typeof window === "undefined") return;

  Sentry.close();
};
