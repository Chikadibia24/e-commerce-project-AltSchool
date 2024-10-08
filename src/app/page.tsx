import Blog from "./components/blog-section/blog";
import CallToAction from "./components/call-to-action/call-to-action";
import Features from "./components/features-section/features";
import HeroSection from "./components/hero-section/hero-section";
import Products from "./components/products-section/products";
import Testimonials from "./components/testimonials/testimonials";

export default function Home() {
  return (
    <main className="w-[100%] flex flex-col items-center gap-[10px]">

      <HeroSection />
      <Products/>
      <Features/>
      <Blog />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
