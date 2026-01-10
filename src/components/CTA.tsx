import React from "react";

export default function CTA() {
  return (
    <section className="px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 bg-olive-500 text-center rounded-t-2xl md:rounded-t-3xl xl:rounded-t-[3rem]">
      <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-3 md:mb-4 xl:mb-6">
          Make Cooking Faster & Healthier
        </h2>
        <p className="text-white/80 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-8 md:mb-10 xl:mb-12 font-medium">
          Download our app to get fresh cut vegetables delivered in 30 minutes.
        </p>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 xl:space-x-6 px-4 md:px-0 max-w-md xl:max-w-xl 2xl:max-w-2xl mx-auto">
          <button className="bg-black text-white py-3.5 md:py-4 xl:py-5 2xl:py-6 rounded-2xl xl:rounded-3xl font-bold text-sm md:text-base lg:text-lg xl:text-xl flex items-center justify-center space-x-2 shadow-lg active:scale-95 transition-transform hover:bg-black/90 flex-1">
            <span>App Store</span>
          </button>
          <button className="bg-black text-white py-3.5 md:py-4 xl:py-5 2xl:py-6 rounded-2xl xl:rounded-3xl font-bold text-sm md:text-base lg:text-lg xl:text-xl flex items-center justify-center space-x-2 active:scale-95 transition-transform hover:bg-black/90 flex-1">
            <span>Play Store</span>
          </button>
        </div>
      </div>
    </section>
  );
}
