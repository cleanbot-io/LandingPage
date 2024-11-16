import Image from "next/image";
import React from "react";

const Care = ({ title, headline, description, imageUrl, reversed = false }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-10 items-center text-black max-w-[1200px] mx-auto px-4 ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div className="flex flex-col gap-5 text-center lg:text-left">
        <p className="text-2xl sm:text-3xl lg:text-5xl">{title}</p>
        <p className="text-lg sm:text-xl">{headline}</p>
        <p className="text-base sm:text-lg lg:text-xl max-w-full lg:max-w-[425px] mx-auto lg:mx-0 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-[559px] h-auto">
        <Image
          width={559}
          height={477}
          alt={title}
          objectFit="cover"
          quality={100}
          src={imageUrl}
          className="w-full h-auto rounded-sm"
        />
      </div>
    </div>
  );
};

export default Care;
