import Image from "next/image";
import React from "react";

const Care = ({ title,headline, description, imageUrl, reversed = false }) => {
  return (
    <div
      className={`flex gap-10 items-center text-black max-w-[1200px] mx-auto ${
        reversed ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col gap-5">
        <p className="text-5xl">{title}</p>
        <p className="text-xl">{headline}</p>
        <p className="max-w-[425px] text-left">{description}</p>
      </div>
      <div>
        <Image
          width={100000}
          height={100000}
          alt="image"
          objectFit="cover"
          quality={100}
          src={imageUrl}
          className="max-w-[559px] mx-auto h-[477px] rounded-sm"
        />
      </div>
    </div>
  );
};

export default Care;
