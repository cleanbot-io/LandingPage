import React from 'react';
import NavBar from '../../components/NavBar';
import ContactPageForm from './page2';

function ContactPage()
{
  return (
    <>
      <NavBar />
      <div className='flex flex-col items-center justify-center py-10 bg-[#fff]'>
      

      {/* Main Text */}
      <div className='flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center pt-40'>
        <h1 className=' ui-sans-serif text-7xl sm:text-8x1 text-black tracking-tight mt-0 mb-20'>Contact {""}
        </h1>
      <div>
         <p className='my-20 text-4xl sm:text-8x1 text-black tracking-tight'> Get in touch </p>
          </div>
      <div>
      <blockquote class=" text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 w-96">
        <p className=' my-10  sm:text-8x1 text-black tracking-tight'> We would love to hear any questions you may have. Please drop us a line. </p>
        </blockquote>
      </div>
      <div> the arrow </div>
    </div>
    <ContactPageForm/>
    </div>
    </>
  )
}

export default ContactPage;