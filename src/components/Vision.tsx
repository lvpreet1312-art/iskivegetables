import React from "react";

export default function Vision() {
  return (
    <section className="px-6 py-8 bg-white">
      <div className="bg-pista/5 rounded-3xl p-8 border border-pista/10">
        <h2 className="text-xl font-bold text-olive mb-4">Our Vision</h2>
        <p className="text-sm text-black/70 leading-relaxed font-medium">
          We believe that a busy life shouldn't mean compromising on health. 
          FreshCut was born to support office-going professionals and busy individuals 
          by reducing kitchen prep time. Our goal is to make healthy, home-cooked meals 
          easier and faster, ensuring you can enjoy nutritious food no matter how 
          packed your schedule is.
        </p>
        <div className="mt-6 flex items-center text-olive font-bold text-xs italic">
          — Healthy living, simplified.
        </div>
      </div>
    </section>
  );
}
