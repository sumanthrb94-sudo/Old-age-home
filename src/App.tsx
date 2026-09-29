import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { LivingOptionsSection } from "./components/LivingOptionsSection";
import { GallerySection } from "./components/GallerySection";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";
import { ComplianceModal } from "./components/ComplianceModal";

export default function App() {
  const [isComplianceOpen, setIsComplianceOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fbf6ed] text-[#27221f] flex flex-col font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* Clean Header */}
      <Header onOpenCompliance={() => setIsComplianceOpen(true)} />

      {/* Main Content Sections - Focused & High-Converting */}
      <main className="flex-1">
        {/* Hero Section with Top Real Images */}
        <Hero />

        {/* Part 1 (Facility Care 11) & Part 2 (Home Care 4) Services */}
        <ServicesSection />

        {/* 4 Transparent Stay & Room Pricing Options */}
        <LivingOptionsSection />

        {/* Authentic Campus Life Photo Gallery */}
        <GallerySection />

        {/* Campus Location Map & Visit Info */}
        <LocationSection />
      </main>

      {/* Clean Footer with Compliance Link */}
      <Footer onOpenCompliance={() => setIsComplianceOpen(true)} />

      {/* Animated Official WhatsApp Conversion Button */}
      <FloatingActions />

      {/* On-Demand Government Approvals, GST & PAN Modal */}
      <ComplianceModal
        isOpen={isComplianceOpen}
        onClose={() => setIsComplianceOpen(false)}
      />
    </div>
  );
}
