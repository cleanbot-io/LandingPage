import React from 'react';
import Image from 'next/image';
import NavBar from '../../components/NavBar';
import Footer from "../../components/Footer";

function StandardSubscription () {
    return (
        <>
            <NavBar />
            <div className='mb-20 mt-40 flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center'>
        <h1 className='text-5xl sm:text-8x1 font-bold text-black dark:text-white tracking-tight'>Our  {""}
          <span className='bg-gradient-to-r from-[#7575FF] to-purple-600 dark:from-purple-300 dark:to-[#7675FF] text-transparent bg-clip-text'>
            Standard
          </span>
          <br></br>
          Subscription
        </h1>
      </div> 

            <div className='mt-40'>
                <Image
                alt='Standard Subscription page'
                src='/4.png'
                priority={true}
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100%' }}
                />  
            </div>       

           
        <Footer />
        </>           
    )
}

export default StandardSubscription;