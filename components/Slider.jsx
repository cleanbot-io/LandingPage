"use client"
import React, { useRef, useState } from "react";

const TouchableCarousel = ({ children }) => {
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    setIsDragging(true);
    const touchEndX = e.touches[0].clientX;
    const distance = touchStartX.current - touchEndX;

    if (carouselRef.current) {
      carouselRef.current.scrollLeft += distance;
    }

    touchStartX.current = touchEndX; // Update for smooth scrolling
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={carouselRef}
      className="flex overflow-x-scroll no-scrollbar"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {React.Children.map(children, (child) => (
        <div className="flex-shrink-0 w-full sm:w-auto">{child}</div>
      ))}
    </div>
  );
};

export default TouchableCarousel;
