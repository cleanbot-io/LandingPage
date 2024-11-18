import React from "react";
import Image from "next/image";
import Link from "next/link";

const SubscriptionCard = ({
  title,
  description,
  imageSrc,
  linkHref,
  linkText,
  price,
  features,
}) => {
  return (
    <div className="min-w-[250px] justify-between cursor-pointer flex flex-col rounded-2xl h-[479px] w-48 flex-1 bg-violet-200 shadow-lg  p-6 hover:shadow-2xl transition-all duration-300 ease-in-out">
      <Image
        src={imageSrc}
        width={500}
        height={100}
        alt={`${title} image`}
        className="z-1 md:block"
      />
      <h3 className="mt-5 font-bold">{title}</h3>
      <p className="text-gray-600 mt-5 mb-5">{description}</p>
      <Link href={linkHref}>
        <button className="bg-black transition-all duration-300 text-white px-4 py-2 rounded-3xl w-full hover:bg-blue-600 mt-5">
          {linkText}
        </button>
      </Link>
    </div>
  );
};

export default SubscriptionCard;
