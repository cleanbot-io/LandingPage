import React from 'react';
import Image from 'next/image';
import NavBar from '../../components/NavBar';

function RoadmapPage () {
    return (
        <>
            <NavBar />
        <div className='mt-20'>
            <div className='flex flex-col items-center justify-center bg-black'>
               
            </div>
            <div className='flex flex-col py-12 sm:py-24 md:py-36 lg:py-20 items-center max-auto justify-center bg-[#fff]'>
                <h1 className='font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-wide text-black'>
                    Roadmap
                </h1>

                
            </div>


            <div className='flex flex-col mx-auto items-center pt-18 pb-20 bg-[#fff]'>
                <div className='w-2/3 text-left'>
                    <h1 className='font-serif text-5xl font-thin text-black'>
                    Venturing into {" "}
                        <span className='bg-gradient-to-r from-purple-600 to-[#7575FF] dark:from-[#D2042D] dark:to-[#F5554A] text-transparent bg-clip-text'>
                         Futuristic housekeeping{" "}
              <span className='bg-gradient-to-r from-[#7575FF] to-purple-600 dark:from-[#D2042D] dark:to-[#F5554A] text-transparent bg-clip-text'>
              </span>
            </span>
                         with the aid of Robotics
                    </h1>
                </div>
                
                
            </div>
            
            <div className='flex flex-col mx-auto items-center justify-center py-24 bg-[#fff]'>
                <h1 className='font-serif text-5xl text-black -ml-80'> - Seed Stage</h1>
                <h1 className='font-serif text-4xl text-blue-500 pt-8'>MVP Phase</h1>
                <p className='text-2xl text-black flex flex-col text-center mx-auto max-w-[960px] items-center justify-center mb-20'>
                We have 8 Rt-1 robots are actively deployed, supported by a team of 12 
Skilled cleaners. Guided by 3 seasoned advisors in hospitality, business, and robotics.
We’ve successfully completed 8,000 jobs, maintaining a strong retention rate.

                </p>

                <h1 className='font-serif text-5xl text-black -ml-80'> - Series A Stage</h1>
                <h1 className='font-serif text-4xl text-blue-500 pt-8'>Scaling Up Phase</h1>
                <p className='text-2xl text-black flex flex-col text-center mx-auto max-w-[960px] justify-center mb-20'>
                Operating with 24 Rt-1 robots and a dedicated team of 36 housekeepers.  
Supported by two angel investors and advised by 3 seasoned experts.
Established commercial partnerships for product design and critical robot 
Components. Expanded through acquisitions of two house cleaning businesses and one robotics startup. Employ a marketing team of 3, and five in robotics, with outsourced support for AI and Lidar mapping. Our software team consists of 
8 members, achieving product-market fit. Successfully completed 22,000 jobs and
Gained recognition at SxSw, with coverage in three news articles.

                </p>

                <h1 className='font-serif text-5xl text-black -ml-80'> - Series B and Beyond</h1>
                <h1 className='font-serif text-4xl text-blue-500 pt-8'>Shaping up to be a Bluechip</h1>
                <p className='text-2xl text-black  flex flex-col text-center mx-auto max-w-[960px] justify-center mb-20'>
                we&apos;ve strategically optimized our operations. Our lean team of 18 housekeepers, supplemented by subcontractors, efficiently manages contract onboarding and produces training material. We&apos;ve secured legal counsel through a retained law firm. Expanding our fleet to 72 Rt-1 robots, we&apos;re on the brink of launching our Rt-2 product, focusing on automated dishwashing. With over 1 million app downloads, our user interface design has garnered acclaim. Additionally, we&apos;ve successfully closed a $150 million venture capital funding round, propelling us into an exciting new chapter of growth and innovation.

                </p>
            </div>

        </div>
        </>           
    )
}

export default RoadmapPage;