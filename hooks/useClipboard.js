"use client";
import { useState } from "react";

export const useClipboard = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 1500);
  };

  return { tooltipVisible, copyToClipboard };
};
