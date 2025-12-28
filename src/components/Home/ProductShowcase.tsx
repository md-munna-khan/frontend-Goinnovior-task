import React from "react";
import ProductCard from "./ProductCard";

const ProductShowcase: React.FC = () => {
  const products = [
    {
      title: "Woman Apparel",
      price: "৳ 1,000.00",
      originalPrice: "৳ 1,00,00.00",
      imageSrc: "/women1.jpg",
    },
    {
      title: "Man Apparel",
      price: "৳ 1,000.00",
      originalPrice: "৳ 1,00,00.00",
      imageSrc: "/green.jpg",
    },
    {
      title: "Sports Wear",
      price: "৳ 1,500.00",
      originalPrice: "৳ 10,000.00",
      imageSrc: "/boy2.jpg",
    },
    {
      title: "Nightwear",
      price: "৳ 1,000.00",
      originalPrice: "10,00.00",
      imageSrc: "/women2.jpg",
    },
  ];

  return (
    <section className="relative w-full bg-white px-6 md:px-16 lg:px-32 py-20 box-border">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
        
        {/* Header Section */}
        <div className="flex flex-row justify-between items-center w-full max-sm:flex-col max-sm:items-start max-sm:gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black m-0 p-0">
            Our Apparels
          </h2>
          <a 
            href="#" 
            className="text-base font-medium text-black underline underline-offset-4 hover:text-teal-600 transition-colors"
          >
            See All Products
          </a>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 w-full justify-items-center">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProductShowcase;