"use client"
import React, { useState } from 'react';
import Image from 'next/image';

function BasicTier() {
    return (
        <div>
            <div  className='pt-32 pb-20 bg-black min-h-screen'>
                {/* Texts */}
                <h1 className='font-mono text-white text-center text-3xl m-4 py-4'>Basic tier - details</h1>
                <div className='flex justify-center'>
                    <div>
                        <p className='font-mono text-white text-4xl mt-8 mb-8 py-4'>The Standard tier is best for a small to medium <br/> living spaces</p>
                        <p className='font-mono mb-8 text-white text-xl py-4'>One or two bedrooms with 2 bathroom</p>
                        <div className='w-min mt-24 ml-48'>
                            <p className='text-8xl text-white pl-24 py-8'>the</p>
                            <p className='text-red-500 text-8xl py-8'>Standard</p>
                            <p className='text-8xl text-white pl-24 py-8'>tier</p> 
                        </div>
                    </div>
                {/* Images */}
                    <div className='mt-32 -ml-64 relative'>
                        <Image
                            className='mt-32 mr-48 -left-48'
                            src="/Basic-sub.png"
                            width='360'
                            height='750'
                            alt="basic tier subscription image"
                        />
                        <Image
                            className='absolute -top-48 -right-52 ml-24'
                            src="/Basic-tier-arrow.png"
                            width='300'
                            height='160'
                            alt="basic tier arrow image"
                        />
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default BasicTier;