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
      className={`flex gap-10 items-center text-black max-w-[1200px] mx-auto ${
        reversed ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col gap-5">
        <div className="bg-black rounded-full flex items-center justify-center text-white text-center w-[330px] h-[39px]">
          {title}
        </div>
        <p className="text-5xl">{headline}</p>
        <p className="max-w-[425px]">{description}</p>
      </div>
      <div>
        <Image
          width={100000}
          height={100000}
          alt="image"
          objectFit="cover"
          quality={100}
          src={imageUrl}
          className="max-w-[689px] mx-auto h-[673px] rounded-sm"
        />
      </div>
    </div>
  );
};

export default Feature;
