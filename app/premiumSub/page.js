import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Hero from "../../components/sections/premium/Hero";
import Feature from "../../components/sections/premium/Feature";
import Service from "../../components/sections/premium/Services";
import Care from "../../components/sections/premium/Care";
import SubscriptionCard from "../../components/SubscriptionCard";
import { features, services, cares, subscriptionPlans } from "./data";

function PremiumSubscription() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavBar />

      <Hero />

      {/* Section: See What’s Included */}
      <div className="flex flex-col gap-10 text-black px-6 sm:px-10 lg:px-28">
        <p className="text-3xl sm:text-4xl lg:text-6xl text-center sm:text-left">
          See what’s included
        </p>
        <p className="text-xl sm:text-3xl text-center">
          Top Features Highlights.
        </p>
      </div>

      {/* Section: Features */}
      <div className="flex flex-col gap-16 sm:gap-28 mt-16 px-4 sm:px-10 lg:px-28">
        {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            headline={feature.headline}
            description={feature.description}
            imageUrl={feature.imageUrl}
            reversed={feature.reversed}
          />
        ))}
      </div>

      {/* Section: Room-by-Room Cleaning Services */}
      <div className="flex flex-col justify-center items-center text-center gap-14 sm:gap-20 text-black my-20 px-4 sm:px-10">
        <p className="text-2xl sm:text-3xl lg:text-4xl">
          Room-by-Room Cleaning Services
        </p>
        <div className="flex flex-col gap-10 sm:gap-16">
          {services.map((service) => (
            <Service
              key={service.id}
              imageUrl={service.imageUrl}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>

      {/* Section: Premium Appliance Care */}
      <div className="flex flex-col justify-center items-center text-center gap-14 sm:gap-20 text-black my-20 px-4 sm:px-10">
        <p className="text-2xl sm:text-3xl lg:text-4xl">
          Premium Appliance Care
        </p>
        <div className="flex flex-col gap-10 sm:gap-16">
          {cares.map((feature, index) => (
            <Care
              key={index}
              title={feature.title}
              headline={feature.headline}
              description={feature.description}
              imageUrl={feature.imageUrl}
              reversed={feature.reversed}
            />
          ))}
        </div>
      </div>

      {/* Section: Subscription Plans */}
      <div className="flex flex-col justify-center items-center text-center gap-14 sm:gap-20 text-black my-20 px-4 sm:px-10">
        <p className="text-2xl sm:text-3xl lg:text-4xl">OTHER MODELS</p>
        <div className="flex flex-col md:flex-row gap-10">
          {subscriptionPlans.map((plan, index) => (
            <div
              key={index}
              className="w-full sm:w-[300px] flex   md:flex-row justify-center items-center px-4"
            >
              <SubscriptionCard
                title={plan.title}
                description={plan.description}
                imageSrc={plan.imageSrc}
                linkHref={plan.linkHref}
                linkText={plan.linkText}
                features={plan.features}
                price={plan.price}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PremiumSubscription;
