import React from 'react';
import Image from 'next/image';
import NavBar from '../../components/NavBar';

function Investors () {
    return (
        <>
            <NavBar />
        <div className='mt-20'>
            <div className='flex flex-col items-center justify-center bg-black'>
                <Image 
                    src="/iStock.png"
                    width='1000'
                    height='600'
                    alt="cover"/>
            </div>
            <div className='flex flex-col py-12 sm:py-24 md:py-36 lg:py-48 items-center max-auto justify-center bg-[#fff]'>
                <h1 className='font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-wide text-black'>
                    Investor Relations
                </h1>

                <div className='bg-[#8EFEFC] max-w-full sm:w-2/3 md:w-1/2 lg:w-2/5 rounded-full flex mt-12 p-6 items-center justify-center relative'>
                    <div className='absolute left-8'>
                        <Image
                            className='sm:w-18 sm:h-18 md:w-18 md:h-18 lg:w-18 lg:h-18 xl:w-18 xl:h-18'
                            src="/dalle.png"
                            width='60'
                            height='60'
                            alt='icon'
                        />
                     </div>
        
                    <div className='flex items-center justify-center'>
                        <div className='font-sans font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest text-black text-center'>
                            <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin'>R</span>AISING&nbsp;<span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin'>P</span>RESEED
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex flex-col mx-auto items-center pt-18 pb-20 bg-[#fff]'>
                <div className='w-2/3 text-left'>
                    <h1 className='font-serif text-5xl font-thin text-black'>
                        Executive Summary
                    </h1>
                </div>
                
                <div className='w-2/3 pt-8 font-sans justify-left text-black text-3xl text-left font-light'>
                    <p>
                    Cleanbot revolutionizes urban living with a seamless hotel housekeeping experience
                    delivered straight to your doorstep. Our intuitive mobile app empowers you to effortlessly
                    schedule cleanings, customize your preferences, and manage payments—all at your fingertips.
                    </p>
                    <p className='pt-6'>
                    For our dedicated cleaners, we provide a companion app for easy scheduling, payment
                    management, and access to detailed cleaning instructions. Plus, each cleaner is equipped
                    with the cutting-edge Cleanbot RT-1, a robotic assistant specifically designed to tackle tub
                    and shower cleaning tasks
                    </p>
                    <p className='pt-6'>
                    &ldquo;Experience the future of urban home care with Cleanbot.&rdquo;
                    </p>
                </div>
            </div>
            
            <div className='flex flex-col mx-auto items-center justify-center py-24 bg-[#fff]'>
                <h1 className='font-serif text-5xl text-black'>INVESTOR INQUIRIES</h1>
                <h1 className='font-serif text-4xl text-black pt-8'>cleanbotmail@gmail.com</h1>
            </div>

        </div>
        </>           
    )
}

export default Investors;