import React from 'react';
import Image from 'next/image'

function Cleaners()
{
  return (
    <div className='flex flex-col items-center justify-center py-24 bg-[#fff]'>
      

      {/* Main Text */}
      <div className='flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center pt-40'>
        <h1 className='text-5xl sm:text-8x1 font-bold text-black tracking-tight'>Apply to be a {""}
          <span className='bg-gradient-to-r from-[#FFFF00] to-[#ffaf7a] text-transparent bg-clip-text'>
            cleaner
          </span>
        </h1>
      </div>

      <div>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] mt-4 -ml-50 sm:mt-8 lg:mt-0 lg:mr-25"
            src="/cleaner.png"
            alt="tool image"
            width={300}
            height={50}
            priority
          />
      </div>
    </div>
  )
}

export default Cleaners;