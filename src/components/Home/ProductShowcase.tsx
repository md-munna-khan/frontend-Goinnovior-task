"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

type Product = {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  photoUrl?: string | null;
};

const ProductShowcase: React.FC = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setProducts(data || []);
    } catch (err) {
      console.error("fetchProducts", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className=" w-full bg-white px-6 md:px-16 lg:px-32 py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
        <div className="flex flex-row justify-between items-center w-full max-sm:flex-col max-sm:items-start max-sm:gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black m-0 p-0">Our Apparels</h2>
          <a
            href="#"
            className="text-base font-medium text-black underline underline-offset-4 hover:text-teal-600 transition-colors"
          >
            See All Products
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 lg:gap-5 w-full justify-items-center  ">
          {loading && <div className="col-span-full">Loading products...</div>}
          {!loading && products && products.length === 0 && (
            <div className="col-span-full">No products found.</div>
          )}
          {!loading &&
            products?.map((p) => (
              <ProductCard
                key={p.id}
                title={p.name}
                price={new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
                  p.price
                )}
                originalPrice={""}
                imageSrc={p.photoUrl || "/placeholder.png"}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;