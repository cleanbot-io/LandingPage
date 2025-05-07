"use client";

const HOTJAR_ID = 6389163;
const HOTJAR_VERSION = 6;

export const initHotjar = () => {
  if (typeof window === "undefined") return;

  const hasAnalyticsConsent =
    localStorage.getItem("analyticsConsent") === "true";
  if (!hasAnalyticsConsent) return;

  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: HOTJAR_ID, hjsv: HOTJAR_VERSION };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
};

export const removeHotjar = () => {
  if (typeof window === "undefined") return;

  const script = document.querySelector('script[src*="hotjar"]');
  if (script) {
    script.remove();
  }

  delete window.hj;
  delete window._hjSettings;

  document.cookie.split(";").forEach((cookie) => {
    const [name] = cookie.split("=");
    if (name.trim().startsWith("_hj")) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
  });
};
