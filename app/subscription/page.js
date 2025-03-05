"use client";
import React from "react";
import NavBar from "../../components/NavBar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import {
  Card,
  Button,
} from "@material-tailwind/react";

const CustomLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

function BasicBadge({ price }) {
  return (
    <div className="relative flex items-center bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full px-4 py-2 w-[220px]">
      <h2 className="text-xl text-white z-10">BASIC</h2>
      <span className="text-lg bg-white text-black px-4 py-1 rounded-full absolute right-2 z-20">
        {price}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-gold opacity-20 rounded-full z-0"></div>
    </div>
  );
}

function StandardBadge({ price }) {
  return (
    <div className="relative flex items-center bg-purple-700 rounded-full px-4 py-2 w-[220px]">
      <h2 className="text-xl text-white z-10">STANDARD</h2>
      <span className="text-lg bg-white text-black px-4 py-1 rounded-full absolute right-2 z-20">
        {price}
      </span>
      <div className="absolute inset-0 bg-purple-800 opacity-20 rounded-full z-0"></div>
    </div>
  );
}

function PremiumBadge({ price }) {
  return (
    <div className="relative flex items-center bg-red-600 rounded-full px-4 py-2 w-[220px]">
      <h2 className="text-xl text-white z-10">PREMIUM</h2>
      <span className="text-lg bg-white text-black px-4 py-1 rounded-full absolute right-2 z-20">
        {price}
      </span>
      <div className="absolute inset-0 bg-red-700 opacity-20 rounded-full z-0"></div>
    </div>
  );
}

function VipBadge({ price }) {
  return (
    <div className="relative flex items-center bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full px-4 py-2 w-[220px]">
      <h2 className="text-xl text-white z-10">VIP</h2>
      <span className="text-lg bg-white text-black px-4 py-1 rounded-full absolute right-2 z-20">
        {price}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-pink-600 opacity-20 rounded-full z-0"></div>
    </div>
  );
}




function Subscription() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-gray-100 text-gray-900">
        {/* Page Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Hero Section */}
          <section className="text-center space-y-4">
            <Image
              src="/vip/TomBig.png"
              height={100}
              width={1000}
              alt="mobile VIP"
              className="z-1 block rounded-3xl md:hidden mt-20"
            />
            <div className="flex justify-left">
              <h2 className="bg-yellow-200 rounded-2xl px-4 py-1 max-w-md">
                Now accepting applications
              </h2>
            </div>
          </section>

          {/* Waitlist Section */}
<section>
  <div>
    <h1 className="py-5 text-6xl font-serif">WAITLIST</h1>

    <p className="px-4">
      We're excited to welcome our early adopters in San Francisco! There are only{" "}
      <span className="italic">(60 spots available)</span>. This isn’t about artificial scarcity—our availability is limited because we have a dedicated team of full-time housekeepers.
    </p>

    <br />

    <p className="px-4">
      To secure your spot, a reservation fee of <span className="italic">1/3 of your chosen subscription</span> is required. Enjoy effortless housekeeping with a plan that suits you. Join our exclusive waitlist today and be among the first in San Francisco to experience seamless, subscription-based home cleaning.
    </p>

    <br />

    <p className="px-4 font-semibold">Reserve your spot now!</p>

    <Button className="bg-blue-600 text-xl text-white px-5 mt-5 rounded-3xl">
      Join the waitlist
    </Button>
  </div>
</section>

<section className="my-20">
  <div className="flex items-center justify-between px-4">
    {/* Left side text */}
    <p className="text-left text-4xl font-semibold leading-tight">
      Explore our <br />
      <span className="text-blue-600">monthly</span> <br />
      housekeeping <br />
      subscriptions
    </p>

    {/* Right side arrow */}
    <Image
      src="/down-arrow.png"
      height={50}
      width={50}
      alt="directing flow"
      className="w-20 h-20"
    />
  </div>
</section>



          {/* Responsive Subscription card Grid Section */}
          <section className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 auto-rows-fr">


            {/* Responsive VIP Subscription Card */}
            <section className="flex overflow-hidden flex-col items-center bg-white aspect-square">
              <div className="flex relative flex-col px-3.5 pt-7 pb-20 w-full h-full aspect-[1.02]">
                <Image
                  src="/vip/Vip-card-image.png"
                  height={100}
                  width={1000}
                  alt="Vip Subscription card"
                  className="object-cover absolute inset-0 size-full"
                />

                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                  <VipBadge price="$2,500" />
                  <a href="/vipSub" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-blue-700 transition whitespace-nowrap inline-flex items-center">
  View Details
</a>
                </div>

                {/* Frosted Glass Effect */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl px-6 py-4 whitespace-nowrap">
                  <p className="text-white text-base text-center font-semibold">
                    The Ultimate Housekeeping Experience
                  </p>
                </div>
              </div>
            </section>

            {/* Responsive Premium Subscription Card */}
  <section className="flex overflow-hidden flex-col items-center bg-white aspect-square w-full h-full">
    <div className="flex relative flex-col pt-7 pb-20 w-full h-full">
      <Image
        src="/premium/Premium-card-image.png"
        height={100}
        width={1000}
        alt="Premium Subscription card"
        className="object-cover absolute inset-0 w-full h-full"
      />

      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-full px-4">
        <PremiumBadge price="$1,200" />
        <a href="/premiumSub" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-blue-700 transition whitespace-nowrap inline-flex items-center">
  View Details
</a>
      </div>

      {/* Frosted Glass Effect */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl px-6 py-2 whitespace-nowrap">
        <p className="text-white text-base text-center font-semibold">
          A powerful housekeeping experience
        </p>
      </div>
    </div>
  </section>

            {/* Responsive Standard Subscription Card */}
            <section className="flex overflow-hidden flex-col items-center bg-white aspect-square">
              <div className="flex relative flex-col px-3.5 pt-7 pb-20 w-full aspect-[1.02]">
                <Image
                  src="/standard/Standard-card-image.png"
                  height={100}
                  width={1000}
                  alt="Vip Subscription card"
                  className="object-cover absolute inset-0 size-full"
                />

                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                  <StandardBadge price="$800" />
                  <a href="/standardSub" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-blue-700 transition whitespace-nowrap inline-flex items-center">
  View Details
</a>
                </div>

                {/* Frosted Glass Effect */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl px-6 py-4 whitespace-nowrap">
                  <p className="text-white text-base text-center font-semibold">
                    The gold standard of  housekeeping
                  </p>
                </div>
              </div>
            </section>

            {/* Responsive Basic Subscription Card */}
            <section className="flex overflow-hidden flex-col items-center bg-white aspect-square">
              <div className="flex relative flex-col px-3.5 pt-7 pb-20 w-full aspect-[1.02]">
                <Image
                  src="/basic/Basic-card-image.png"
                  height={100}
                  width={1000}
                  alt="Basic Subscription card"
                  className="object-cover absolute inset-0 size-full"
                />

                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                  <BasicBadge price="$500" />
                  <a href="/basicSub" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-blue-700 transition whitespace-nowrap inline-flex items-center">
  View Details
</a>
                </div>

                {/* Frosted Glass Effect */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl px-6 py-4 whitespace-nowrap">
                  <p className="text-white text-base text-center font-semibold">
                    Experience Cleanbot in it`s simplest form
                  </p>
                </div>
              </div>
            </section>


          </section>




        </div>
      </main>
    </>
  );
}

// Reusable Card Component
function CardO({ title, description }) {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-600 px-4">{description}</p>
    </div>
  );
}

export default Subscription;
