import React from "react";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
function AboutPage() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center py-24 bg-[#ccc]" >
        {/* Main Text */}
        <div className="flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center">
          <h1 className="text-5xl sm:text-8x1 font-bold text-black tracking-tight">
            About {""}
            <span className="bg-gradient-to-r from-[#FFFF00] to-[#FFAF7A] text-transparent bg-clip-text">
              Page <br></br>
            </span>
          </h1>
          <img src="../../lilbot.png" />
          <h2 className="text-3xl sm:text-8x1 font-bold text-black tracking-tight mb-8 pb-20 pt-20">
            Luxury Caring, Everyday Prices
          </h2>
        </div>
        <div className="bg-blue-200 flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center pt-20 pb-20">
          <h1 className="text-5xl sm:text-8x1 font-bold text-black tracking-tight mb-8">
            Who We Are
          </h1>
          <i className="italic text-3xl sm:text-8x1 text-black tracking-tight mb-8">
            Cleanbot was established with a clear mission: Imagine waking up to
            a spotless home, effortlessly clean. Forget expensive hotel service
            or backbreaking chores. At Cleanbot, we're on a mission to make
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
            <h1 className="text-5xl sm:text-8x1 font-bold text-black tracking-tight mb-8 ">
              Get in Touch
            </h1>
            <h2 className="text-3xl sm:text-8x1 text-black tracking-tight mb-8">
              Got a question? <br /> Or Would like to check on our progress or
              want to get on the waiting list? We would love to hear from you!{" "}
            </h2>
            <h2 className="text-3xl sm:text-8x1 text-black tracking-tight mb-8 bg-grey-200">
              cleanbotmail@gmail.com
            </h2>
          </div>
          <div className="relative text-center mx-auto max-w-[1260px] items-center justify-center pt-40">
            <img
              src="../../maybe1.png"
              className="relative z-0"
              style={{ width: "100%", height: "auto" }}
            />
            <img
              src="../../lilbot.png"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AboutPage;