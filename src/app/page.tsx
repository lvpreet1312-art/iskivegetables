import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import CategorySection from "@/components/CategorySection";
import Vision from "@/components/Vision";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="pb-24">
      <Header />
      <Hero />
      <ProductCarousel />
      
      <section className="px-4 mb-8">
        <h3 className="text-olive-500 text-lg font-semibold mb-4">Categories & Products</h3>
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
      <BottomNav />
    </main>
  );
}
