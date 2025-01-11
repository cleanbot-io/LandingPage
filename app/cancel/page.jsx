import React from "react";
import CancelIcon from "@/components/icons/CancelIcon";
import { fetchSessionDetails } from "@/lib/stripe";

export default async function CancelPage({ searchParams }) {
  const sessionId = searchParams?.session_id;

  // Redirect to home if no session ID is provided
  if (!sessionId) {
    return (
      <div>
        <p>Invalid session. Redirecting...</p>
        <meta httpEquiv="refresh" content="0;url=/" />
      </div>
    );
  }

  let sessionData;

  try {
    sessionData = await fetchSessionDetails(sessionId);
  } catch (error) {
    console.error("Error fetching session data:", error);
    return (
      <div>
        <p>Session not found. Redirecting...</p>
        <meta httpEquiv="refresh" content="0;url=/" />
      </div>
    );
  }

  const { productName, amount } = sessionData;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-400 to-orange-500 text-white">
      <div className="max-w-2xl p-8 bg-white rounded-lg shadow-lg text-gray-800">
        <div className="text-center flex flex-col justify-center items-center">
          <CancelIcon />
          <h1 className="text-3xl font-bold mt-4">Payment Cancelled</h1>
          <p className="mt-2 text-gray-600">
            Your payment was not completed. You can try again or return to the
            homepage.
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center border-b py-3">
            <span className="text-lg font-medium">Product:</span>
            <span>{productName}</span>
          </div>
          <div className="flex justify-between items-center border-b py-3">
            <span className="text-lg font-medium">Amount:</span>
            <span>${(amount / 100).toFixed(2)}</span>
          </div>
        </div>
        <div className="text-center mt-8 space-y-4 space-x-5">
          <a
            href="/"
            className="px-6 py-3 bg-gray-500 text-white rounded-full shadow hover:bg-gray-600 transition"
          >
            Go to Homepage
          </a>
          <a
            href="/retry"
            className="px-6 py-3 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition"
          >
            Retry Payment
          </a>
        </div>
      </div>
    </div>
  );
}
