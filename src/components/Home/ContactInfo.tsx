import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-10 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-start gap-12 md:gap-20">
        
        {/* Location Item */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="flex-shrink-0">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2003_802)">
                <path d="M26.25 12.5C26.25 21.25 15 28.75 15 28.75C15 28.75 3.75 21.25 3.75 12.5C3.75 9.51631 4.93526 6.65483 7.04505 4.54505C9.15483 2.43526 12.0163 1.25 15 1.25C17.9837 1.25 20.8452 2.43526 22.955 4.54505C25.0647 6.65483 26.25 9.51631 26.25 12.5Z" stroke="#07B4B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 16.25C17.0711 16.25 18.75 14.5711 18.75 12.5C18.75 10.4289 17.0711 8.75 15 8.75C12.9289 8.75 11.25 10.4289 11.25 12.5C11.25 14.5711 12.9289 16.25 15 16.25Z" stroke="#07B4B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_2003_802"><rect width="30" height="30" fill="white"/></clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col">
            <h4 className="text-base font-semibold text-teal-500">Location</h4>
            <p className="text-sm tracking-wide text-black/60">
              Kashimpur, Gazipur Sadar / Gazipur
            </p>
          </div>
        </div>

        {/* Email Item */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="flex-shrink-0">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5H25C26.375 5 27.5 6.125 27.5 7.5V22.5C27.5 23.875 26.375 25 25 25H5C3.625 25 2.5 23.875 2.5 22.5V7.5C2.5 6.125 3.625 5 5 5Z" stroke="#07B4B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M27.5 7.5L15 16.25L2.5 7.5" stroke="#07B4B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <h4 className="text-base font-semibold text-teal-500">Email</h4>
            <p className="text-sm tracking-wide text-black/60">
              compliance@danysknitwear.com
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;