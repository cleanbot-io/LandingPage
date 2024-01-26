"use client"
import React from 'react'
import Image from 'next/image'



function StandardTier() {
    return (
        <div className='bg-[#E5E5E5] w-full pt-16 pb-16'>
            <h1 className='text-black text-center text-3xl m-4'>Standart tier - details</h1>
            <div className='flex justify-center gap-16'>
                <div>
                    <p className='text-black text-4xl mt-8 mb-8'>The Standard tier is best for a small to medium <br/> living spaces</p>
                    <p className='mb-8 text-black text-xl'>One or two bedrooms with 2 bathroom</p>
                    <div className='w-min'>
                        <p className='text-9xl pl-24'>the</p>
                        <p className='text-[#FFFF00] text-9xl'>Standard</p>
                        <p className='text-9xl pl-24'>tier</p> 
                    </div>
                </div>
                <div className='relative mt-32 -ml-32'>
                    <Image
                        src="/standardSub.png"
                        width='300'
                        height='400'
                        alt="standard subscription perks"
                    />
                    <Image
                        className='absolute -top-36 -right-44'
                        src="/Standard_tier_arrow.png"
                        width='200'
                        height='200'
                        alt="arrow flick"
                    />
                </div> 
            </div>
        </div>
    )
}

export default StandardTier