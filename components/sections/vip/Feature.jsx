import Image from "next/image";
import React from "react";

const Feature = ({
  title,
  headline,
  description,
  imageUrl,
  reversed = false,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-10 items-center text-black max-w-[1200px] mx-auto ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div className="flex flex-col gap-5 text-center lg:text-left px-4 lg:px-0">
        <div className="bg-black rounded-full flex items-center justify-center text-white text-center w-full max-w-[300px] h-[39px] mx-auto lg:mx-0">
          {title}
        </div>
        <p className="text-2xl sm:text-3xl lg:text-5xl">{headline}</p>
        <p className="max-w-[425px] mx-auto lg:mx-0 text-lg sm:text-xl">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-[689px] h-auto">
        <Image
          width={689}
          height={673}
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

export default Feature;
