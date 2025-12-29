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
   
    <article className="group flex flex-col gap-2 bg-white w-full">
      

      <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={title}
          fill 
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          quality={100}
        />


        <div className="absolute right-3 top-3 flex flex-col gap-3 opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-[#07B4B0] hover:text-white text-primary transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>

          <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-[#07B4B0] hover:text-white text-primary transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </button>

          <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-[#07B4B0] hover:text-white text-primary transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M12 3v14M7 8l5-5 5 5"></path></svg>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <h3 className="text-lg font-semibold text-black mt-2">
        {title}
      </h3>

      <div className="flex items-center gap-3">
        <span className="text-xl font-bold text-black">৳ {price}</span>
        <div className="h-[2px] w-5 bg-black" />
        <span className="text-xl font-bold text-black">৳ {originalPrice} 2000</span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-2 w-full">

        <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded bg-[#07B4B0] bg-opacity-10 hover:bg-opacity-20 transition-all">
          <span className="text-sm font-bold text-white">Add To Cart</span>
        </button>

  
        <button className="flex-1 py-3 bg-[#07B4B0] hover:bg-[#06a39f] rounded text-white text-sm font-bold transition">
          Buy Now
        </button>
      </div>
    </article>
  );
};

export default ProductCard;