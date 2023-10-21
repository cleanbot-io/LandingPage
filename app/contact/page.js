import React from 'react';

function ContactPage()
{
  return (
    <div className='flex flex-col items-center justify-center py-24 bg-[#fff]'>
      

      {/* Main Text */}
      <div className='flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center pt-40'>
        <h1 className='text-5xl sm:text-8x1 font-bold text-black tracking-tight'>Contact {""}
          <span className='bg-gradient-to-r from-[#FFFF00] to-[#ffaf7a] text-transparent bg-clip-text'>
            page
          </span>
        </h1>
      </div>

    </div>
  )
}

export default ContactPage;