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

                <div className='items-center justify-center relative'>
                    
                        <Image
                            src="/preseed2.png"
                            width='300'
                            height='100'
                            alt='icon'
                            className='mt-10'
                        />
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
                      For our dedicated cleaners, we provide a companion app for easy scheduling, payment management,
                      and access to detailed cleaning instructions. Each cleaner is also equipped with the cutting-edge
                      Cleanbot RT-1, a robotic assistant specifically designed to tackle tub and shower cleaning tasks.
                      As we scale, the role of our cleaners will evolve, positioning them as commanders of a swarm of
                      cleaning bots and serving as onsite troubleshooters to collaborate with engineers if problems 
                      arise, ensuring efficiency and precision across all cleaning tasks.
                    </p>
                    <p className='pt-6'>
                    &ldquo;Experience the future of urban home care with Cleanbot.&rdquo;
                    </p>
                </div>
            </div>
            
            <div className='flex flex-col mx-auto items-center justify-center py-24 bg-[#fff]'>
                <h1 className='font-serif text-5xl text-black'>INVESTOR INQUIRIES</h1>
                <h1 className='font-serif text-4xl text-black pt-8'>cleanbotmail@gmail.com</h1>
                
                <button class="mt-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                <a className='bg-re' href='cleanbot-pre-seed.pdf' download>Download our pitch deck</a>
                    </button>
            </div>

        </div>
        </>           
    )
}

export default Investors;
