'use client';

import React, { useState } from "react";
import Image from "next/image";
import { Product, products } from "@/data/products";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Category {
  id: string;
  name: string;
  key: keyof typeof products;
}

const categories: Category[] = [
  { id: "popularCombos", name: "Popular Combos", key: "popularCombos" },
  { id: "dailyEssentials", name: "Daily Essentials", key: "dailyEssentials" },
  { id: "bestSellers", name: "Best Sellers", key: "bestSellers" },
  { id: "readyToCook", name: "Ready to Cook", key: "readyToCook" },
  { id: "timeSavers", name: "Time Savers", key: "timeSavers" }
];

export default function Menu({ isOpen, onClose }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>("popularCombos");

  const activeCategoryData = categories.find(cat => cat.id === activeCategory);
  const categoryProducts = activeCategoryData ? products[activeCategoryData.key] ?? [] : [];

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full md:max-w-4xl h-[85vh] md:h-[80vh] rounded-t-3xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-fresh-500 to-olive-500 px-6 py-6 text-white">
          <h2 className="text-2xl font-bold">Best Seller</h2>
          <p className="text-sm opacity-90 mt-1">Every Step Tells a Story — These Are the Favorites</p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar - Categories */}
          <div className="w-[35%] bg-white border-r border-gray-200 overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <h3 className="text-lg font-bold text-black">Categories</h3>
              <button 
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="py-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-6 py-4 text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "text-fresh-500 bg-fresh-500/5"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Content - Products */}
          <div className="flex-1 bg-gray-50 overflow-y-auto">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-black mb-4">
                View All {activeCategoryData?.name}
              </h3>
              <div className="space-y-3">
                {categoryProducts.map((product: Product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-16 h-16 bg-light-100 rounded-lg flex items-center justify-center overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm mb-0.5">
                          {product.name}
                        </h4>
                        <p className="text-xs text-gray-500 line-clamp-1">{product.desc}</p>
                        <p className="text-sm font-bold text-fresh-500 mt-1">{product.price}</p>
                      </div>
                    </div>
                    <button 
                      className="w-8 h-8 bg-olive-500 text-white rounded-full flex items-center justify-center shrink-0 hover:bg-olive-500/90 transition-colors"
                      aria-label="Add to cart"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
