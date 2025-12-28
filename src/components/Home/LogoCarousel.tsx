import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const logos = [
  "/Vector (1).svg",
  "/Vector (2).svg",
  "/Vector.svg",
  "/Vector (3).svg",
];

const LogoMarquee: React.FC = () => {
  return (
    <section className="w-full bg-white md:pt-30 py-4">
      <Marquee
        speed={50}
        pauseOnHover
        gradient={false}
      >
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt="Partner logo"
            className="mx-10 h-8 w-auto object-contain opacity-80 hover:opacity-100 transition"
            width={64}
            height={32}
          />
        ))}
      </Marquee>
    </section>
  );
};

export default LogoMarquee;
