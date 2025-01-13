import React from "react";
import SuccessIcon from "@/components/icons/SuccessIcon";
import ClipboardButton from "@/components/ClipboardButton";
import { truncateString } from "@/lib/utils";
import { fetchSessionDetails } from "@/lib/stripe";

export default async function SuccessPage({ searchParams }) {
  const sessionId = searchParams?.session_id;

  // Validate session ID
  if (!sessionId) {
    return (
      <div>
        <p>Invalid session. Redirecting...</p>
        <meta httpEquiv="refresh" content="2;url=/" />
      </div>
    );
  }

  let sessionData;

  try {
    // Fetch session details from Stripe
    sessionData = await fetchSessionDetails(sessionId);
  } catch (error) {
    console.error("Error fetching session data:", error);
    return (
      <div>
        <p>Session not found. Redirecting...</p>
        <meta httpEquiv="refresh" content="2;url=/" />
      </div>
    );
  }

  // Destructure session data
  const { productName, amount, paymentId } = sessionData;

  // Truncate Payment ID with beautified logic
  const truncatedPaymentId = truncateString(paymentId, 16);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500 text-white">
      <div className="max-w-2xl p-8 bg-white rounded-lg shadow-lg text-gray-800">
        <div className="text-center flex flex-col items-center justify-center">
          <SuccessIcon />
          <h1 className="text-3xl font-bold mt-4">Payment Successful!</h1>
          <p className="mt-2 text-gray-600">
            Thank you for your purchase! Here are the details of your order:
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center border-b py-3">
            <span className="text-lg font-medium">Product:</span>
            <span>{productName}</span>
          </div>
          <div className="flex justify-between items-center border-b py-3">
            <span className="text-lg font-medium">Amount Paid:</span>
            <span>${(amount / 100).toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center border-b py-3 relative">
            <span className="text-lg font-medium">Payment ID:</span>
            <ClipboardButton
              textToCopy={paymentId} // Full Payment ID for copying
              truncatedText={truncatedPaymentId} // Beautified Truncated ID
            />
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="/"
            className="px-6 py-3 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
