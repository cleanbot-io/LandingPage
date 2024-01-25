"use client"
import React from 'react'
import Image from 'next/image'
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';



function StandardTier() {
    return (
        <div>
            <NavBar />
                <div  className='pt-32 pb-20 bg-[#E5E5E5]'>
                    <h1 className='text-black text-center text-3xl m-4'>Standart tier - details</h1>
                    <div className='flex justify-center'>
                        <div>
                            <p className='text-black text-4xl mt-8 mb-8'>The Standard tier is best for a small to medium <br/> living spaces</p>
                            <p className='mb-8 text-black text-xl'>One or two bedrooms with 2 bathroom</p>
                            <div className='w-min'>
                                <p className='text-8xl pl-24'>the</p>
                                <p className='text-[#FFFF00] text-8xl'>Standard</p>
                                <p className='text-8xl pl-24'>tier</p> 
                            </div>
                        </div>
                        <div className='relative mt-32 -ml-32'>
                            <Image
                                src="/standardSub.png"
                                width='200'
                                height='400'
                                alt="standard subscription perks"
                            />
                            <Image
                                className='absolute -top-32 -right-32'
                                src="/Standard_tier_arrow.png"
                                width='150'
                                height='120'
                                alt="arrow flick"
                            />
                        </div> 
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default StandardTier