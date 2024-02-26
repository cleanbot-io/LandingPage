"use client"
import Image from 'next/image';

function PremiumTier() {
    return (
        <div className='bg-black w-full pt-16 pb-16'>
            <h1 className='text-white text-center text-3xl m-4'>Premium tier - details</h1>
            <div className='flex justify-center gap-16'>
                <div>
                    <p className='text-white text-4xl mt-8 mb-8'>For those who prefer frequent cleanings,<br/> the Premium tier offers unbeatable recurrence.</p>
                    <p className='mb-8 text-white text-xl'>This tier covers large and small apartments/lofts/townhomes,<br/> but you choose this tier for more frequent housekeeping visits</p>
                    <div className='w-min'>
                        <p className='text-white text-9xl pl-24'>the</p>
                        <p className='text-indigo-600 text-9xl pl-12'>Premium</p>
                        <p className='text-white text-9xl pl-24'>tier</p> 
                    </div>
                </div>
                <div className='relative mt-32 -ml-32'>
                    <Image
                        src="/premiumSub1.png"
                        width='300'
                        height='400'
                        alt="standard subscription perks"
                    />
                    <Image
                        className='absolute -top-36 -right-44'
                        src="/BasicTierArrow.png"
                        width='200'
                        height='200'
                        alt="arrow flick"
                    />
                </div> 
            </div>
        </div>
    )
}

export default PremiumTier;