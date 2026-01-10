"use client";

import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Mixed Stir Fry", category: "Stir Fry", description: "Freshly chopped bell peppers, broccoli, and carrots.", price: "₹120", image: "🥦" },
  { id: 2, name: "Onion & Potato", category: "Daily Essentials", description: "Peeled and diced onions and potatoes for quick cooking.", price: "₹60", image: "🧅" },
  { id: 3, name: "Classic Salad", category: "Salad Veggies", description: "Crunchy lettuce, cherry tomatoes, and cucumber slices.", price: "₹90", image: "🥗" },
  { id: 4, name: "Curry Cut Mix", category: "Curry Cuts", description: "Perfectly sized cubes of pumpkin, beans, and carrots.", price: "₹110", image: "🥘" },
  { id: 5, name: "Noodle Mix", category: "Genz Fast Food", description: "Fine julienned cabbage, carrots, and capsicum.", price: "₹85", image: "🍜" },
  { id: 6, name: "Soup Delight", category: "Soup Mix", description: "Healthy mix of corn, mushrooms, and spring onions.", price: "₹130", image: "🥣" },
  { id: 7, name: "Pasta Primavera", category: "Genz Fast Food", description: "Zucchini, bell peppers, and broccoli florets.", price: "₹140", image: "🍝" },
  { id: 8, name: "Sambar Kit", category: "Ready-to-Cook", description: "Drumsticks, pumpkin, and small onions ready for pot.", price: "₹75", image: "🍲" },
];

export default function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [centeredIndex, setCenteredIndex] = useState(0);

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
  }, []);

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="px-6 mb-6">
        <h2 className="text-xl font-bold text-olive">Popular Combos</h2>
        <p className="text-xs text-black/40">Hand-picked for your kitchen</p>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x-center no-scrollbar px-[calc(50%-120px)] space-x-0"
      >
        {products.map((product, index) => (
          <div key={product.id} data-index={index} className="snap-center shrink-0">
            <ProductCard 
              {...product} 
              isCentered={centeredIndex === index}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
