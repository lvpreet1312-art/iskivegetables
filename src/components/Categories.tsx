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
    <section className="px-6 py-8 bg-white">
      <h2 className="text-xl font-bold text-olive mb-6">Categories</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div 
            key={cat.name}
            className="bg-pista/10 border border-pista/20 rounded-2xl p-4 flex flex-col items-center justify-center text-center active:scale-95 transition-transform"
          >
            <span className="text-3xl mb-2">{cat.icon}</span>
            <span className="text-sm font-semibold text-olive leading-tight">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
