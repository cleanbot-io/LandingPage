"use client"
import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../components/Footer'
import StandardTier from '../../components/StandardTier'
import BasicTier from '../../components/BasicTier'
import PremiumTier from '../../components/PremiumTier'

// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="white"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

 

function Subscription()
{
  const [isMonthly, setIsMonthly] = useState(true);

  const toggleSubscription = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <>
      <NavBar />

        <div className='mt-20'>
        <Image
        src="/2.png"
        width={1500}
        height={100}
        alt='desktop view VIP'
        className='z-1 hidden md:block'
      />

      <Image
        src="/vipnight.png"
        height={100}
        width={1000}
        alt='mobile VIP'
        className='z-1 block md:hidden'
      />

       <Image
        src="/3.png"
        alt="desktop premium subscription"
        width={1500}
        height={100}
        className='z-1 hidden md:block'
      />

      <Image
        src="/premob.png"
        height={100}
        width={1000}
        alt='mobile premium subscription'
        className='z-1 block md:hidden'
      />
       <Image
        src="/4.png"
        alt="desktop Standard subscription"
        width={1500}
        height={100}
        className='z-1 hidden md:block'
      />

      <Image
        src="/stanmob.png"
        height={100}
        width={1000}
        alt='mobile Standard subscription'
        className='z-1 block md:hidden'
      />
       <Image
        src="/1.png"
        alt="Desktop basic subscription"
        width={1500}
        height={100}
        className='z-1 hidden md:block'
      />

      <Image
        src="/basmob.png"
        height={100}
        width={1000}
        alt='mobile basic subscription'
        className='z-1 block md:hidden'
      />
        </div>

        <h1 className='text-5xl pt-20 pl-20 sm:text-8x1 font-bold dark:text-white text-black tracking-tight'>Additional {""}
        <span className='bg-gradient-to-r from-[#5AC69F] to-[#3eb489] text-transparent bg-clip-text'>
            add-ons
          </span>
          <span className='bg-gradient-to-r from-[#0EC998] to-[#033024] text-transparent bg-clip-text'>
            +
          </span>
          
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-20 mb-10 mx-10">
  <div className="h-46 bg-teal-300 dark:bg-slate-800 p-6 rounded-lg drop-shadow-xl overflow-hidden">
    <h2 className="text-2xl text-white dark:bg-slate-800 font-semibold p-5">Fridge</h2>
    <p className="text-3xl text-white font-semibold mt-4">
      {isMonthly ? '$50/month' : '$500/year'}
    </p>
    <Link href="/about">Learn more</Link>
  </div>
  <div className="h-46 bg-teal-300 dark:bg-slate-800 p-6 rounded-lg drop-shadow-xl overflow-hidden">
    <h2 className="text-2xl text-white font-semibold dark:bg-slate-800 p-5">Closet</h2>
    <p className="text-3xl text-white font-semibold mt-4">
      {isMonthly ? '$60/month' : '$600/year'}
    </p>
    <Link href="/about">Learn more</Link>
  </div>
  <div className="h-46 bg-teal-300 dark:bg-slate-800 p-6 rounded-lg drop-shadow-xl overflow-hidden">
    <h2 className="text-2xl text-white font-semibold p-5">Microwave</h2>
    <p className="text-3xl text-white font-semibold mt-4">
      {isMonthly ? '$20/month' : '$200/year'}
    </p>
    <Link href="/about">Learn more</Link>
  </div>
  <div className="h-46 bg-teal-300 dark:bg-slate-800 p-6 rounded-lg drop-shadow-xl overflow-hidden">
    <h2 className="text-2xl text-white font-semibold p-5">Laundry</h2>
    <p className="text-3xl text-white font-semibold mt-4">
      {isMonthly ? '$30/month' : '$300/year'}
    </p>
    <Link href="/about">Learn more</Link>
  </div>
</div>


        <Image
        src="/cleanings.png"
        alt="all rooms covered"
        width={1500}
        height={100}
      />

<h1 className='flex my-20 px-10 text-4xl justify-center'>Order a turndown service and get a free desert on us</h1>
     <div className='flex justify-center'>
    
     <Image
        src="/cookie.png"
        alt="all rooms covered"
        width={700}
        height={100}
      />
     </div>

      <Footer />
    </>
  )
}

export default Subscription;