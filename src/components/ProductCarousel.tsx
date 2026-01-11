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
      
      threshold: 0.8,
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
    <section className="pt-4 pb-4 md:pt-4 md:pb-6 lg:pt-6 lg:pb-8 xl:pt-6 xl:pb-10 bg-white overflow-hidden">
      <div className="px-6 md:px-8 lg:px-12 xl:px-16 mb-3 md:mb-4 xl:mb-6 max-w-[1920px] mx-auto text-center lg:text-left">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-olive-500">Popular Combos</h2>
        <p className="text-xs md:text-sm lg:text-base xl:text-lg text-black/40">Hand-picked for your kitchen</p>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex lg:grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 overflow-x-auto lg:overflow-visible snap-x-center lg:snap-none no-scrollbar gap-4 md:gap-5 lg:gap-6 xl:gap-8 px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1920px] mx-auto"
      >
        {comboProducts.map((product, index) => (
          <div key={product.id} data-index={index} className="snap-center shrink-1 lg:shrink first:ml-[calc(50vw-140px)] last:mr-[calc(50vw-140px)] lg:first:ml-0 lg:last:mr-0">
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
