import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import Categories from "@/components/Categories";
import Vision from "@/components/Vision";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pb-24">
      <Header />
      <Hero />
      <ProductCarousel />
      <Categories />
      <Vision />
      <WhyChooseUs />
      <CTA />
      <Footer />
      <BottomNav />
    </main>
  );
}
