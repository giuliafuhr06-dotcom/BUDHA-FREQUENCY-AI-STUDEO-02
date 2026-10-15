/**
 * Budah Frequency – High-Converting Responsive Sales Landing Page
 * BRAND NAME RULE: The product name is spelled exactly "Budah Frequency" everywhere.
 */

import React, { useState } from 'react';
import { StickyHeader } from './components/StickyHeader';
import { VSLPlayer } from './components/VSLPlayer';
import {
  HeroSection,
  WhatIsSection,
  BenefitsSection,
  HowItWorksSection,
  AvailableFrequenciesSection,
  WhatsIncludedSection,
  OfferCardSection,
  GuaranteeSection,
  FAQSection,
  FinalCTASection,
  FooterSection,
} from './components/Sections';
import { LegalModals, ModalType } from './components/LegalModals';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleOpenModal = (type: ModalType) => {
    setActiveModal(type);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="relative min-h-screen bg-[#070913] text-neutral-100 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background Cosmic Aurora Glows that drift gently */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft violet nebula glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-900/25 blur-[120px] animate-aurora-slow" />
        {/* Soft teal cosmic glow */}
        <div className="absolute top-[35%] -right-40 w-[550px] h-[550px] rounded-full bg-teal-900/20 blur-[130px] animate-aurora-delayed" />
        {/* Subtle warm gold aura */}
        <div className="absolute bottom-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-amber-600/10 blur-[140px] animate-aurora-slow" />
        {/* Starfield / fine grain texture simulation */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Sticky Top Header Navigation */}
      <StickyHeader />

      {/* Main Funnel Flow */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. VSL Player Section (Bunny Stream 9:16 vertical video + delayed buy button) */}
        <VSLPlayer />

        {/* 3. What is Budah Frequency */}
        <WhatIsSection />

        {/* 4. Benefits (Soft wording, 6 cards) */}
        <BenefitsSection />

        {/* 5. How It Works (3 Steps) */}
        <HowItWorksSection />

        {/* 6. Available Frequencies Grid (Exactly 12 tracks, no audio player buttons) */}
        <AvailableFrequenciesSection />

        {/* 7. NO TESTIMONIALS -> What's Included */}
        <WhatsIncludedSection />

        {/* 8. Offer Card ($37 one-time, guarantee badge with explanation, buy button) */}
        <OfferCardSection />

        {/* 9. Guarantee Section (Friendly block repeating guarantee & refund instructions) */}
        <GuaranteeSection />

        {/* 10. FAQ (6 comprehensive questions) */}
        <FAQSection />

        {/* 11. Final Call To Action */}
        <FinalCTASection />
      </main>

      {/* 12. Footer with Legal Disclaimer, Meta Disclaimer & Modals */}
      <FooterSection onOpenModal={handleOpenModal} />

      {/* Legal & Compliance Modals (Privacy Policy, Terms of Use, Refund Policy, Contact) */}
      <LegalModals activeModal={activeModal} onClose={handleCloseModal} />
    </div>
  );
}
