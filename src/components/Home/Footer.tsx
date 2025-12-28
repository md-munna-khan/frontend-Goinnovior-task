


import React from "react";
import { Logo } from "@/app/shared/Navbar/logo";
import Image from "next/image";

const Footer: React.FC = () => {
  const paymentLogos = [
    "/bkash.png",
    "/brac-bank.png",
    "/cellfin.png",
    "/city-bank.png",
    "/dutch-bangla.png",
    "/islami-bank.png",
    "/mastercard.png",
    "/ucb.png",
    "/upay.jpg",
    "/visa.png",
    "/nogod.png",
    "/rocket.png",
    "/sure.jpg",
    "/taptap-send.png",
    "/visa.png"
  ];

  return (
    <footer className="bg-neutral-100  w-full">
      <div className=" mx-auto px-8 py-16 flex flex-col gap-12 max-w-7xl">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo & Contact */}
          <div className="space-y-6">
            <Logo />

            <div className="space-y-3 text-sm text-black/70">
              <p>📍 29 SE 2nd Ave, Miami Florida 33131, United States</p>
              <p>✉️ info@zaheen.com</p>
              <p className="text-lg font-semibold text-black">
                📞 (+92) 3942 7879
              </p>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-base font-semibold uppercase mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-black/70">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Our Products</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-base font-semibold uppercase mb-4">
              Information
            </h4>
            <ul className="space-y-2 text-sm text-black/70">
              <li>My Account</li>
              <li>Corporate Enquiries</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>

        {/* ================= PAYMENT CHANNELS ================= */}
        <div>
          <h4 className="text-base font-bold uppercase mb-4">
            Payment Channels
          </h4>

          <div className="flex flex-wrap gap-3 items-center">
            {paymentLogos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt="Payment method"
                className=" w-auto object-cover rounded"
                width={50}
                height={40}
              />
            ))}
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t pt-6 flex flex-col md:flex-row gap-6 md:items-center md:justify-between text-center md:text-left">

          <p className="text-sm font-medium text-neutral-700">
            Copyright ©{" "}
            <span className="text-amber-400 font-semibold">
              360D Soul Limited
            </span>{" "}
            2025. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5 justify-center md:justify-end text-sm font-medium text-neutral-700">
            <a href="#">Terms & Condition</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


