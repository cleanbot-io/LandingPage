import "./globals.css";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CookieConsent from "@/components/CookieConsent";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const AnalyticsProvider = dynamic(
  () => import("@/components/AnalyticsProvider").then((mod) => mod.default),
  { ssr: false }
);

export const metadata = {
  title: "Cleabot",
  description: "A house-keeping subscription service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnalyticsProvider />
        <ToastContainer />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
