"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Card = ({
  title,
  description,
  imageSrc,
  linkHref,
  linkText,
  features,
  price,
}) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, price }),
      });

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
    <div className="min-w-[250px] w-[350px]  h-2/2  bg-violet-200 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col justify-between">
      <Image
        src={imageSrc}
        width={500}
        height={100}
        alt={`${title} card`}
        className="z-1 md:block"
      />
      <h3 className="text-lg font-bold mt-5">{title}</h3>
      <p className="mt-5">{description}</p>
      <p className="text-gray-600 mt-5 mb-5">Price: ${price}</p>

      <ul className="space-y-4 mb-10 md:mb-0 mt-5">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500">✓</span>
            <p className="ml-2 text-black">{feature}</p>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-5">
        <Link href={linkHref}>
          <button className="bg-black text-white px-4 py-2 rounded-3xl w-full hover:bg-blue-600 mt-5">
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
    </div>
  );
};

export default Card;
