import React from "react";

export default function Hero() {
  return (
    <section className="px-6 py-6 pb-0 md:px-8 md:py-8 md:pb-2 lg:px-12 lg:py-10 lg:pb-2 xl:py-12 xl:pb-2 xl:px-16 bg-white">
      <div className="max-w-[1920px] mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-olive-500 leading-tight mb-2 md:mb-3 xl:mb-4">
          Fresh Cut<br />Vegetables
        </h2>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl text-black/70 font-medium leading-relaxed max-w-md md:max-w-xl xl:max-w-2xl mx-auto md:mx-0">
          Hygienic, pre-cut vegetables delivered to your doorstep.
        </p>
        <div className="mt-4 md:mt-5 xl:mt-6 flex items-center justify-center md:justify-start space-x-2">
          <div className="h-1 w-10 md:w-12 bg-fresh-500 rounded-full"></div>
          <span className="text-[10px] md:text-xs xl:text-sm font-semibold text-olive-500 uppercase tracking-wider">Trusted by 10k+ families</span>
        </div>
      </div>
    </section>
  );
}
