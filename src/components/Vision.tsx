import React from "react";

export default function Vision() {
  return (
    <section className="px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 lg:py-16 xl:py-20 bg-white">
      <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-olive-500 mb-4 md:mb-6 xl:mb-8">Our Vision</h2>
        <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl p-4 md:p-6 lg:p-8 xl:p-12 2xl:p-16 border-2 lg:border-[3px] border-fresh-500">
          <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-black/70 leading-relaxed xl:leading-loose font-medium">
            We believe that a busy life shouldn&apos;t mean compromising on health. 
            FreshCut was born to support office-going professionals and busy individuals 
            by reducing kitchen prep time. Our goal is to make healthy, home-cooked meals 
            easier and faster, ensuring you can enjoy nutritious food no matter how 
            packed your schedule is.
          </p>
          <div className="mt-6 md:mt-8 xl:mt-10 flex items-center text-olive-500 font-bold text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl italic">
            — Healthy living, simplified.
          </div>
        </div>
      </div>
    </section>
  );
}
