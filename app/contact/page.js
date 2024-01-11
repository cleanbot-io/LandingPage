import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Image from 'next/image';


function ContactPage()
{
  return (
    <>
      <NavBar />
      <div className='flex flex-col items-center justify-center py-24 bg-[#fff]'>
      

      {/* Main Text */}
      <div className='flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center pt-5'>
      </div>

      <div className="flex items-center mb-10">

      <h1 className='text-7xl sm:text-8x1 -mt-40 mb-20 font-bold text-black tracking-tight mr-20'> {""}
          <span className='bg-gradient-to-r from-[#D2042D] to-[#F5554A] text-transparent bg-clip-text'> 
            Contact
          </span>
        </h1>
        <Image src="/cbsignup.png" alt="contact" width={200} height={100} />
        
      </div>
      <h1 className='text-5xl sm:text-8x1 font-bold mt-10 text-black tracking-tight mb-20'> 
        {""} Get in touch
        </h1>

      <h3 className='text-2xl text-black'>
        We would love to hear any questions you may have. Please drop us a line.
      </h3>

    </div>
    <Footer />
    </>
  )
}

export default ContactPage;
