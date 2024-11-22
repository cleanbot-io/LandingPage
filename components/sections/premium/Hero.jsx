import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex text-black flex-col justify-center items-center text-center my-20 sm:my-20 lg:my-28 gap-12 sm:gap-16">
      {/* Title Section */}
      <div>
        <p className="text-2xl sm:text-4xl">
          Our
          <span className="ml-2 text-3xl sm:text-5xl font-bold text-[#F61C1C]">
            Premium
          </span>{" "}
          <br />
          Subscription
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-[1200px] mx-auto">
        <Image
          width={1200}
          height={640}
          alt="Premium Subscription"
          objectFit="cover"
          quality={100}
          src="/premium/3.png"
          className="w-full h-auto rounded-sm"
        />
      </div>

      {/* Description Section */}
      <div className="flex flex-col gap-8 sm:gap-12 max-w-4xl mx-auto px-4 sm:px-10">
        <p className="text-3xl sm:text-4xl lg:text-5xl">
          The epitome of excellence
        </p>
        <p className="text-left text-lg sm:text-xl lg:text-2xl leading-relaxed">
          Transform your home into a luxurious retreat with our Premium
          subscription. Experience the serenity of walking into an impeccably
          maintained space, meticulously prepared to hotel standards. From
          detailed cleaning to thoughtful touches, we elevate your living
          environment beyond the ordinary. Discover your Premium benefits below.
        </p>
      </div>
    </div>
  );
};

export default Hero;
