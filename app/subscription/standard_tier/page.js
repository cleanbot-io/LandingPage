"use client"
import React from 'react'
import Image from 'next/image'
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import {
    Typography,
} from "@material-tailwind/react";

function StandardTier() {
    return (
        <div>
            <NavBar />
                <div  className='pt-32 pl-20 pr-24 pb-20 bg-[#E5E5E5]'>
                    <h1 className='text-black text-center text-3xl m-4'>Standart tier - details</h1>
                    <Typography className='text-black text-4xl mt-8 mb-8'>The Standard tier is best for a small to medium <br/> living spaces</Typography>
                    <Typography className='mb-8 text-black text-xl'>One or two bedrooms with 2 bathroom</Typography>
                    <div className='w-min'>
                        <p className='text-8xl pl-24'>the</p>
                        <p className='text-[#FFFF00] text-8xl'>Standard</p>
                        <p className='text-8xl pl-24'>tier</p> 
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default StandardTier