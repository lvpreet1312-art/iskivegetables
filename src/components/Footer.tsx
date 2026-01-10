import React from "react";

export default function Footer() {
  return (
    <footer className="hidden md:block bg-black text-white py-12 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-fresh-500 mb-4">FreshCut</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Revolutionizing the way you cook. Fresh, hygienic, and pre-cut vegetables delivered to your doorstep.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Our Farms</li>
            <li>Sustainability</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Email: hello@freshcut.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: 123, Green Park, Bangalore</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
        © 2026 FreshCut. All rights reserved.
      </div>
    </footer>
  );
}
