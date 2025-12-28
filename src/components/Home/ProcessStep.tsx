import React from "react";

interface ProcessStepProps {
  stepNumber: string;
  title: string;
  description: string;
  iconSrc: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  stepNumber,
  title,
  description,
  iconSrc,
}) => {
  return (
    <article className="group relative  bg-white shadow-sm h-[251px] w-[280px] max-md:min-w-[250px] max-md:w-[calc(50%_-_10px)] max-sm:mx-auto max-sm:my-0 max-sm:w-full transition-all duration-300">
      
      {/* 1. The Fill-up Layer (Down to Top) */}
      <div className="absolute bottom-0 left-0 w-full h-0 bg-secondary transition-all duration-500 ease-in-out group-hover:h-full" />

      {/* 2. The Step Number Badge */}
      <div className="z-20 box-border flex absolute justify-center items-center m-0 bg-white rounded-full shadow-md h-[37px] w-[37px] left-1/2 -translate-x-1/2 -top-[18px] transition-colors duration-300 group-hover:bg-primary">
        <span className="box-border relative p-0 m-0 text-sm font-extrabold text-neutral-600 group-hover:text-white transition-colors duration-300">
          {stepNumber}
        </span>
      </div>

      {/* 3. Content Container (Relative z-10 to stay above the fill layer) */}
      <div className="relative z-10 box-border flex flex-col gap-4 items-start p-0 m-0 left-[18px] top-[41px] w-[243px]">
        <img
          src={iconSrc}
          alt=""
          className="box-border relative p-0 m-0 h-[50px] w-[50px] transition-all duration-300 group-hover:brightness-0 group-hover:invert"
        />
        
        <h3 className="box-border relative self-stretch p-0 m-0 text-2xl font-semibold text-neutral-600 transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>
        
        <div className="box-border flex relative flex-col items-start self-stretch p-0 pb-10 m-0 min-h-[78px]">
          <p className="box-border relative self-stretch p-0 m-0 text-base text-neutral-600 transition-colors duration-300 group-hover:text-white">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProcessStep;