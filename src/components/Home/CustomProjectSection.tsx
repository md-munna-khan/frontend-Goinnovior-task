import Image from "next/image";
import React from "react";

const CustomProjectSection: React.FC = () => {
  return (
    <section className="relative w-full bg-teal-50 py-24 px-6 max-md:py-14">
      <div className="mx-auto max-w-[1200px] flex items-center gap-16 max-md:flex-col">

        {/* LEFT – Torn Paper Card */}
        <div className="flex-1">
          <div
            className="relative mx-auto max-w-[820px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/white.png')" }}
          >
            <div className="px-14 py-16 max-md:px-6 max-md:py-10">

              {/* Badge */}
              <span className="inline-block mb-6 px-5 py-2 text-sm font-medium text-teal-600 border border-teal-500 rounded-full">
                Process
              </span>

              {/* Heading */}
              <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 max-md:text-2xl">
                Do You Want Custom Project With Textilery?
              </h2>

              {/* Description */}
              <p className="mb-8 max-w-[700px] text-base text-gray-700">
                At Zaheen Knitwear Ltd., we pride ourselves on ethical and
                reliable apparel manufacturing. Our commitment ensures
                every garment is crafted with care and integrity.
              </p>

              {/* Button */}
              <button className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-teal-600 border border-teal-500 rounded-md hover:bg-teal-500 hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT – Product Image */}
        <div className="flex-1 max-w-[420px] mx-auto">
          <Image
            src="/dress.png"
            alt="Custom Project"
            width={420}
            height={360}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default CustomProjectSection;
