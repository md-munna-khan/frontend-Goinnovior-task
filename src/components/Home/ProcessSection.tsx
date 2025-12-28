import React from "react";
import ProcessStep from "./ProcessStep";

const ProcessSection: React.FC = () => {
  const processSteps = [
    {
      stepNumber: "1",
      title: "Dyeing",
      description: "Adding color to biodegradable materials",
      iconSrc: "https://api.builder.io/api/v1/image/assets/TEMP/421ac36e20164bf748d8382c5d1b2e9751c13ab4?width=101",
    },
    {
      stepNumber: "2",
      title: "Cutting",
      description: "Eco-friendly clothing items for all shapes and sizes",
      iconSrc: "https://api.builder.io/api/v1/image/assets/TEMP/5c5c8b23882b647496c94e82e2594fa24f8eb3aa?width=101",
    },
    {
      stepNumber: "3",
      title: "Sewing",
      description: "Vouching for the ultimate sturdiness and durability of the fabric",
      iconSrc: "https://api.builder.io/api/v1/image/assets/TEMP/eac6c52eb6b8bafe80df8bb1e75c745347f75624?width=101",
    },
    {
      stepNumber: "4",
      title: "Snipping of thread",
      description: "A neat edge, a soft and smooth finish",
      iconSrc: "https://api.builder.io/api/v1/image/assets/TEMP/8125ae617ec61a0ef325035e3a55eda6f49cd87b?width=101",
    },
    {
      stepNumber: "5",
      title: "Ironing",
      description: "Ironing it before shipping",
      iconSrc: "https://api.builder.io/api/v1/image/assets/TEMP/60e5bac1b2c60f1e5cc1690a4b3a2b1d4fbed1cd?width=101",
    },
    {
      stepNumber: "6",
      title: "Checking",
      description: "Going through each clothing piece to ensure supreme quality standards are met",
      iconSrc: "https://api.builder.io/api/v1/image/assets/TEMP/409ac10a320a2be32a45577081fc1b80664b01aa?width=101",
    },
    {
      stepNumber: "7",
      title: "Package",
      description: "Folding and packing with the utmost care",
      iconSrc: "https://api.builder.io/api/v1/image/assets/TEMP/2b12db2f37379f0ad4b33229344210a106da5963?width=101",
    },
  ];

  return (
    <section className="box-border relative left-0 p-0 m-0 w-full py-20 max-sm:px-0 max-sm:py-10">
  
  {/* Inside, change these two divs to be relative so they stack naturally */}
  <div className="box-border flex relative flex-col gap-10 justify-center items-start p-0 m-0 w-full max-sm:p-5">
    <div className="box-border flex relative shrink-0 gap-7 justify-center items-start px-32 py-0 m-0 w-full max-md:flex-wrap max-md:px-5 max-sm:flex-col">
      {processSteps.slice(0, 4).map((step, index) => (
        <ProcessStep key={index} {...step} />
      ))}
    </div>
    <div className="box-border flex relative shrink-0 gap-6 justify-center items-start px-72 py-0 m-0 w-full max-md:flex-wrap max-md:px-5 max-sm:flex-col">
      {processSteps.slice(4, 7).map((step, index) => (
        <ProcessStep key={index + 4} {...step} />
      ))}
    </div>
  </div>
</section>
  );
};

export default ProcessSection;
