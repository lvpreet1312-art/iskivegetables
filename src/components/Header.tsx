"use client";

import React from "react";

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-divider px-4 py-3 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex items-center justify-between gap-6 lg:gap-8 xl:gap-12">
            <div className="flex items-center gap-3">
              <button 
                onClick={onMenuClick}
                className="lg:hidden w-10 h-10 flex items-center justify-center hover:bg-light-100 rounded-lg transition-colors"
                aria-label="Open menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-olive-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-olive-500 whitespace-nowrap">FreshCut</h1>
            </div>
          
          <div className="relative flex-1 max-w-3xl xl:max-w-4xl">
            <input
              type="text"
              placeholder="Search vegetables"
              className="w-full bg-light-100 border-none rounded-full py-2 px-10 md:py-3 md:px-12 lg:py-4 lg:px-14 text-sm md:text-base lg:text-lg focus:ring-2 focus:ring-fresh-500 outline-none placeholder:text-gray-400"
            />
            <div className="absolute left-3 md:left-4 lg:left-5 top-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <button className="hidden lg:flex items-center gap-2 px-4 py-2 hover:bg-light-100 rounded-lg transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-olive-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span className="text-sm font-medium text-olive-500">Profile</span>
            </button>
            <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center hover:bg-light-100 rounded-full transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-olive-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.112 11.122A1.25 1.25 0 0 1 18.331 21H5.669a1.25 1.25 0 0 1-1.233-1.371l1.112-11.122c.046-.464.44-.807.907-.807h12.115c.467 0 .861.343.907.807Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
