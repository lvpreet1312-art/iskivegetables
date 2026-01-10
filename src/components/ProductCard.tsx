import React from "react";
import Image from "next/image";

interface ProductProps {
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  isCentered?: boolean;
}

export default function ProductCard({ name, category, description, price, image, isCentered }: ProductProps) {
  const isUrl = image.startsWith('http');
  const scaleClass = isCentered === undefined 
    ? '' 
    : (isCentered ? 'lg:scale-100 scale-95' : 'lg:scale-100 scale-80 lg:opacity-100 opacity-50');

  return (
    <div 
      className={`snap-center shrink-0 w-[240px] md:w-full transition-transform duration-300 ease-out transform ${scaleClass}`}
    >
      <div className="relative pt-12 md:pt-14 lg:pt-16 xl:pt-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48 z-10 drop-shadow-xl">
          <div className="w-full h-full bg-white rounded-full p-2 flex items-center justify-center overflow-hidden border border-fresh-500/20">
            {isUrl ? (
               <Image src={image} alt={name} width={192} height={192} className="w-full h-full object-cover rounded-full" />
            ) : (
               <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{image}</span>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-3xl p-6 md:p-7 lg:p-8 xl:p-9 2xl:p-10 pt-24 md:pt-28 lg:pt-32 xl:pt-36 2xl:pt-40 shadow-sm border border-fresh-500/20 text-center hover:shadow-lg hover:scale-[1.02] transition-all">
          <span className="inline-block px-3 py-1 xl:px-4 xl:py-1.5 bg-light-100 text-olive-500 text-[10px] md:text-xs lg:text-sm font-bold rounded-full uppercase tracking-wider mb-3">
            {category}
          </span>
          <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-2 xl:mb-3">{name}</h3>
          <p className="text-xs md:text-sm lg:text-base xl:text-lg text-black/50 line-clamp-2 min-h-[2.5rem] xl:min-h-[3rem] mb-4">
            {description}
          </p>
          <div className="flex items-center justify-between mt-2 xl:mt-4">
            <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-olive-500">{price}</span>
            <button className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-olive-500 text-white rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform hover:bg-olive-500/90">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
