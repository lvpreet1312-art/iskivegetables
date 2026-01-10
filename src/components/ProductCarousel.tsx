"use client";

import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [centeredIndex, setCenteredIndex] = useState(0);

  // Use popularCombos from the new data
  const comboProducts = products.popularCombos;

  useEffect(() => {
    const observerOptions = {
      root: scrollRef.current,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setCenteredIndex(index);
        }
      });
    }, observerOptions);

    const cards = scrollRef.current?.querySelectorAll('.snap-center');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [comboProducts]); // Depend on products

  return (
    <section className="py-8 md:py-12 lg:py-16 xl:py-20 bg-white overflow-hidden">
      <div className="px-6 md:px-8 lg:px-12 xl:px-16 mb-6 md:mb-8 xl:mb-10 max-w-[1920px] mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-olive-500">Popular Combos</h2>
        <p className="text-xs md:text-sm lg:text-base xl:text-lg text-black/40">Hand-picked for your kitchen</p>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex lg:grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 overflow-x-auto lg:overflow-visible snap-x-center lg:snap-none no-scrollbar px-[calc(50%-120px)] md:px-8 lg:px-12 xl:px-16 space-x-0 lg:gap-6 xl:gap-8 max-w-[1920px] mx-auto"
      >
        {comboProducts.map((product, index) => (
          <div key={product.id} data-index={index} className="snap-center lg:snap-align-none shrink-0 lg:shrink">
            <ProductCard 
              name={product.name}
              category={product.category}
              description={product.desc}
              price={product.price}
              image={product.image}
              isCentered={centeredIndex === index}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
