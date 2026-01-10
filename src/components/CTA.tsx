import React from "react";

export default function CTA() {
  return (
    <section className="px-6 py-12 bg-olive-500 text-center rounded-t-2xl">
      <h2 className="text-2xl font-bold text-white mb-3">
        Make Cooking Faster & Healthier
      </h2>
      <p className="text-white/80 text-sm mb-8 font-medium">
        Download our app to get fresh cut vegetables delivered in 30 minutes.
      </p>
      <div className="flex flex-col space-y-3 px-4">
        <button className="bg-black text-white py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center space-x-2 shadow-lg active:scale-95 transition-transform">
          <span>App Store</span>
        </button>
        <button className="bg-black text-white py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center space-x-2 active:scale-95 transition-transform">
          <span>Play Store</span>
        </button>
      </div>
    </section>
  );
}
