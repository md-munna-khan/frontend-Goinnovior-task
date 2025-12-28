import { PlayIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";


export const Banner = () => {
  return (
    <section className="relative w-full flex justify-between items-center bg-[url(https://c.animaapp.com/mjoixa4dBUMisa/img/18345-1.png)] bg-cover bg-center py-24 px-4">
      <div className="container mx-auto flex justify-between items-center max-w-[1440px] px-[120px]">
        <div className="flex flex-col gap-6 max-w-[768px] translate-y-[-1rem] animate-fade-in opacity-0">
          <div className="flex flex-col gap-2.5">
            <div className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffff99] text-xl tracking-[0] leading-[24px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              Elevate Your Band With
            </div>

            <h1 className="[font-family:'Roboto',Helvetica] font-bold text-white text-[56px] tracking-[0] leading-[67.2px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              High-Quality Garments. Ethically Made.
            </h1>

            <p className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffff99] text-lg tracking-[0] leading-[27px] max-w-[674px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              At&nbsp;&nbsp;Zaheen Knitwear Ltd., we pride ourselves on being
              your reliable partner for apparel production. Our commitment to
              ethical manufacturing ensures that every garment is crafted with
              care and integrity.
            </p>
          </div>

          <div className="flex items-center gap-[17px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            <Button className="h-auto bg-app-primary hover:bg-app-primary/90 px-5 py-[15px] transition-colors">
              <span className="[font-family:'Lato',Helvetica] font-medium text-white text-sm tracking-[0] leading-[14px]">
                Contact Us
              </span>
            </Button>

            <Button
              variant="outline"
              className="h-auto border-white text-white hover:bg-white/10 px-5 py-[15px] transition-colors"
            >
              <span className="[font-family:'Lato',Helvetica] font-medium text-sm tracking-[0] leading-[14px]">
                Learn More
              </span>
            </Button>
          </div>
        </div>

        <button className="w-[135px] h-[135px] rounded-full border border-solid border-[#ffffff33] flex items-center justify-center relative hover:border-white/50 transition-colors translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <div className="w-[70px] h-[70px] bg-previewthemeforestnetwhite rounded-full flex items-center justify-center">
            <PlayIcon className="w-[18px] h-[18px] text-[#ed241c] fill-[#ed241c]" />
          </div>
        </button>
      </div>
    </section>
  );
};
