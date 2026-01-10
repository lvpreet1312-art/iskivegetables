"use client";

import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-divider px-4 py-3">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-olive">FreshCut</h1>
        <div className="w-10 h-10 flex items-center justify-center">
          {/* Cart Icon Placeholder */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-olive">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.112 11.122A1.25 1.25 0 0 1 18.331 21H5.669a1.25 1.25 0 0 1-1.233-1.371l1.112-11.122c.046-.464.44-.807.907-.807h12.115c.467 0 .861.343.907.807Z" />
          </svg>
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search vegetables"
          className="w-full bg-pista/20 border-none rounded-full py-2 px-10 text-sm focus:ring-1 focus:ring-olive outline-none placeholder:text-olive/60"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-olive">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
      </div>
    </header>
  );
}
