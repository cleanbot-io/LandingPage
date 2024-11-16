import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Hero from "../../components/sections/premium/Hero";
import Feature from "../../components/sections/premium/Feature";
import Service from "../../components/sections/premium/Services";
import Care from "../../components/sections/premium/Care";
import PlanCard from "../../components/PlanCard"
import { features, services, cares , plans } from "./data";
function PremiumSubscription() {
  return (
    <div className="flex flex-col min-h-screen  bg-white">
      <NavBar />

      <Hero />
      <div className="flex flex-col gap-40 text-black">
        <p className="pl-28 text-6xl">See what’s included</p>
        <p className="text-center text-4xl">Top Features Highlights.</p>
      </div>
      <div className="flex flex-col gap-96 mt-28">
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
      <div className="flex flex-col justify-center items-center text-center gap-28 text-black my-32">
        <p className="text-4xl">Room-by-Room Cleaning Services</p>
        <div className="flex flex-col gap-36">
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
      <div className="flex flex-col justify-center items-center text-center gap-28 text-black my-32">
        <p className="text-4xl">Premium Appliance Care</p>
        <div className="flex flex-col gap-36">
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
      <div className="flex flex-col justify-center items-center text-center gap-28 text-black my-32">
        <p className="text-4xl">OTHER MODELS</p>
        <div className="flex gap-4 justify-center">
          {plans.map((plan) => (
            <PlanCard
              key={plan.plan}
              plan={plan.plan}
              price={plan.price}
              description={plan.description}
              details={plan.details}
              buttonText={plan.buttonText}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PremiumSubscription;
