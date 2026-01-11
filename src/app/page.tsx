'use client';

import { useState, useMemo, useCallback } from "react";
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
import { products, Product } from "@/data/products";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filterProducts = useCallback((productList: Product[]) => {
    if (!searchQuery.trim()) return productList;
    
    const query = searchQuery.toLowerCase().trim();
    return productList.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.desc.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const filteredProducts = useMemo(() => ({
    bestSellers: filterProducts(products.bestSellers),
    timeSavers: filterProducts(products.timeSavers),
    dailyEssentials: filterProducts(products.dailyEssentials),
    readyToCook: filterProducts(products.readyToCook),
    mealPacks: filterProducts(products.mealPacks),
    combos: filterProducts(products.combos)
  }), [filterProducts]);

  const hasResults = Object.values(filteredProducts).some(list => list.length > 0);

  return (
    <main className="pb-24 md:pb-0">
      <Header 
        onMenuClick={() => setIsMenuOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <Hero />
      <ProductCarousel />
      
      <section className="px-4 md:px-8 lg:px-12 xl:px-16 mb-8 md:mb-12 lg:mb-16 xl:mb-20 max-w-[1920px] mx-auto">
        <h3 className="text-olive-500 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold mb-4 md:mb-6 xl:mb-8">Categories & Products</h3>
        
        {searchQuery && !hasResults && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found for &quot;{searchQuery}&quot;</p>
          </div>
        )}
        
        {filteredProducts.bestSellers.length > 0 && (
          <CategorySection title="Best Sellers" products={filteredProducts.bestSellers} />
        )}
        {filteredProducts.timeSavers.length > 0 && (
          <CategorySection title="Time Savers" products={filteredProducts.timeSavers} />
        )}
        {filteredProducts.dailyEssentials.length > 0 && (
          <CategorySection title="Daily Essentials" products={filteredProducts.dailyEssentials} />
        )}
        {filteredProducts.readyToCook.length > 0 && (
          <CategorySection title="Ready-to-Cook" products={filteredProducts.readyToCook} />
        )}
        {filteredProducts.mealPacks.length > 0 && (
          <CategorySection title="Meal Packs" products={filteredProducts.mealPacks} />
        )}
        {filteredProducts.combos.length > 0 && (
          <CategorySection title="Combos" products={filteredProducts.combos} />
        )}
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
