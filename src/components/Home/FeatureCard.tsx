import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  backgroundColor: string;
  position: string; // Used for desktop absolute placement
  showStatistic?: boolean;
  statisticValue?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  backgroundColor,
  position,
  showStatistic = false,
  statisticValue,
}) => {
  return (
    <article
      className={`
        /* Layout & Sizing */
        flex flex-col justify-between p-6 sm:p-8 w-full 
        md:w-[280px] min-h-[260px] md:min-h-[280px]
        
        /* Desktop Positioning */
        md:absolute ${position} z-10 
        
        /* Styling */
        ${backgroundColor} shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl
        
        /* Mobile Responsiveness */
        max-md:relative max-md:left-0 max-md:top-0 max-md:translate-x-0 
        max-md:max-w-[450px] max-md:mx-auto max-md:my-4 
      `}
    >
      <div className="flex flex-col gap-4">
        {showStatistic ? (
          <div className="flex flex-col gap-2">
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
              {title}
            </h3>
            <div className="text-3xl md:text-4xl font-black tracking-tight text-white">
              {statisticValue}
            </div>
          </div>
        ) : (
          <>
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
              {title}
            </h3>
            <p className="text-sm md:text-base text-white opacity-90 leading-relaxed break-words">
              {description}
            </p>
          </>
        )}
      </div>

      {/* Footer / Read More Section */}
      <div className="flex items-center gap-3 mt-6 group cursor-pointer w-fit">
        <span className="text-base md:text-lg font-medium text-white border-b border-transparent group-hover:border-white transition-all">
          Read More
        </span>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="transform group-hover:translate-x-2 transition-transform md:w-6 md:h-6"
        >
          <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </article>
  );
};

export default FeatureCard;