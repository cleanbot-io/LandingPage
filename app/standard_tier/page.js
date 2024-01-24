"use client"
import React from 'react'
import Image from 'next/image'
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import {
    Typography,
} from "@material-tailwind/react";

function StandardTier() {
    return (
        <div>
            <NavBar />
                <div className='flex flex-col items-center justify-center py-24 bg-[#fff]'>
                    <Typography>Basic Tier - details</Typography>.
                    <Typography>Basic tier is best for a smaller appartment</Typography>
                    <Typography>One or two bedrooms with one bathroom</Typography>

                </div>
            <Footer />
        </div>
    )
}

export default StandardTier