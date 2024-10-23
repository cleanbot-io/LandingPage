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

const CustomLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

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
        <div className='min-h-screen bg-white'>

          <h1 className='text-4xl px-10 py-40 mb-10'>Explore our housekeeping subscriptions.</h1>

          <div className="flex overflow-x-auto space-x-6 mx-5 py-10 px-4 sm:px-0 scrollbar-hide">

          {/* VIP Card */}
          <div>
            <div className="min-w-[250px] h-2/2 w-48 flex-1 bg-violet-200 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <Image
              src="/vip-button.png"
              width={500}
              height={100}
              alt='desktop view VIP'
              className='z-1 md:block'
            />
            <p className="mt-5">The ultimate housekeeping experience</p>

              <p className="text-gray-600 mt-5 mb-5">
                Our VIP service delivers daily, two-hour cleanings by our Top-rated housekeepers. Each visit is customized to your preference ensuring your space stays pristine with minimal effort.
              </p>

              <Link href="/vipSub">
              <button className="bg-black text-white px-4 py-2 rounded-3xl w-full hover:bg-blue-600 mt-5">
                Learn More
              </button>
              </Link>
            </div>

            <ul className="space-y-2 mb-10 md:mb-0 mt-5">
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">Receive Daily housekeeping</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">2-hour cleaning session</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">Closet Organization</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">Refrigerator cleaned <br></br> & organized</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">Oven & Microwave <br></br> cleaned</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">Dishes cleaned & <br></br> Trash taken out</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">Bedroom & Bathroom</p>
            </li>
          </ul>
          </div>

          {/* Premium Card */}
          <div>
            <div className="min-w-[250px] w-48 h-2/2 flex-1 bg-violet-200 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <Image
              src="/Premium-button.png"
              width={500}
              height={100}
              alt='VIP header'
              className='z-1 md:block'
            />

              <p className="mt-5">A powerful housekeeping experience</p>

              <p className="text-gray-600 mt-5 mb-5">
                With the Premium tier enjoy three, two-hour cleanings per week. Ideal for those looking to maintain a spotless home without the hassle. Easily set your prefered schedule in the app.
              </p>

              <Link href="/premiumSub">
              <button className="bg-black text-white px-4 py-2 rounded-3xl w-full hover:bg-blue-600 mt-5">
                Learn More
              </button>
              </Link>
            </div>

            <ul className="space-y-2 mb-10 md:mb-0 mt-5">
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">Receive housekeeping <br></br> three times a week</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">2-hour cleaning session</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">Closet Organization</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">Refrigerator cleaned & organized</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">Oven & Microwave cleaned</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">Dishes cleaned & Trash taken out</p>
            </li>
          </ul>
          </div>

          {/* Standard Card */}
          <div>
            <div className="min-w-[250px] w-48 h-2/2 flex-1 bg-violet-200 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <Image
              src="/Standard-button.png"
              width={500}
              height={100}
              alt='standard header'
              className='z-1 md:block'
            />

              <p className="mt-5">Experience the unrivaled Luxury of Cleanbot</p>

              <p className="text-gray-600 mt-5 mb-5">
                The gold standard of housekeeping this option includeds two 2-hour cleanings per week. In the app tailor the service to your homes need. Meeting your cleaning expectations
              </p>

              <Link href="/standardSub">
              <button className="bg-black text-white px-4 py-2 rounded-3xl w-full hover:bg-blue-600 mt-5">
                Learn More
              </button>
              </Link>
            </div>

            <ul className="space-y-2 mb-10 md:mb-0 mt-5">
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">Receive housekeeping <br></br> twice a week</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">2-hour cleaning session</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">Refrigerator cleaned & organized</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">All rooms are dusted, <br></br>vacuumed, and tidied</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">Dishes cleaned & Trash taken out</p>
            </li>
          </ul>
          </div>

          {/* Basic Card */}
          <div>
            <div className="min-w-[250px] w-48 h-2/2 flex-1 bg-violet-200 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <Image
              src="/Basic-button.png"
              width={500}
              height={100}
              alt='standard header'
              className='z-1 md:block'
            />

              <p className="mt-5">In our simpliest form, yet mighty</p>

              <p className="text-gray-600 mt-5 mb-5">
                Experience Cleanbot in its simpliest form, leave your chores to our cleaners, we come once a week for 2-hours.
                Schedule within the app and see the cleaner en-route to
                your apartment. 
              </p>

              <Link href="/basicSub">
              <button className="bg-black text-white px-4 py-2 rounded-3xl w-full hover:bg-blue-600 mt-5">
                Learn More
              </button>
              </Link>
            </div>

            <ul className="space-y-2 mb-10 md:mb-0 mt-5">
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">Receive housekeeping <br></br> once a week</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">2-hour cleaning session</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">Dishes cleaned & <br></br> trash taken out</p>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-gray-600 dark:text-gray-300 mt-5 mb-5">All rooms are dusted, <br></br> vacuumed, and tidied </p>
            </li>
          </ul>
          </div>

</div>


          
        {/* <Image
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
      /> */}

      {/* <Image
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
      /> */}
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