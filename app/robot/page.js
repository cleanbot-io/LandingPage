import React from 'react';
import Image from 'next/image';
import NavBar from '../../components/NavBar';
import Footer from "../../components/Footer";

function RobotPage () {
    return (
        <>
            <NavBar />
            <Image
             alt='Bathtub robot'
             src='/CB-tub.gif'
             priority={true}
             width={0}
             height={0}
             sizes='100vw'
             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        <div className='mt-20'>
            <div className='flex flex-col items-center justify-center bg-black'>
               
            </div>
            <div className='flex flex-col py-12 sm:py-24 md:py-36 lg:py-20 items-center max-auto justify-center bg-[#fff]'>
                <h1 className='font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-wide text-black'>
                    Robot
                </h1>

                
            </div>


            <div className='flex flex-col mx-auto items-center pt-18 pb-20 bg-[#fff]'>
                <div className='w-2/3 text-left'>
                    <h1 className='font-serif text-5xl font-thin text-black'>
                    RT-1 is our robot designed to tackle {" "}
                        <span className='bg-gradient-to-r from-purple-600 to-[#7575FF] dark:from-[#D2042D] dark:to-[#F5554A] text-transparent bg-clip-text'>
                          Bath & Showers{" "}
              <span className='bg-gradient-to-r from-[#7575FF] to-purple-600 dark:from-[#D2042D] dark:to-[#F5554A] text-transparent bg-clip-text'>
              </span>
            </span>
                    </h1>
                </div>
                
                
            </div>

            <div className='mb-20 mt-20 flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center'>
        <h1 className='text-5xl sm:text-8x1 font-bold text-black dark:text-white tracking-tight'>Our 1st generation flagship {""}
          <span className='bg-gradient-to-r from-[#7575FF] to-purple-600 dark:from-[#D2042D] dark:to-[#F5554A] text-transparent bg-clip-text'>
            cleaning robot
          </span>
        </h1>
      </div>

        <div className='items-center justify-center'>

          <Image
            src="/rt-1-intro.png"
            alt="tubbot intro"
            width="1500"
            height="300"
            className="rounded-lg self-center mx-auto mb-10"
          />

    <h1 className='text-3xl sm:text-5x1 font-bold text-black dark:text-white tracking-tight my-20 ml-20'>The world&apos;s first robot to automate shower and bathtub cleaning
    </h1>

          <Image
            src="/rt1-features.png"
            alt="tubbot features"
            width="1500"
            height="300"
            className="rounded-lg self-center mx-auto mb-10"
          />

<h1 className='text-5xl sm:text-8x1 font-bold text-black dark:text-white tracking-tight my-20 ml-20'>Features</h1>

<div className='my-20'>
<div className="mb-30 mx-auto h-lg p-2 bg-opacity-20 bg-black-200 dark:bg-white backdrop-blur-md backdrop-filter rounded-lg shadow-lg max-w-lg max-h-100">
              <h2 className="text-xl sm:text-2xl z-50 font-bold mb-2 text-black">Rt-1: A Bath & Shower cleanbot</h2>
              <p className="text-black">Heavy duty performance for all Shower Wall Panel and Tile types including Stone | Marble | Glass | Porcelain | Fiberglass as well as the Shower Pan & Bases</p>
            </div>
</div>



          <Image
            src="/rt-1-proto.png"
            alt="tubbot in shower"
            width="700"
            height="300"
            className="rounded-lg self-center mx-auto"
          />
        
          
        </div>
            
           

        </div>
        <Footer />
        </>           
    )
}

export default RobotPage;
