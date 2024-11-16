import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex text-black  flex-col justify-center items-center text-center my-[10%] gap-24">
      <div>
        <p className="text-4xl">
          Our
          <span className="ml-2 text-5xl font-bold text-[#F61C1C]">
            Premium
          </span>{" "}
          <br />
          Subscription
        </p>
      </div>
      <div className="w-full h-[640px]">
        <Image
          width={100000}
          height={100000}
          alt="image"
          objectFit="cover"
          quality={100}
          src="/premium/premiumtier1.png"
          className="max-w-[1200px] mx-auto h-[641px] rounded-sm"
        />
      </div>
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        <p className="text-5xl">The epitome of excellence</p>
        <p className="text-left text-3xl">
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
