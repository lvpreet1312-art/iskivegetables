import React from "react";

export default function Hero() {
  return (
    <section className="px-6 py-10 bg-white">
      <h2 className="text-3xl font-bold text-olive-500 leading-tight mb-3">
        Fresh Cut<br />Vegetables
      </h2>
      <p className="text-lg text-black/70 font-medium leading-relaxed">
        Hygienic, pre-cut vegetables delivered to your doorstep.
      </p>
      <div className="mt-6 flex items-center space-x-2">
        <div className="h-1 w-12 bg-fresh-500 rounded-full"></div>
        <span className="text-xs font-semibold text-olive-500 uppercase tracking-wider">Trusted by 10k+ families</span>
      </div>
    </section>
  );
}
