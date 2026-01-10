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
    <section className="py-8 bg-white overflow-hidden">
      <div className="px-6 mb-6">
        <h2 className="text-xl font-bold text-olive-500">Popular Combos</h2>
        <p className="text-xs text-black/40">Hand-picked for your kitchen</p>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x-center no-scrollbar px-[calc(50%-120px)] space-x-0"
      >
        {comboProducts.map((product, index) => (
          <div key={product.id} data-index={index} className="snap-center shrink-0">
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
