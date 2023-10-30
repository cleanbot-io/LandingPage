import React from 'react';
import Image from 'next/image'

function Cleaners()
{
  return (
    <div className="bg-[#191970] flex flex-row justify-center w-full">
      <div className="bg-[#191970] h-[100vh] relative">
        {/* Container 1 */}
        <div className="flex flex-row justify-around items-center p-10 w-screen">
          <div className="flex flex-col items-center gap-12">
            <h1 className="text-4xl text-white font-bold">Apply as a cleaner</h1>
            <div className="relative flex">
              <input
                type="email"
                placeholder="Type here..."
                className="p-3 pl-4 pr-32 border border-white rounded-full"
              />
              <button className="absolute right-1 top-1 bg-[#ff5555] text-white text-custom-blue p-2 pl-6 pr-6 rounded-full">
                Apply
              </button>
            </div>
          </div>
          <Image
            className="w-64 h-64"
            src="/cleaner.png"
            alt="Cleaner"
            width={700}
            height={100}
            priority
          />
        </div>

        {/* Container 2 */}
        <div className="bg-white flex flex-col p-10 w-screen">
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
    </div>
  )
}

export default Cleaners;