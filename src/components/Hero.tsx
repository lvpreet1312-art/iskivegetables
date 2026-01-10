import React from "react";

export default function Hero() {
  return (
    <section className="px-6 py-10 md:px-8 md:py-16 lg:px-12 lg:py-24 xl:py-32 xl:px-16 bg-white">
      <div className="max-w-[1920px] mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-olive-500 leading-tight mb-3 md:mb-6 xl:mb-8">
          Fresh Cut<br />Vegetables
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-black/70 font-medium leading-relaxed max-w-2xl xl:max-w-4xl 2xl:max-w-5xl">
          Hygienic, pre-cut vegetables delivered to your doorstep.
        </p>
        <div className="mt-6 md:mt-8 xl:mt-12 flex items-center space-x-2 md:space-x-3 xl:space-x-4">
          <div className="h-1 w-12 md:w-16 xl:w-20 bg-fresh-500 rounded-full"></div>
          <span className="text-xs md:text-sm xl:text-base 2xl:text-lg font-semibold text-olive-500 uppercase tracking-wider">Trusted by 10k+ families</span>
        </div>
      </div>
    </section>
  );
}
