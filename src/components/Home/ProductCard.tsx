import Image from "next/image";
import React from "react";

interface ProductCardProps {
  title: string;
  price: string;
  originalPrice: string;
  imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  originalPrice,
  imageSrc,
}) => {
  return (
    <article className="box-border flex flex-col gap-3 p-0 m-0 bg-white w-full">

      <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* 2. Product Title */}
      <h3 className="text-lg font-semibold text-black leading-tight">
        {title}
      </h3>

      {/* 3. Pricing Section */}
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-black">
          {price}
        </span>
        {/* Decorative divider like in your design */}
        <div className="h-[2px] w-5 bg-black" />
        <span className="text-2xl font-bold text-black">
          {originalPrice}
        </span>
      </div>

      {/* 4. Action Buttons */}
      <div className="flex gap-2 mt-2 w-full">
        {/* Add To Cart Button */}
        <button className="flex flex-1 items-center justify-center gap-2 py-3 rounded bg-[#07B4B0] bg-opacity-10 hover:bg-opacity-20 transition-all">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 2.25L3.75 5.16228V11.625H14.25" stroke="#07B4B0" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="5.625" cy="14.625" r="1.125" stroke="#07B4B0" strokeWidth="1.5"/>
            <circle cx="12.375" cy="14.625" r="1.125" stroke="#07B4B0" strokeWidth="1.5"/>
            <path d="M3.75 4.5H12.3378L14.0844 8.38635H3.75" stroke="#07B4B0" strokeWidth="1.5"/>
          </svg>
          <span className="text-sm font-semibold text-white">
            Add To Cart
          </span>
        </button>


        <button className="flex-1 py-3 bg-[#07B4B0] hover:bg-[#06a39f] rounded transition-colors">
          <span className="text-sm font-semibold text-white">
            Buy Now
          </span>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;