
import React, { useState } from 'react';
import Image from 'next/image';

function CarouselCard() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        "/carouselImage-1.png",
        "/carouselImage-2.png",
        "/carouselImage-3.png",
    ];

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    }

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    }
    return (
        <div className="bg-white">
            <div className="text-center mx-auto max-w-[1260px] items-center justify-center pt-20">
                <h1 className="font-sans dark:text-black font-thin">
                    Mobile app interface examples
                </h1>
            </div>

            <div className="flex justify-center items-center pt-10 pb-20">
                {/* Previous slide button */}
                <div className='mr-20'>
                <button onClick={prevSlide} className="bg-[#D9D9D9] rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                </div>

                {/* Carousel image body */}
                <div className="relative rounded-lg w-full h-full bg-[#f3f0f0] max-w-[40rem] p-2">
                      
                    <div className="flex justify-center items-center h-full">
                        <Image
                            src={images[currentSlide]}
                            width={200}
                            height={200}
                            alt={`carousel-${currentSlide + 1}`}
                        />
                    </div>

                </div>

                {/* Next slide button */}
                <div className='ml-20'>
                    <button onClick={nextSlide} className="bg-[#D9D9D9] rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>

    )
}

export default CarouselCard;