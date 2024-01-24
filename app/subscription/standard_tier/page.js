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
                <div  className='p-24 bg-[#E5E5E5]'>
                    <Typography>Standart tier - details</Typography>
                    <Typography>The Standard tier is best for a small to medium living spaces</Typography>
                    <Typography>One or two bedrooms with 2 bathroom</Typography>
                    <Typography>
                        <span>The</span><br/>
                        <span>Standard</span><br/>
                        <span>Tier</span> 
                    </Typography>
                </div>
            <Footer />
        </div>
    )
}

export default StandardTier