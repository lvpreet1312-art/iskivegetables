import React from "react";

const categories = [
  { name: "Onion & Potato", icon: "🧅" },
  { name: "Salad Veggies", icon: "🥗" },
  { name: "Curry Cuts", icon: "🔪" },
  { name: "Stir Fry", icon: "🔥" },
  { name: "Daily Essentials", icon: "🧺" },
  { name: "Soup Mix", icon: "🥣" },
  { name: "Genz Fast Food", icon: "🍟" },
  { name: "Ready-to-Cook", icon: "👨‍🍳" },
];

export default function Categories() {
  return (
    <section className="px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-olive mb-6 md:mb-8">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-5">
          {categories.map((cat) => (
            <div 
              key={cat.name}
              className="bg-pista/10 border border-pista/20 rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center text-center active:scale-95 transition-transform hover:bg-pista/20 cursor-pointer"
            >
              <span className="text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-3">{cat.icon}</span>
              <span className="text-sm md:text-base font-semibold text-olive leading-tight">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
