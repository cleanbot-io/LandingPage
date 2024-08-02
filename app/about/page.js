import React from "react";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import InfoCard from "../../components/InfoCard";
import avatar from "../../public/avatar.png";

function AboutPage() {
  const team = [{
    name: 'Kelvin Knighton',
    position: 'Founder & CEO',
    photo: '/thinking.jpg'
  },
  {
    name: 'Rosalynn Rob',
    position: 'Adviser',
    photo: '/rosalynn.png'
  },
  {
    name: 'Gaspar B',
    position: 'Software Engineer',
    photo: '/gaspar.png'
  },
  {
    name: 'Nathan M',
    position: 'Software Developer',
    photo: '/nathan.png'
  },
  {
    name: 'Steven G',
    position: 'Software Developer',
    photo: '/steven.png'
  },
  {
    name: 'Jiena W',
    position: 'Software Developer',
    photo: '/jiena.png'
  },
  {
    name: 'Alexander S',
    position: 'Software Developer',
    photo: '/alex.png'
}]

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

          <Image src="/enroute.png" alt="navigation" width={300} height={100} className="mt-10" />
          
          <h2 className="text-3xl sm:text-8x1 font-bold text-white  tracking-tight mb-8 pb-20 pt-20">
            Luxury cleaning, everyday prices
          </h2>
        </div>

        <div className="bg-blue-100 flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center pt-20 pb-20">
          <h1 className="text-5xl sm:text-8x1 font-bold text-black tracking-tight mb-8">
            Who We Are
          </h1>
          <i className="italic font-serif hover:font-sans text-3xl sm:text-8x1 text-black tracking-tight mb-8">
          &ldquo; Cleanbot was founded with a simple yet powerful mission: to transform every home into a haven of cleanliness, just like the seamless housekeeping services offered by hotels. Our approach is modern and efficient, utilizing a user-friendly mobile app to outsource chores to trusted and certified cleaners. What sets us apart is the inclusion of cutting-edge cleaning robots to assist our dedicated human cleaners. This means you can revel in the joy of a spotless home without any of the hassle. Embrace the future of cleaning with Cleanbot – where technology meets cleanliness for your ultimate convenience. &rdquo;
          </i>
          <em className="text-2xl sm:text-8x1 font-bold text-black tracking-tight">
            Get a free quote today and experience the magic of effortless
            cleanliness
          </em>
        </div>

        {/* place team info here */}
        <div className="w-4/5">
          <h2 className="text-5xl sm:text-8x1 font-bold text-white tracking-tight mb-20 pt-20 text-center">Meet the Minds Behind Our Mission</h2>
          <div className="flex justify-around w-4/5 m-auto">
            {/* {team.map(function(member, index) {
              if (index < 2) {
                return <InfoCard key={index} member={member} image={member.photo} avatarW={200} avatarH={200} />}
            })} */}
  
  <div>
  {/* Desktop Image */}
  <Image
    src="/desksquad1.png"
    alt="living room"
    width={1500}
    height={100}
    className='z-1 hidden md:block'
  />
  <Image
    src="/desksquad2.png"
    alt="living room"
    width={1500}
    height={100}
    className='z-1 hidden md:block'
  />
  <Image
    src="/desksquad3.png"
    alt="living room"
    width={1500}
    height={100}
    className='z-1 hidden md:block'
  />

  {/* Mobile Images */}
  <div className='block md:hidden'>
    <Image
      src="/squad1.png"
      height={100}
      width={1300}
      alt='mobile VIP'
      className='z-1'
    />
    <Image
      src="/squad2.png"
      height={100}
      width={1300}
      alt='mobile VIP'
      className='z-1'
    />
    <Image
      src="/squad3.png"
      height={100}
      width={1300}
      alt='mobile VIP'
      className='z-1'
    />
  </div>
</div>


          </div>
          <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4 pt-20 text-center">Coding Champions</h3>
<p className="italic text-2xl text-white text-center">&quot;The faces behind the code - our intern contributors&quot;</p>
<div className="flex flex-col md:flex-row p-10 justify-around mx-20">
  {team.map((member, index) => {
    if (index > 1) {
      return (
        <InfoCard
          key={index}
          member={member}
          image={member.photo}
          avatarW={100}
          avatarH={100}
          className="mb-10 md:mb-0"
        />
      );
    }
    return null;
  })}
</div>

        </div>
        {/* place team info here */}


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
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-40 z-10"
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
