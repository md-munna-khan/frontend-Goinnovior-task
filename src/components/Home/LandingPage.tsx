"use client";
import React from "react";
import HeroSection from "./HeroSection";


import LogoCarousel from "./LogoCarousel";
import ProcessSection from "./ProcessSection";
import CustomProjectSection from "./CustomProjectSection";
import ProductShowcase from "./ProductShowcase";

import FeatureCard from "./FeatureCard";
import ContactInfo from "./ContactInfo";
import Footer from "./Footer";

const LandingPage: React.FC = () => {
  return (
    <main className=" overflow-hidden ">


      <HeroSection />

      <FeatureCard
        title="Quality Product"
        description="Lorem ipsum dolor sitatu amet consec teturarisa adipiscing elit samed."
        backgroundColor="bg-orange-600"
        position="left-[1100px] top-[637px]"
      />

      <FeatureCard
        title="Project Overview"
        description=""
        backgroundColor="bg-teal-500"
        position="left-[1380px] top-[637px]"
        showStatistic={true}
        statisticValue="35 Millions"
      />

      <ContactInfo />
      <LogoCarousel />
      
      <CustomProjectSection />
      <ProcessSection />
      <ProductShowcase />
      <Footer />
      
    </main>
  );
};

export default LandingPage;
