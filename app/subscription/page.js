"use client"
import React from 'react';
import NavBar from '../../components/NavBar';
import Image from 'next/image'
import Link from 'next/link'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Subscription()
{
  return (
    <>
      <NavBar />
      <Image src="/minted2.jpg" alt="generic photo" width={1300} height={100} className='mt-20' />
      <div className='flex flex-col items-center justify-center py-24 bg-[#fff]'>

      {/* Main Text */}
      <div className='flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center'>
        <h1 className='text-5xl sm:text-8x1 font-bold text-black tracking-tight'>Subscribe to a plan {""}
        </h1>
      </div>

      <div class="flex justify-center items-center pt-20">
  <div class="flex space-x-5">
    <div class="w-2/3 h-96 bg-white dark:bg-slate-800 p-6 rounded-lg drop-shadow-xl rounded overflow-hidden">
      <h2 class="text-2xl dark:bg-slate-800 font-semibold p-5">Essentials</h2>
      <p class="text-3xl font-semibold mt-4">$100/month</p>
      <p class="text-gray-600 dark:text-white mt-4">2 cleanings per month</p>
      <p class="text-gray-600 dark:text-white mt-4">2-hour deep clean</p>
      <p class="text-gray-600 dark:text-white mt-4">Bedroom & Bathroom</p>
      <p class="text-gray-600 dark:text-white mt-4">Kitchen & Living room</p>
      <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Subscribe</button>
    </div>
    <div class="w-2/3 h-96 bg-white dark:bg-slate-800 p-6 rounded-lg drop-shadow-xl rounded overflow-hidden">
      <h2 class="text-2xl font-semibold dark:bg-slate-800 p-5">Standard</h2>
      <p class="text-3xl font-semibold mt-4 ">$140/month</p>
      <p class="text-gray-600 dark:text-white mt-4">3 cleanings per month</p>
      <p class="text-gray-600 dark:text-white mt-4">2-hour deep clean</p>
      <p class="text-gray-600 dark:text-white mt-4">Bedroom & Bathroom</p>
      <p class="text-gray-600 dark:text-white mt-4">Kitchen & Living room</p>
      <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Subscribe</button>
    </div>
    <div class="w-2/3 h-96 bg-white dark:bg-slate-800 p-6 rounded-lg drop-shadow-xl rounded overflow-hidden">
      <h2 class="text-2xl font-semibold p-5">Premium</h2>
      <p class="text-3xl font-semibold mt-4">$200/month</p>
      <p class="text-gray-600 dark:text-white mt-4">1 cleaning per week</p>
      <p class="text-gray-600 dark:text-white mt-4">2-hour deep clean</p>
      <p class="text-gray-600 dark:text-white mt-4">Bedroom & Bathroom</p>
      <p class="text-gray-600 dark:text-white mt-4">Kitchen & Living room</p>
      <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Subscribe</button>
    </div>
  </div>
</div>

<h1 className='text-5xl pt-20 sm:text-8x1 font-bold text-black tracking-tight'>Additional {""}
          <span className='bg-gradient-to-r from-[#5AC69F] to-[#3eb489] text-transparent bg-clip-text'>
            add-ons
          </span>
           +
        </h1>

        <div class="flex space-x-5 pt-20">
          <div class="w-2/3 h-46 bg-teal-300 dark:bg-slate-800 p-6 rounded-lg drop-shadow-xl rounded overflow-hidden">
            <h2 class="text-2xl text-white dark:bg-slate-800 font-semibold p-5">Fridge</h2>
            <p class="text-3xl text-white font-semibold mt-4">$100/month</p>
            <Link href="/about">Learn more</Link>
          </div>
          <div class="w-2/3 h-46 bg-teal-300 dark:bg-slate-800 p-6 rounded-lg drop-shadow-xl rounded overflow-hidden">
            <h2 class="text-2xl text-white font-semibold dark:bg-slate-800 p-5">Closet</h2>
            <p class="text-3xl text-white font-semibold mt-4 ">$140/month</p>
            <Link href="/about">Learn more</Link>
          </div>
          <div class="w-2/3 h-46 bg-teal-300 dark:bg-slate-800 p-6 rounded-lg drop-shadow-xl rounded overflow-hidden">
            <h2 class="text-2xl text-white font-semibold p-5">Microwave</h2>
            <p class="text-3xl text-white font-semibold mt-4">$200/month</p>
            <Link href="/about">Learn more</Link>
          </div>
          <div class="w-2/3 h-46 bg-teal-300 dark:bg-slate-800 p-6 rounded-lg drop-shadow-xl rounded overflow-hidden">
            <h2 class="text-2xl text-white font-semibold p-5">Laundry</h2>
            <p class="text-3xl text-white font-semibold mt-4">$200/month</p>
            <Link href="/about">Learn more</Link>
          </div>
        </div>


          <div className='mt-10 flex flex-col items-center justify-center py-20'>
            <Image
              src="/cb-sub.png"
              alt="subscription img"
              width={300}
              height={100}
              className='mt-20 mb-10'
            />
      </div>
    </div>
    </>
  )
}

export default Subscription;