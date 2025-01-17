import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Subscribe from '../components/Subscribe'
import Image from 'next/image'
import {Shiba} from './3drobot'
import { Suspense } from 'react'
import Loading from '../components/Loading'

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <NavBar />
      <Image
        src="/Clean.png"
        alt="living room"
        width={1500}
        height={100}
        className='pt-16'
      />
      <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-24">
        <div className="my-10 lg:mb-20 flex flex-col lg:flex-row items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] mt-4 sm:mt-8 lg:mt-0 lg:mr-8"
            src="/CB_Notification.png"
            alt="tool image"
            width={500}
            height={100}
            priority
          />
          <h3 className='text-3xl text-center sm:text-4xl lg:text-5xl ui-sans-serif mt-4 sm:mt-6 lg:mt-0'>
            Premium Residential Housekeeping in one monthly subscription
          </h3>
        </div>
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-10">
  <h3 className="text-2xl from-[#7575FF] to-purple-600">
    Experience premium housekeeping and personalized Fractional Butler services, seamlessly from our mobile app.
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
        <div className='mb-20 flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center'>
        <h1 className='text-3xl sm:text-5x1 font-bold text-black dark:text-white tracking-tight'>
          Our promise of care begins with our people full-time professionals with benefits, trained to deliver exceptional service you can trust.
        </h1>
      </div>

      <div className='flex flex-row flex-wrap md:flex-nowrap mb-20 justify-center'>
          <Image
            src="/Pre2.png"
            width="250"
            height="200"
            alt="Mobile apps 1"
            className='mr-5 mb-5'
          />
          <Image
            src="/closet.png"
            width="250"
            height="200"
            alt="Mobile apps 2"
            className='mr-5 mb-5'
          />
          <Image
            src="/CB_Rt1.png"
            width="250"
            height="200"
            alt="Mobile apps 3"
          />
        </div>

        <div className='mb-20 flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center'>
        <h1 className='text-3xl sm:text-5x1 font-bold text-black dark:text-white tracking-tight'>
          Cleanbot reimburses you up to $500k for any damage to your apartment, so take comfort in knowing you are protected
        </h1>
      </div>

        <div className='flex flex-row flex-wrap md:flex-nowrap mb-20 justify-center'>
          <Image
            src="/dash.png"
            width="250"
            height="200"
            alt="Mobile apps 4"
            className='mr-5 mb-5'
          />
          <Image
            src="/noti.png"
            width="250"
            height="200"
            alt="Mobile apps 5"
            className='mr-5 mb-5'
          />
          <Image
            src="/fridge.png"
            width="250"
            height="200"
            alt="Mobile apps 6"
          />
        </div>
          {/* end */}

          <div className='py-5'>
            <p className='text-4xl mt-10 mb-10'>Only 60 early access spots available for Cleanbot exclusive preview launch.</p>
          <Image
            src="/earlyaccess.png"
            alt="early Access image"
            width={2500}
            height={1000}
          />
          </div>
          

        <div className='mt-36 flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center'>
          <h1 className='text-5xl sm:text-8x1 font-bold text-black dark:text-white'>
            Safeguarding job opportunities for our cleaners While being{" "} 
            <span className='bg-gradient-to-r from-purple-600 to-[#7575FF] dark:from-[#D2042D] dark:to-[#F5554A] text-transparent bg-clip-text'>
              committed to{" "}
              <span className='bg-gradient-to-r from-[#7575FF] to-purple-600 dark:from-[#D2042D] dark:to-[#F5554A] text-transparent bg-clip-text'>
                innovation
              </span>
            </span>
          </h1>
        </div>

        <div className="mt-20 grid text-center lg:max-w-5xl lg:w-full lg:mb-0">
        <h3 className="text-2xl">We believe in empowering our housekeepers through training and education, ensuring they develop the skills needed to thrive in their roles and provide exceptional service to your home.</h3>
          <h4>These are not sugar coated words - check out our blog for the plan on this ˃</h4>
        </div>
      </main>
      <Subscribe/>
      <Footer />
    </Suspense>
  )
}
