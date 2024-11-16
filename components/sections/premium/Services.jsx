import React from "react";
import Image from "next/image";

const Service = ({ imageUrl, title, description }) => {
  return (
    <div className="text-center max-w-[1037px] mx-auto">
      <h2 className="text-2xl font-bold mb-5">{title}</h2>
      <div className="relative w-full h-[688px] rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-lg  w-[1037px]"
        />
      </div>
      <p className="text-lg italic mt-5 leading-relaxed">{description}</p>
    </div>
  );
};

export default Service;
