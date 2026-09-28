import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { LivingOptionsSection } from "./components/LivingOptionsSection";
import { GallerySection } from "./components/GallerySection";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-900 pb-16 sm:pb-0">
      {/* Minimal Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Warm, Minimal Hero */}
        <Hero />

        {/* 4 Core Care Services */}
        <ServicesSection />

        {/* Rooms & Monthly Fees */}
        <LivingOptionsSection />

        {/* Curated Indian Elder Photo Gallery */}
        <GallerySection />

        {/* Bowrampet Campus Location & Direct WhatsApp Contact */}
        <LocationSection />
      </main>

      {/* Minimal Clean Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp CTA */}
      <FloatingActions />
    </div>
  );
}
