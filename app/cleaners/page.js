"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
// import ReactPlayer from "react-player";
// import CarouselCard from "../../components/Carousel";
import FrequentQuestions from "../../components/FrequentQuestions";
import HiringForm from "../../components/HiringForm";
// function Cleaners() {
//   let videoSrc = "/Grandopen.mp4";
//   return (
//     <>
//       <NavBar />
//       <div className="dark justify-center w-full mt-20">
//         <h1 className="bg-black px-5 py-10 text-5xl sm:text-8x1 font-bold text-white dark:text-white tracking-tight">
//           Apply to clean {""}
//           <span className="bg-gradient-to-r from-purple-600 to-pink-400 dark:from-[#D2042D] dark:to-[#F5554A] text-transparent bg-clip-text">
//             with Cleanbot
//           </span>
//         </h1>

//         <div className="flex">
//           <ReactPlayer
//             url={videoSrc}
//             playing={true} // Autoplay the video
//             controls={false} // Hide controls
//             muted={true} // Mute the video
//             loop={true}
//             width="100%"
//             height="100%"
//           />
//           <source src={videoSrc} type="video/mp4" />
//         </div>

//         <div className="flex flex-col md:flex-row items-center justify-around bg-white dark:bg-black py-10">
//           <Image
//             src="/ourcard.png"
//             height={300}
//             width={300}
//             alt="housekeeping card"
//             className="z-1"
//           />
//           <p className="text-2xl md:text-center font-serif dark:text-white md:ml-4 pl-5 pt-10">
//             Build a stable career with competitive benefits at the intersection of tech and housekeeping excellence
//           </p>
//         </div>

//         {/* Container 1 */}

//         {/* Container 2 */}
//         <div className="dark bg-white flex flex-col p-10 w-screen">
//           <div className="flex flex-wrap mx-auto space-x-16">
//             <div className="flex-1 mb-4 pr-4">
//               <h2 className="text-xl font-bold mb-2">what kind of work?</h2>
//               <p>The usual house-keeping tasks</p>
//               <p>Bathroom, Bedroom, Living-room, and other living spaces</p>
//             </div>
//             <div className="flex-1 mb-4 pr-4">
//               <h2 className="text-xl font-bold mb-2">Benefits?</h2>
//               <p>Employee stock options</p>
//               <p>Medical + Dental coverage</p>
//               <p>Mental health coverage</p>
//               <p>5 free house-cleanings per year</p>
//             </div>
//             <div className="flex-1 mb-4 pr-4">
//               <h2 className="text-xl font-bold mb-2">
//                 and cleanbot&apos;s job?
//               </h2>
//               <p>Bath + showers areas</p>
//               <p>Bath faucets + spouts</p>
//               <p>Scrub moldy surfaces</p>
//               <p>Glass shower doors</p>
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-20 mb-20">
//             <h3 className="text-3xl text-center sm:text-4xl lg:text-5xl ui-sans-serif mt-4 sm:mt-6 lg:mt-0">
//               We are hiring housekeepers in the San Francisco Area
//             </h3>
//           </div>

//           <Image
//             src="/daythemecleaner.png"
//             width="1000"
//             height="100"
//             alt="day theme"
//             className="block dark:hidden"
//           />
//           <Image
//             src="/nightthemecleaner.png"
//             width="1000"
//             height="100"
//             alt="night theme"
//             className="hidden dark:block"
//           />
//         </div>
//       </div>

//       <CarouselCard />
//    

//       <Footer />
//     </>
//   );
// }

// export default Cleaners;


export default function EmployeesPage() {
  return (
    <>
    <NavBar />
      <div className="min-h-screen text-gray-900">
      {/* Hero Section */}
      <header className="text-center py-20 px-6 bg-white shadow-md">
        <h1 className="text-3xl font-serif mt-5 py-4">Pioneering the Future of Home Luxury: Where Human Excellence Meets Innovation</h1>
        <p className="mt-4 font-serif px-2 text-lg">We&lsquo;re assembling a select team of full-time Housekeepers and Butlers (Personal Assistants) in <i className="bg-gradient-to-r from-purple-500 to-pink-200 dark:from-[#D2042D] dark:to-[#F5554A] text-white px-4">San Francisco</i>.
        This is more than a job — it&lsquo;s a career path with purpose, pride, and professionalism. If you have an eye for detail and a heart for service, we want to meet you.
        </p>

        <div className=" w-full max-w-xl mx-auto mt-6 overflow-hidden rounded-lg">
                  <Image
                    src="/careers.png"
                    layout="responsive"
                    width={800}
                    height={800}
                    alt="housekeeping card"
                    className="object-cover object-center mt-10"
                  />
                </div>
      </header>
      
      {/* Open Positions Section */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold">Open Positions</h2>
        <div className="mt-6 space-y-6">
          {/* Housekeepers */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Full-Time Housekeeper</h3>
            <p className="mt-2 text-gray-700">Join our team of professional housekeepers, providing premium service to select families in San Francisco.</p>
            <Link href="/apply" className="mt-4 inline-block text-blue-600 font-medium">Apply Now →</Link>
          </div>
          
          {/* Fractional Butler */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Fractional Butler</h3>
            <p className="mt-2 text-gray-700">For those with hospitality experience, our fractional butlers offer personalized service to high-end clients.</p>
            <Link href="/apply" className="mt-4 inline-block text-blue-600 font-medium">Apply Now →</Link>
          </div>
          
          {/* Software Developer */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Software Developer</h3>
            <p className="mt-2 text-gray-700">Help shape the future of premium home services with Cleanbot’s digital platform.</p>
            <Link href="/apply" className="mt-4 inline-block text-blue-600 font-medium">Apply Now →</Link>
          </div>
          
          {/* COO */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Chief Operating Officer (COO)</h3>
            <p className="mt-2 text-gray-700">Looking for an experienced leader to help scale Cleanbot in San Francisco and beyond.</p>
            <Link href="/apply" className="mt-4 inline-block text-blue-600 font-medium">Apply Now →</Link>
          </div>
        </div>
      </section>
      
      {/* Why Join Cleanbot Section */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold">Why Join Cleanbot?</h2>
        <p className="mt-4 text-lg">We offer full-time positions with competitive pay, benefits, and a chance to be part of something innovative in the luxury service industry.</p>
      </section>
      
      {/* Call to Action */}
      <section className="text-center py-16 px-6">
        <h2 className="text-2xl font-semibold">Ready to Apply?</h2>
        <p className="mt-4 text-lg">Submit your application today and be part of our exclusive team in San Francisco.</p>
        <Link href="/apply" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">Apply Now</Link>
      </section>
      <div className="py-10 px-20">
      <Image
            src="/ourcard.png"
            height={300}
            width={300}
            alt="housekeeping card"
            className="z-1"
          />
      </div>
      <div className="mt-10">
      <FrequentQuestions />
      
      <HiringForm />
      </div>
       
    </div>
    </>
  );
}
