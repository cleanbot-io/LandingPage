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
      <Image src="/minted2.jpg" alt="generic photo" width={1300} height={100} className='mt-20' />
      <div className='flex flex-col items-center justify-center py-24 bg-[#fff]'>
      
        {/* Main Text */}
        <div className='flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center'>
          <h1 className='text-5xl sm:text-8x1 font-bold text-black tracking-tight'>Subscribe to a plan {""}
          </h1>
        </div>

        <div className="flex justify-center items-center pt-5">
          <button
            className="bg-black text-white text-custom-blue mt-8 p-2 pl-6 pr-6 rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300"
            onClick={toggleSubscription}
          >
            {isMonthly ? 'Switch to Yearly' : 'Switch to Monthly'}
          </button>
        </div>

        <div class="flex justify-center items-center pt-20">
          {/* placeholder cards place here */}
          
          {/* Essentials Card */}
          <Card variant="gradient" className=" rounded-lg w-full bg-blue-800 max-w-[20rem] p-8 mr-4">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
          Essentials
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-5xl font-normal"
        >
          {isMonthly ? '$100/mo' : '$1000/yr'}
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white">2 cleanings per month</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white">2hr deep clean</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white">Bedroom & Bath</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white">Kitchen & Living-room</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white">
              Sweep / Mop / Vacuum
            </Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
    {/* Essentials Card */}


    {/* Standard Card */}
    <Card variant="gradient" className="w-full rounded-lg bg-blue-800 max-w-[20rem] mr-4 p-8">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
          standard
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-5xl font-normal"
        >
          {isMonthly ? '$180/mo' : '$2160/yr'}
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white">3 cleanings per month</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white">2hr deep clean</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white">Bedroom & Bath</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white">Kitchen & Living-room</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white">
              Sweep / Mop / Vacuum
            </Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
    {/* Standard Card */}


    {/* Premium Card */}
    <Card variant="gradient" className="w-full rounded-lg bg-blue-800 max-w-[20rem] p-8">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
          Premium
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-5xl font-normal"
        >
          {isMonthly ? '$240/mo' : '$2880/yr'}
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white">1 clean per week</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white">2hr deep clean</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white">Bedroom & Bath</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white">Kitchen & Living-room</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal text-white">
              Sweep / Mop / Vacuum
            </Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
    {/* Premium Card */}

          {/* end of cards */}
        </div>

        <h1 className='text-5xl pt-20 sm:text-8x1 font-bold text-black tracking-tight'>Additional {""}
          <span className='bg-gradient-to-r from-[#5AC69F] to-[#3eb489] text-transparent bg-clip-text'>
            add-ons
          </span>
            +
        </h1>

        <div class="flex space-x-5 pt-20 mb-10">
          <div class="w-2/3 h-46 bg-teal-300 dark:bg-slate-800 p-6 rounded-lg drop-shadow-xl rounded overflow-hidden">
            <h2 class="text-2xl text-white dark:bg-slate-800 font-semibold p-5">Fridge</h2>
            <p className="text-3xl text-white font-semibold mt-4">
              {isMonthly ? '$50/month' : '$500/year'}
            </p>
            <Link href="/about">Learn more</Link>
          </div>
          <div class="w-2/3 h-46 bg-teal-300 dark:bg-slate-800 p-6 rounded-lg drop-shadow-xl rounded overflow-hidden">
            <h2 class="text-2xl text-white font-semibold dark:bg-slate-800 p-5">Closet</h2>
            <p className="text-3xl text-white font-semibold mt-4">
              {isMonthly ? '$60/month' : '$600/year'}
            </p>
            <Link href="/about">Learn more</Link>
          </div>
          <div class="w-2/3 h-46 bg-teal-300 dark:bg-slate-800 p-6 rounded-lg drop-shadow-xl rounded overflow-hidden">
            <h2 class="text-2xl text-white font-semibold p-5">Microwave</h2>
            <p className="text-3xl text-white font-semibold mt-4">
              {isMonthly ? '$20/month' : '$200/year'}
            </p>
            <Link href="/about">Learn more</Link>
          </div>
          <div class="w-2/3 h-46 bg-teal-300 dark:bg-slate-800 p-6 rounded-lg drop-shadow-xl rounded overflow-hidden">
            <h2 class="text-2xl text-white font-semibold p-5">Laundry</h2>
            <p className="text-3xl text-white font-semibold mt-4">
              {isMonthly ? '$30/month' : '$300/year'}
            </p>
            <Link href="/about">Learn more</Link>
          </div>
        </div>
        <PremiumTier />
        <StandardTier />
        <BasicTier />

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
      <Footer />
    </>
  )
}

export default Subscription;