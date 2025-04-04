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
      <main className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark-text-white">
        {/* Page Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Hero Section */}
          <section className="text-center space-y-4">
            <Image
              src="/vip/TomBig.png"
              height={100}
              width={1000}
              alt="mobile VIP"
              className="z-1 block rounded-3xl md:hidden mt-20 mb-10"
            />
            <div className="flex justify-left">
              <h2 className="bg-yellow-200 dark:text-white dark:bg-yellow-500 rounded-2xl px-4 py-1 max-w-md">
                Now accepting applications
              </h2>
            </div>
          </section>

          {/* Waitlist Section */}
<section>
  <div>
    <h1 className="py-5 text-6xl dark:text-white font-serif">WAITLIST</h1>
    

    <p className="px-4 bg-white dark:bg-gray-800 dark:text-white rounded-xl py-10 px-8">
    <div className="flex justify-left my-4">
              <h2 className="bg-slate-100 text-black rounded-2xl px-4 py-1 max-w-md">
                Founder&apos;s note
              </h2>
            </div>
  <strong>Exclusive Invitation: Join the CleanBot Revolution</strong>
  <br />
  <span className="italic">I joyfully extend this invitation to a select group of individuals who understand that true luxury is not defined by possessions-but by the freedom to reclaim life&apos;s most precious asset: time.</span>
  <br /><br />

  <strong>Cleanbot is not just another housekeeping service. </strong>
  We are ushering in a new era of residential care-rooted in precision, discretion, and deep respect for the sanctity of your home. Our journey begins not with automation, but with a handpicked team of professional housekeepers-career artisans of cleaniness-who embody the highest standards of excellence.
  <br /><br />

  <strong>Why Cleanbot is different: </strong>
  Our housekeepers are not gig workers. They are full-time professionals, compensated fairly, with benifits, stability, and pride in their craft. Each one has been personally selected for their meticulous attention to detail and commitment to service. We are limiting our launch to just <i className="text-red-800">60 homes across San Francisco Metro area</i>. This intentional exclusivity ensures each household receives focused, personalized care, while allowing us to evolve in direct partnership with our founding members. Even beyond this MVP phase, Cleanbot will never be publicly available-we will continue to release memberships in carefully curated rounds. 
  <br /><br />

  <strong>As a founding member, you&apos;ll receive more than exceptional housekeeping </strong>
  You&apos;ll play a vital role in shaping the Cleanbot experience. Your early subscription helps fund the development of our proprietary mobile platform, and you&apos;ll receive regular progress updates. Should you change your mind at any time, refunds are welcome.  To secure your place, simply submit your application today. Upon approval, you&apos;ll choose your preferred subscription and finalize your payment thorough our secure Stripe integration. The finest homes deserve nothing less than the finest care. Will yours be among them? <i className="text-red-800">For those who choose to embark on this journey with us-you have my heart, and a place near my hearth.</i><br /><br />
<strong>Kelvin Knighton </strong><br />

<i>Founder & CEO of CleanBot</i><br />
</p>

  </div>
</section>

<section className="my-20">
  <div className="flex items-center justify-between px-4">
    {/* Left side text */}
    <p className="text-left text-4xl dark:text-white font-semibold leading-tight">
      Explore our <br />
      <span className="text-blue-600 dark:text-blue-400">monthly</span> <br />
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
          {/* Responsive Subscription card Grid Section */}
<section className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 auto-rows-fr">



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
                    Experience Cleanbot in it &apos; s simplest form
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
