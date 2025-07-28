"use client";
import React from "react";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function Butler() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-[Corinthia] cursive mt-10 mb-5">
          Fractional Butler Service
        </h1>

        <div className="inline-block bg-teal-900 text-white text-lg font-medium px-6 py-2 rounded-full mt-2">
          Included with VIP & Premium
        </div>

        <h4 className="mt-3 text-lg text-teal-500">
          Also available as an <i className="text-white">+Add-on</i>
        </h4>

        {/* Responsive Image Container */}
        <div className="relative w-full max-w-xs mx-auto mt-6 overflow-hidden rounded-lg">
          <Image
            src="/butlerwalkingdog.png"
            layout="responsive"
            width={300}
            height={300}
            alt="housekeeping card"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Butler Amenities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-lg">
            <h3 className="text-2xl font-[Playfair_Display] font-semibold mb-2">
              Pet Care
            </h3>
        

              <p className="text-gray-600 dark:text-white">
  Your butler will walk your dog and handle feeding, even when you&apos;re away. 
  Check in on your dog&apos;s walk anytime within the app.
</p>
           
          </div>

          {/* Feature 2 */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-lg">
            <h3 className="text-2xl font-[Playfair_Display] font-semibold mb-2">
              Planning & Coordination
            </h3>
            <p className="text-gray-600 dark:text-white">
              From personal appointments to travel arrangements, your butler
              manages your schedule, emails, and correspondence efficiently.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-lg">
            <h3 className="text-2xl font-[Playfair_Display] font-semibold mb-2">
              Errands & Essentials
            </h3>
            <p className="text-gray-600 dark:text-white">
              Let your butler handle personal shopping, dry cleaning pickup/delivery, grocery shopping, and keeping your fridge stocked.
            </p>
          </div>
        </div>

        {/* Queue Up Section */}
        <div className="text-center mt-16">
        <h1 className="text-3xl text-yellow-700 font-semibold" style={{ fontFamily: "Cormorant, serif" }}>
  The Rest? Just Queue it up.
</h1>

          <p className="text-lg text-gray-700 dark:text-white max-w-3xl mx-auto mt-3">
            Your <i>Fractional Butler</i> is designed to handle the details of
            your day-to-day life. Need something else done? Simply request it
            through the Cleanbot app, and consider it handled.
          </p>

          <Image
            src="/butlerhand.png"
            width={250}
            height={250}
            alt="butler hand holding a plate"
            className="mt-6 mx-auto"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl dark:text-black font-semibold mb-4">
          Ready to Elevate Your Lifestyle?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Join our exclusive butler service today and experience a new level of
          convenience.
        </p>
        <a href="./subscription">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Select a subscription
          </button>
        </a>
      </div>

      <Footer />
    </>
  );
}

export default Butler;
