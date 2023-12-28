import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Subscribe from '../components/Subscribe'
import Image from 'next/image'
import {Shiba} from './3drobot'

export default function Home() {
  return (
    <>
      <NavBar />

      
        <Image
          alt='Bathtub robot'
          src='/CB-tub.gif'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

      <Image
        src="/Clean.png"
        alt="living room"
        width={1500}
        height={100}
      />
      
      <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-24">

        <div className="my-10 lg:mb-20 flex flex-col lg:flex-row items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] mt-4 sm:mt-8 lg:mt-0 lg:mr-8"
            src="/lilbot.png"
            alt="tool image"
            width={700}
            height={100}
            priority
          />
          <h3 className='text-3xl text-center sm:text-4xl lg:text-5xl ui-sans-serif mt-4 sm:mt-6 lg:mt-0'>
            Revolutionary Housekeeping for the Modern Era
          </h3>
        </div>

        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-10 ">
          <h3 className='text-2xl'>Empower maids with robotic tools, reducing their workload by 25% and doubling their turnover time, in-turn making our service affordable to you.</h3>
        </div>

        <h2 className='mt-10 text-white'>Interact with this 3d model</h2>
        <Shiba />

        <div className='mt-10 sm:mt-16 lg:mt-40 mb-10 sm:mb-16 lg:mb-20'>
          <Image
            src="/mock.png"
            width="700"
            height="200"
            alt="Mobile apps"
          />
        </div>

        <div className='mb-20 flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center'>
        <h1 className='text-5xl sm:text-8x1 font-bold text-black dark:text-white tracking-tight'>Our 1st generation flagship {""}
          <span className='bg-gradient-to-r from-[#ff781f] to-[#ffaf7a] dark:from-[#D2042D] dark:to-[#F5554A] text-transparent bg-clip-text'>
            cleaning robot
          </span>
        </h1>
      </div>

        <div className='items-center justify-center mb-10 sm:mb-16'>

          <Image
            src="/rc-2.png"
            alt="tub bot"
            width="500"
            height="100"
            className="rounded-lg self-center mx-auto mb-10 sm:mb-16"
          />
        </div>
        
        {/* code insert */}
        <div className="relative">


          {/* Background Image (Heaven1.png) */}
          
          {/* Frosted Glass Effect Container (bg-red) */}
          <Image
            src="/Heaven1.png"
            alt="bathroom"
            width={1450}
            height={100}
            className="rounded-lg self-center sm:mb-10"
          />
          <div className="absolute inset-0  rounded-lg mx-10 h-100 mt-30">
          <Image
            src="/rc-1-noBG.png"
            alt="tub bot"
            width="650"
            height="100"
            className="rounded-lg self-center mx-auto"
          />
            <div className="mb-30 mx-auto h-lg p-2 bg-opacity-20 backdrop-blur-md backdrop-filter rounded-lg shadow-lg max-w-lg max-h-100">
              <h2 className="text-xl sm:text-2xl z-50 font-bold mb-2 text-white">Rt-1: A Bath & Shower cleanbot</h2>
              <p className="text-white">Heavy duty performance for all Shower Wall Panel and Tile types including Stone | Marble | Glass | Porcelain | Fiberglass as well as the Shower Pan & Bases</p>
            </div>
          </div>

          {/* Robot Image (rc-1-noBG.png) */}
          
        </div>

          {/* end */}
          

        <div className='mt-36 flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center'>
          <h1 className='text-5xl sm:text-8x1 font-bold text-black dark:text-white'>
            Safeguarding job opportunities for our cleaners While being{" "} 
            <span className='bg-gradient-to-r from-purple-600 to-[#7575FF] text-transparent bg-clip-text'>
              committed to{" "}
              <span className='bg-gradient-to-r from-[#7575FF] to-purple-600 text-transparent bg-clip-text'>
                innovation
              </span>
            </span>
          </h1>
        </div>

        <div className="mt-20 grid text-center lg:max-w-5xl lg:w-full lg:mb-0">
          <h3 className='text-2xl'>“Our robots are designed to empower cleaners by working alongside them. That is why we are committed to investing in training and education programs to help workers develop the skills they need to thrive in the automated economy.”</h3>
          <h4>These are not sugar coated words - check out our blog for the plan on this ˃</h4>
        </div>
      </main>

      <Subscribe/>

      <Footer />
    </>
  )
}
