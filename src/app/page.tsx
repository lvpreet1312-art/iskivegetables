'use client';

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import CategorySection from "@/components/CategorySection";
import Vision from "@/components/Vision";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { products } from "@/data/products";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="pb-24 md:pb-0">
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <Hero />
      <ProductCarousel />
      
      <section className="px-4 md:px-8 lg:px-12 xl:px-16 mb-8 md:mb-12 lg:mb-16 xl:mb-20 max-w-[1920px] mx-auto">
        <h3 className="text-olive-500 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold mb-4 md:mb-6 xl:mb-8">Categories & Products</h3>
        <CategorySection title="Best Sellers" products={products.bestSellers} />
        <CategorySection title="Time Savers" products={products.timeSavers} />
        <CategorySection title="Daily Essentials" products={products.dailyEssentials} />
        <CategorySection title="Ready-to-Cook" products={products.readyToCook} />
        <CategorySection title="Meal Packs" products={products.mealPacks} />
        <CategorySection title="Combos" products={products.combos} />
      </section>

      <Vision />
      <WhyChooseUs />
      <CTA />
      <Footer />
      <BottomNav onMenuClick={() => setIsMenuOpen(true)} />
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
