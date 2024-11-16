import React from "react";
import Image from "next/image";

const Service = ({ imageUrl, title, description }) => {
  return (
    <div className="text-center max-w-full sm:max-w-[600px] lg:max-w-[1037px] mx-auto px-4">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-5">
        {title}
      </h2>

      {/* Image */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[688px] rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-lg"
        />
      </div>

      {/* Description */}
      <p className="text-base sm:text-lg lg:text-xl italic mt-5 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Service;
