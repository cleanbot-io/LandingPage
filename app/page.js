import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <NavBar />
      
      <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-24">

        <div className="my-10 lg:mb-20 flex flex-col lg:flex-row items-center">
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

        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0">
          <h3 className='text-xl sm:text-2xl lg:text-3xl'>
            Empowering maids with robotic tools, taking out the grunt work and improving their turnover time by 2X making them more efficient with 25% less work.
          </h3>
        </div>

        <div className='mt-10 sm:mt-16 lg:mt-40 mb-10 sm:mb-16 lg:mb-20'>
          <Image
            src="/mock.png"
            width="700"
            height="200"
            alt="Mobile apps"
          />
        </div>

        <div className='mb-10 sm:mb-16 flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight'>
            Our 1st generation flagship{" "}
            <span className='bg-gradient-to-r from-[#ff781f] to-[#ffaf7a] text-transparent bg-clip-text'>
              cleaning robot
            </span>
          </h1>
        </div>

        <div className='items-center justify-center mb-10 sm:mb-16'>

          <Image
            src="/CB-tub.gif"
            alt="tub bot"
            width="1200"
            height="100"
            className="rounded-lg self-center mx-auto mb-10 sm:mb-16"
          />

          <Image
            src="/rc-1-noBG.png"
            alt="tub bot"
            width="650"
            height="100"
            className="rounded-lg self-center mx-auto -mb-20 sm:-mb-40"
          />

          <div className="bg-white p-2 rounded-lg shadow-lg max-w-md max-h-44 -mt-16 sm:-mt-28 mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">Rt-1</h2>
            <p className="text-gray-700">Heavy duty performance for all Shower Wall 
              Panel and Tile types including Stone | Marble | Glass | Porcelain |
              Fiberglass as well as the Shower Pan & Bases
            </p>
          </div>

          <Image
            src="/rc-2.png"
            alt="tub bot"
            width="500"
            height="100"
            className="rounded-lg self-center mx-auto mb-10 sm:mb-16"
          />
        </div>

        <div className='mt-10 sm:mt-16 lg:mt-40 flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black'>
            Safeguarding job opportunities for our cleaners While being{" "} 
            <span className='bg-gradient-to-r from-purple-600 to-[#7575FF] text-transparent bg-clip-text'>
              committed to{" "}
              <span className='bg-gradient-to-r from-[#7575FF] to-purple-600 text-transparent bg-clip-text'>
                innovation
              </span>
            </span>
          </h1>
        </div>
      </main>

      <Footer />
    </>
  )
}
