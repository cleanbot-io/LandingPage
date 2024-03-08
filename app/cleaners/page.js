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
  let videoSrc = "/Housekeeping.mp4"
  return (
    <>
    <NavBar />
    <div className="dark justify-center w-full">
      <div className="relative">
      
        {/* Container 1 */}
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
        <Image
            src="/ourcard.png"
            height={300}
            width={300}
            alt='housekeeping card'
            className='z-1'
          />


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
        </div>
      </div>
      <CarouselCard />
      <FrequentQuestions />
    </div>
    <Footer />
    </>
  )
}

export default Cleaners;