import HeroSection from "../components/HeroSection";
import ProductStory from "../components/ProductStory";
import ProductHighlights from "../components/ProductHighlights";
import VisualGallery from "../components/VisualGallery";
import Craftsmanship from "../components/Craftsmanship";
import StylingSuggestions from "../components/StylingSuggestions";
import SocialProof from "../components/SocialProof";
import ConsultationForm from "../components/ConsultationForm";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductStory />
      <ProductHighlights />
      <VisualGallery />
      <Craftsmanship />
      <StylingSuggestions />
      <SocialProof />
      
      {/* Chốt hành trình */}
      <section className="py-24 bg-champagne-light text-center px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-emerald-dark mb-4">
          Đã đến lúc chọn sắc hoa dành riêng cho bạn.
        </h2>
      </section>
      
      <ConsultationForm />
      <FAQSection />
      <Footer />
    </main>
  );
}
