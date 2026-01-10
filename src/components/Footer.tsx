import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 md:py-12 lg:py-16 xl:py-20 px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 xl:gap-16 2xl:gap-20">
        <div>
          <h2 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-fresh-500 mb-3 md:mb-4 xl:mb-6">FreshCut</h2>
          <p className="text-gray-400 text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed xl:leading-loose">
            Revolutionizing the way you cook. Fresh, hygienic, and pre-cut vegetables delivered to your doorstep.
          </p>
        </div>
        <div>
          <h3 className="text-base md:text-lg xl:text-xl 2xl:text-2xl font-bold mb-3 md:mb-4 xl:mb-6">Quick Links</h3>
          <ul className="space-y-2 xl:space-y-3 text-gray-400 text-xs md:text-sm lg:text-base xl:text-lg">
            <li className="hover:text-fresh-500 cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-fresh-500 cursor-pointer transition-colors">Our Farms</li>
            <li className="hover:text-fresh-500 cursor-pointer transition-colors">Sustainability</li>
            <li className="hover:text-fresh-500 cursor-pointer transition-colors">Careers</li>
          </ul>
        </div>
        <div>
          <h3 className="text-base md:text-lg xl:text-xl 2xl:text-2xl font-bold mb-3 md:mb-4 xl:mb-6">Contact Info</h3>
          <ul className="space-y-2 xl:space-y-3 text-gray-400 text-xs md:text-sm lg:text-base xl:text-lg">
            <li>Email: hello@freshcut.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: 123, Green Park, Bangalore</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 md:mt-12 xl:mt-16 pt-6 md:pt-8 xl:pt-10 border-t border-white/10 text-center text-gray-500 text-xs md:text-sm lg:text-base">
        © 2026 FreshCut. All rights reserved.
      </div>
    </footer>
  );
}
