'use client'
import React from 'react';
import Image from 'next/image'
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ReactPlayer from 'react-player';
import CarouselCard from '../../components/Carousel'
import FrequentQuestions from '../../components/FrequentQuestions'

function Cleaners()
{
  let videoSrc = "/Grandopen.mp4"
  return (
    <>
    <NavBar />
    <div className="dark justify-center w-full mt-20">

   
     <h1 className='bg-black px-5 py-10 text-5xl sm:text-8x1 font-bold text-white dark:text-white tracking-tight'>Apply to clean {""}
          <span className='bg-gradient-to-r from-purple-600 to-pink-400 dark:from-[#D2042D] dark:to-[#F5554A] text-transparent bg-clip-text'>
            with Cleanbot
          </span>
        </h1>

   

    <div className="flex">  
          <ReactPlayer 
            url={videoSrc}
            playing={true} // Autoplay the video
            controls={false} // Hide controls
            muted={true} // Mute the video
            width="100%"
            height="100%"
          />
          <source src={videoSrc} type="video/mp4" />
          
        </div>
          

        <div className='flex flex-col md:flex-row items-center justify-around bg-white dark:bg-black py-10'>
  <Image
    src="/ourcard.png"
    height={300}
    width={300}
    alt='housekeeping card'
    className='z-1'
  />
  <p className='text-2xl md:text-center font-serif dark:text-white md:ml-4 pl-5 pt-5'>
    Select your own availability, be your own boss.
  </p>
</div>

        {/* Container 1 */}
      


        {/* Container 2 */}
        <div className="dark bg-white flex flex-col p-10 w-screen">
          <div className="flex flex-wrap mx-auto space-x-16">
            <div className="flex-1 mb-4 pr-4">
              <h2 className="text-xl font-bold mb-2">what kind of work?</h2>
              <p>The usual house-keeping tasks</p>
              <p>Bathroom, Bedroom, Living-room, and other living spaces</p>
            </div>
            <div className="flex-1 mb-4 pr-4">
              <h2 className="text-xl font-bold mb-2">Benefits?</h2>
              <p>Employee stock options</p>
              <p>Medical + Dental coverage</p>
              <p>Mental health coverage</p>
              <p>5 free house-cleanings per year</p>
            </div>
            <div className="flex-1 mb-4 pr-4">
              <h2 className="text-xl font-bold mb-2">and cleanbot&apos;s job?</h2>
              <p>Bath + showers areas</p>
              <p>Bath faucets + spouts</p>
              <p>Scrub moldy surfaces</p>
              <p>Glass shower doors</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-20 mb-20">
          <h3 className='text-3xl text-center sm:text-4xl lg:text-5xl ui-sans-serif mt-4 sm:mt-6 lg:mt-0'>
            We are hiring housekeepers in the San Francisco Area
          </h3>
          </div>

          <Image
            src="/daythemecleaner.png"
            width="1000"
            height="100"
            alt="day theme"
            className='block dark:hidden'
          />
          <Image
            src="/nightthemecleaner.png"
            width="1000"
            height="100"
            alt="night theme"
            className='hidden dark:block'
          />
        </div>

      </div>


      <CarouselCard />
      <FrequentQuestions />
    <Footer />
    </>
  )
}

export default Cleaners;