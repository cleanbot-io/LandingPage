import React from "react";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
function AboutPage() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center py-24 bg-[#000]" >
        {/* Main Text */}
        <div className="flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center">
          <h1 className="text-7xl mt-10 sm:text-8x1 font-bold text-white tracking-tight">
            A New Era of Clean {""}
          </h1>
          <h1>
            <span className="bg-gradient-to-r text-2xl from-[#FF6347] to-[#Ed2939] text-transparent bg-clip-text">
            &reg;Uniting Cutting-Edge Robotics with Human Excellence <br></br>
            </span>
          </h1>
          
          <h2 className="text-3xl sm:text-8x1 font-bold text-black tracking-tight mb-8 pb-20 pt-20">
            Luxury cleaning, everyday prices
          </h2>
        </div>
        <div className="bg-blue-100 flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center pt-20 pb-20">
          <h1 className="text-5xl sm:text-8x1 font-bold text-black tracking-tight mb-8">
            Who We Are
          </h1>
          <i className="italic font-serif hover:font-sans text-3xl sm:text-8x1 text-black tracking-tight mb-8">
            Cleanbot was established with a clear mission: Imagine waking up to
            a spotless home, effortlessly clean. Forget expensive hotel service
            or backbreaking chores. At Cleanbot, we &prime; re on a mission to make
            professional cleaning a reality for everyone. Our team of passionate
            innovators has developed smart robots that handle the grunt work,
            saving you time and money. That means you can enjoy a sparkling home
            for a fraction of the price, without lifting a finger. Ditch the
            dust bunnies and embrace the freedom of Cleanbot.
          </i>
          <em className="text-2xl sm:text-8x1 font-bold text-black tracking-tight">
            Get a free quote today and experience the magic of effortless
            cleanliness
          </em>
        </div>
        <div className="flex flex-row text-center mx-auto max-w-[1260px] items-center justify-center pt-20">
          <div className="flex flex-col text-center max-w-[500px]">
            <h1 className="text-5xl sm:text-8x1 font-bold text-white tracking-tight mb-8 ">
              Get in Touch
            </h1>
            <h2 className="text-3xl sm:text-8x1 text-white tracking-tight mb-8">
              Got a question? <br /> Or Would like to check on our progress or
              want to get on the waiting list? We would love to hear from you!{" "}
            </h2>
            <h2 className="text-3xl sm:text-8x1 text-white tracking-tight mb-8 bg-grey-200">
              cleanbotmail@gmail.com
            </h2>
          </div>
          <div className="relative text-center mx-auto max-w-[1260px] items-center justify-center pt-40">
            <Image
              src="/maybe1.png"
              alt="Picture of the shower"
              className="relative z-0"
              width={1300} height={100}
            />
            <Image
              src="/lilbot.png"
              alt="Picture of robot"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              width={600} height={100}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AboutPage;