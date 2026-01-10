import React from "react";

export default function Vision() {
  return (
    <section className="px-6 py-8 bg-white">
      <h2 className="text-xl font-bold text-olive-500 mb-4">Our Vision</h2>
      <div className="bg-white rounded-lg p-4 border border-fresh-500">
        <p className="text-sm text-black/70 leading-relaxed font-medium">
          We believe that a busy life shouldn&apos;t mean compromising on health. 
          FreshCut was born to support office-going professionals and busy individuals 
          by reducing kitchen prep time. Our goal is to make healthy, home-cooked meals 
          easier and faster, ensuring you can enjoy nutritious food no matter how 
          packed your schedule is.
        </p>
        <div className="mt-6 flex items-center text-olive-500 font-bold text-xs italic">
          — Healthy living, simplified.
        </div>
      </div>
    </section>
  );
}
