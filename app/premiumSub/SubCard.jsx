"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SubCard = ({
  title,
  description,
  imageSrc,
  linkHref,
  linkText,
  price,
  features,
}) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, price }),
        }
      );

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-w-[250px] justify-between cursor-pointer flex flex-col rounded-2xl h-[479px] w-48 flex-1 bg-violet-200 shadow-lg  p-6 hover:shadow-2xl transition-all duration-300 ease-in-out">
      <Image
        src={imageSrc}
        width={500}
        height={100}
        alt={`${title} image`}
        className="z-1 md:block"
      />

      <p className="text-gray-600 mt-5 mb-5">{description}</p>
      <Link href={linkHref}>
        <button className="bg-black transition-all duration-300 text-white px-4 py-2 rounded-3xl w-full hover:bg-blue-600 mt-5">
          {linkText}
        </button>
      </Link>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`px-4 py-2 rounded-full w-full text-center font-medium ${
          loading
            ? "bg-gray-400 text-gray-800 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-800 transition-all duration-300"
        } shadow-md`}
      >
        {loading ? "Processing..." : `Subscribe for $${price}`}
      </button>
    </div>
  );
};

export default SubCard;
