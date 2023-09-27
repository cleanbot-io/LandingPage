import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <NavBar />
      
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <div className="mb-20 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] mt-10"
            src="/lilbot.png"
            alt="tool image"
            width={700}
            height={100}
            priority
          />
          <h3 className='text-5xl ui-sans-serif'>Next-gen housekeeping for today</h3>
        </div>

        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0">
          <h3 className='text-2xl'>Empowering maids with robotic tools, taking out
            the grunt work and improving their turnover time by 2X making them
            more efficient with 25% less work.
          </h3>
        </div>

        <div className='mt-40 mb-20'>
          <Image
            src="/mock.png"
            width="700"
            height="200"
            alt="Mobile apps"
          />
        </div>

        <div className='mb-20 flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center'>
        <h1 className='text-5xl sm:text-8x1 font-bold text-black tracking-tight'>Our 1st generation flagship {""}
          <span className='bg-gradient-to-r from-[#ff781f] to-[#ffaf7a] text-transparent bg-clip-text'>
            cleaning robot
          </span>
        </h1>
      </div>

        <div className='items-center justify-center'>

          <Image
                src="/CB-tub.gif"
                alt="tub bot"
                width="1200"
                height="100"
                class="rounded-lg self-center mx-auto mb-20"
          />

          <Image
                src="/rc-1-noBG.png"
                alt="tub bot"
                width="650"
                height="100"
                class="rounded-lg self-center mx-auto -mb-40"
          />

          <div class="bg-white p-6 rounded-lg shadow-lg max-w-md max-h-44 -mt-28 mb-20">
            <h2 class="text-2xl font-bold mb-2 text-gray-800">Rt-1</h2>
            <p class="text-gray-700">Heavy duty performance for all Shower Wall 
                Panel and Tile types including Stone | Marble | Glass | Porcelain |
                Fiberglass as well as the Shower Pan & Bases</p>
          </div>

          <Image
                src="/rc-2.png"
                alt="tub bot"
                width="500"
                height="100"
                class="rounded-lg self-center mx-auto"
          />
        </div>
      </main>

      <Footer />
    </>
  )
}
