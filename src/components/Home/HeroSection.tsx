"use client";
import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[659px] max-sm:h-[600px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Hero Content Container */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-16 lg:px-32 max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-6 max-w-[768px]">
          {/* Text Content Block */}
          <div className="flex flex-col gap-4">
            <p className="text-xl leading-6 capitalize text-white text-opacity-70 max-sm:text-base tracking-wide">
              elevate your Band With
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              High-Quality Garments. <br className="hidden md:block" /> Ethically Made.
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-white text-opacity-70 max-w-[600px]">
              At Zaheen Knitwear Ltd., we pride ourselves on being your
              reliable partner for apparel production. Our commitment to
              ethical manufacturing ensures that every garment is crafted with
              care and integrity.
            </p>
          </div>

          {/* Buttons Group */}
          <div className="flex flex-row gap-4 max-sm:flex-col max-sm:w-full">
            <button className="px-8 py-4 bg-orange-600 text-white text-sm font-semibold transition-transform hover:scale-105 max-sm:w-full">
              Contact Us
            </button>
            <button className="px-8 py-4 border border-white text-white text-sm font-semibold backdrop-blur-sm transition-all hover:bg-white hover:text-black max-sm:w-full">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Play Button Overlay (Decorative) */}
      <div className=" hidden lg:flex absolute  items-center justify-center rounded-full border border-white border-opacity-20 h-[100px] w-[100px] md:h-[135px] md:w-[135px] right-[5%] md:right-[15%] bottom-[10%] md:top-[40%] z-20">
        <div className="flex items-center justify-center bg-white rounded-full h-[50px] w-[50px] md:h-[70px] md:w-[70px] transition-transform hover:scale-110 cursor-pointer">
          <Image
            src="/Container.png"
            alt="Play Button"
            width={16}
            height={16}
            className="ml-1"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;