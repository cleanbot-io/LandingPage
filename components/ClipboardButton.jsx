"use client";

import { useState } from "react";
import CopyIcon from "@/components/icons/CopyIcon";

export default function ClipboardButton({ textToCopy, truncatedText }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy); // Full Payment ID
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 1500); // Hide tooltip after 1.5 seconds
  };

  return (
    <div className="relative flex items-center">
      <span className="truncate text-gray-700">{truncatedText}</span>{" "}
      {/* Beautified Truncated ID */}
      <button
        onClick={handleCopyToClipboard}
        aria-label="Copy to Clipboard"
        className="relative ml-2 flex items-center"
      >
        <CopyIcon />
      </button>
      {tooltipVisible && (
        <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-lg py-1 px-2 shadow-md">
          Copied!
        </div>
      )}
    </div>
  );
}
