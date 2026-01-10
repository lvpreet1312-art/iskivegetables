import React from "react";

const reasons = [
  { 
    title: "100% Hygienic", 
    desc: "Triple-washed and packed in a sterile environment.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    )
  },
  { 
    title: "Instant Delivery", 
    desc: "From our cut-station to your door in 30 minutes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  { 
    title: "Farm Fresh", 
    desc: "Sourced directly from local farms every morning.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.856.12-1.683.342-2.466" />
      </svg>
    )
  },
];

export default function WhyChooseUs() {
  return (
    <section className="px-6 py-8 bg-white">
      <h2 className="text-xl font-bold text-olive mb-6">Why Choose Us</h2>
      <div className="space-y-4">
        {reasons.map((reason) => (
          <div key={reason.title} className="flex items-start p-5 bg-gray-50 rounded-2xl border border-gray-divider">
            <div className="p-3 bg-white rounded-xl text-olive shadow-sm border border-gray-divider mr-4">
              {reason.icon}
            </div>
            <div>
              <h3 className="text-sm font-bold text-black mb-1">{reason.title}</h3>
              <p className="text-xs text-black/50 leading-relaxed">{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
