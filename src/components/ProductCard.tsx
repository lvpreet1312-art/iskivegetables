import React from "react";

interface ProductProps {
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  isCentered?: boolean;
}

export default function ProductCard({ name, category, description, price, image, isCentered }: ProductProps) {
  return (
    <div 
      className={`snap-center shrink-0 w-[240px] transition-transform duration-300 ease-out transform ${
        isCentered ? 'scale-105' : 'scale-90 opacity-60'
      }`}
    >
      <div className="relative pt-12">
        {/* Floating Image */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 z-10 drop-shadow-xl">
          <div className="w-full h-full bg-white rounded-full p-2 flex items-center justify-center overflow-hidden border border-gray-divider">
            <span className="text-4xl">{image}</span>
          </div>
        </div>
        
        {/* Card Body */}
        <div className="bg-white rounded-3xl p-6 pt-24 shadow-sm border border-gray-divider text-center">
          <span className="inline-block px-3 py-1 bg-pista/20 text-olive text-[10px] font-bold rounded-full uppercase tracking-wider mb-3">
            {category}
          </span>
          <h3 className="text-lg font-bold text-black mb-2">{name}</h3>
          <p className="text-xs text-black/50 line-clamp-2 min-h-[2.5rem] mb-4">
            {description}
          </p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xl font-bold text-olive">{price}</span>
            <button className="w-10 h-10 bg-olive text-white rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
