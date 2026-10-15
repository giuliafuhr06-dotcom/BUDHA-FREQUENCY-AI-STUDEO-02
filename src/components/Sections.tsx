import React, { useState } from 'react';
import {
  BRAND_NAME,
  CHECKOUT_URL,
  CONTACT_EMAIL,
  GUARANTEE_DAYS,
  PRICE,
  handleCheckoutClick,
} from '../config';
import {
  Play,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Headphones,
  Smartphone,
  Laptop,
  Download,
  Clock,
  Compass,
  Heart,
  Moon,
  Sun,
  Flame,
  ChevronDown,
  ChevronUp,
  Waves,
  Zap,
} from 'lucide-react';
import { ModalType } from './LegalModals';

interface SectionsProps {
  onOpenModal: (type: ModalType) => void;
}

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 px-4 overflow-hidden text-center">
      {/* Decorative concentric soundwave rings in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none -z-10 opacity-20">
        <div className="w-full h-full rounded-full border border-amber-400/30 animate-ring" />
        <div className="absolute inset-8 rounded-full border border-teal-400/20 animate-ring [animation-delay:2s]" />
        <div className="absolute inset-16 rounded-full border border-purple-400/20 animate-ring [animation-delay:4s]" />
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Soft tag banner */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium uppercase tracking-widest mb-6 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>The 12 Sacred Harmonic Master Tones</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white tracking-tight leading-[1.15] mb-6">
          Align Your Inner State with the Pure Resonance of{' '}
          <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent italic">
            {BRAND_NAME}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light mb-8">
          A welcoming collection of 12 masterfully tuned Solfeggio soundscapes. Crafted to gently quiet mental noise, foster tranquil sleep, and restore heartfelt harmony to your daily sanctuary.
        </p>

        {/* Two Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#vsl-presentation"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-base border border-white/15 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg backdrop-blur-sm"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Watch the Video</span>
          </a>

          <button
            type="button"
            onClick={() => handleCheckoutClick('hero_buy_button')}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-neutral-950 font-bold text-base shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:shadow-[0_0_35px_rgba(245,158,11,0.65)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Buy Now – {PRICE}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Reassurance pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            12 High-Definition MP3s
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            Instant Digital Download
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            {GUARANTEE_DAYS}-Day Satisfaction Guarantee
          </span>
        </div>
      </div>
    </section>
  );
};

export const WhatIsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono uppercase tracking-wider mb-3">
            Acoustic Mathematics &amp; Nature
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight">
            What is {BRAND_NAME}?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            A sanctuary of acoustic resonance designed to help you transition from the constant sensory rush of the modern world into effortless stillness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
              <Waves className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif text-white mb-3">
              Sacred Solfeggio Proportions
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Every track in <strong>{BRAND_NAME}</strong> is mathematically calibrated to historical Solfeggio intervals—ancient sound patterns celebrated for centuries across contemplative traditions. These acoustic wave-shapes create a soothing psychoacoustic landscape that supports meditation and intentional calm.
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-5">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif text-white mb-3">
              Pristine High-Definition Studio Audio
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Engineered with warm analog textures, subtle harmonic overtones, and soft organic layers. With zero harsh synthetic edges or jarring frequencies, you can listen comfortably through earphones, high-fidelity headphones, or room speakers at any volume.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Moon className="w-6 h-6 text-purple-400" />,
      title: "Tranquil Nighttime Stillness",
      description: "Gently quiet looping bedtime thoughts and transition smoothly into serene, restful evening unwinding.",
    },
    {
      icon: <Compass className="w-6 h-6 text-teal-400" />,
      title: "Clarity in Daily Flow",
      description: "Create a peaceful sonic bubble while working, reading, or journaling to maintain focused mental ease.",
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-400" />,
      title: "Heartfelt Emotional Harmony",
      description: "Traditional frequencies such as 639Hz and 528Hz encourage feelings of compassion, warmth, and inner balance.",
    },
    {
      icon: <Sun className="w-6 h-6 text-amber-400" />,
      title: "Subtle Energetic Rejuvenation",
      description: "Refresh your spirit after demanding workdays or emotionally heavy environments through gentle acoustic resonance.",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Mindful Meditation Support",
      description: "Anchor your breath effortlessly without needing guided speech or distracting background music.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      title: "Stress-Free Daily Ritual",
      description: "Easily integrate 15 to 30 minutes of listening into your morning routine, afternoon pause, or evening unwinding.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
            Mindful Well-Being
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight">
            How {BRAND_NAME} Enhances Your Day
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3">
            Harmonic soundscapes created to support your natural rhythm, without complicated techniques or strenuous rituals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-serif text-white mb-2 font-medium">
                  {benefit.title}
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Find Your Quiet Space",
      desc: "Settle into a comfortable armchair, meditation cushion, or lie back in bed. Slip on your favorite headphones for optimal acoustic separation.",
    },
    {
      num: "02",
      title: "Select Your Daily Frequency",
      desc: "Choose from any of the 12 master tracks depending on your moment—whether you seek daytime clarity, emotional softening, or peaceful sleep.",
    },
    {
      num: "03",
      title: "Let the Soundwaves Carry You",
      desc: "Press play, breathe naturally, and let the pure harmonic vibrations dissolve mental tension without any need to concentrate or force your mind.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 relative bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3">
            Simplicity by Design
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight">
            How It Works in 3 Gentle Steps
          </h2>
          <p className="text-neutral-400 text-sm mt-3">
            No training, no mantras, and no complex manuals required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 relative text-left"
            >
              <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400/30 mb-3 font-mono">
                {step.num}
              </div>
              <h3 className="text-lg font-serif text-white mb-2 font-medium">
                {step.title}
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AvailableFrequenciesSection: React.FC = () => {
  // Exactly 12 tracks as required by prompt, with soft wording for medical-sounding names
  const tracks = [
    {
      freq: "174Hz",
      title: "Relief for pain",
      desc: "Traditionally associated with easing bodily tension and soothing gentle physical comfort.",
      tag: "Grounding Tone",
    },
    {
      freq: "258Hz",
      title: "Vitality",
      desc: "Traditionally associated with awakening natural energy, enthusiasm, and cellular vigor.",
      tag: "Vital Force",
    },
    {
      freq: "417Hz",
      title: "Transformation and change",
      desc: "Traditionally associated with gently letting go of lingering stagnation and welcoming constructive renewal.",
      tag: "Fresh Start",
    },
    {
      freq: "432Hz",
      title: "Calms the mind",
      desc: "Calibrated to nature's harmonic geometry, softly quieting racing thoughts and mental chatter.",
      tag: "Deep Calm",
    },
    {
      freq: "432Hz + 528Hz",
      title: "Opening paths",
      desc: "A synergistic dual-harmonic composition traditionally associated with breakthroughs and expanded clarity.",
      tag: "Dual Resonance",
    },
    {
      freq: "528Hz",
      title: "Solfeggio Frequency",
      desc: "The celebrated 'Miracle' tone, revered across harmonic traditions for heartfelt peace and inner balance.",
      tag: "Heart Tone",
    },
    {
      freq: "639Hz",
      title: "Harmonious relationships",
      desc: "Traditionally associated with nurturing open-hearted empathy, connection, and emotional warmth.",
      tag: "Connection",
    },
    {
      freq: "741Hz",
      title: "Detox",
      desc: "Traditionally associated with clearing mental clutter, refreshing intuitive perspective, and inner reset.",
      tag: "Clarity Reset",
    },
    {
      freq: "852Hz",
      title: "Intuition",
      desc: "Traditionally associated with sharpening instinctive inner vision and tranquil mindfulness.",
      tag: "Inner Vision",
    },
    {
      freq: "888Hz",
      title: "Prosperity and abundance",
      desc: "Traditionally associated with cultivating gratitude, abundance mindset, and fruitful flow.",
      tag: "Abundance Tone",
    },
    {
      freq: "963Hz",
      title: "Spiritual connection",
      desc: "Traditionally associated with pure universal stillness, higher consciousness, and serene awakening.",
      tag: "Crown Harmony",
    },
    {
      freq: "Master Suite",
      title: "Sounds of Nature",
      desc: "Organic natural forest, rain, and stream elements softly interwoven with restorative harmonic undertones.",
      tag: "Earth Sanctuary",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3">
            Complete 12-Track Master Collection
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight">
            The 12 Sacred Tracks of {BRAND_NAME}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3">
            Every audio file is delivered in pristine 320kbps MP3 format for instant listening on any phone, tablet, or desktop player.
          </p>
        </div>

        {/* 12 Tracks Grid — strictly names, frequency, and purpose. NO audio preview/play buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tracks.map((track, i) => (
            <div
              key={i}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 font-semibold border border-amber-500/20">
                    {track.freq}
                  </span>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-mono">
                    {track.tag}
                  </span>
                </div>
                <h3 className="text-lg font-serif text-white font-medium mb-2">
                  {track.title}
                </h3>
                <p className="text-neutral-300 text-xs leading-relaxed">
                  {track.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                <span>Master MP3 Track</span>
                <span className="text-amber-400/90 font-mono">Full High-Def</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhatsIncludedSection: React.FC = () => {
  // STRICT RULE: NO TESTIMONIALS. Instead: What's included.
  const inclusions = [
    {
      icon: <Waves className="w-6 h-6 text-amber-400" />,
      title: "12 Master Solfeggio Audio Tracks",
      desc: "Complete 12-track collection exported in premium studio-grade MP3 bitrate for deep, uncompressed acoustic richness.",
    },
    {
      icon: <Download className="w-6 h-6 text-teal-400" />,
      title: "Instant Digital Access",
      desc: "Receive your private digital member link immediately upon checkout. No waiting for physical shipping.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-purple-400" />,
      title: "Universal Device Compatibility",
      desc: "Compatible with any smartphone, iPhone, Android, iPad, Mac, Windows PC, or standalone MP3 audio player.",
    },
    {
      icon: <Clock className="w-6 h-6 text-rose-400" />,
      title: "Lifetime Ownership & No Subscriptions",
      desc: "Pay once, own forever. No monthly charges, renewal fees, or expiring licenses. Download as often as you wish.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 relative bg-white/[0.015]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono uppercase tracking-wider mb-3">
            Digital Package Details
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight">
            What&apos;s Included with {BRAND_NAME}
          </h2>
          <p className="text-neutral-400 text-sm mt-3">
            Everything you need for an immersive, lifelong acoustic wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inclusions.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-serif text-white font-medium mb-1.5">
                  {item.title}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const OfferCardSection: React.FC = () => {
  return (
    <section id="offer" className="py-16 md:py-24 px-4 relative">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[650px] h-[450px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-2xl mx-auto">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-center relative overflow-hidden">
          {/* Subtle top banner */}
          <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
            Complete Digital Audio Suite
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight mb-2">
            Experience {BRAND_NAME} Today
          </h2>
          <p className="text-neutral-300 text-sm max-w-md mx-auto mb-6">
            Get instant, lifetime digital access to all 12 sacred harmonic MP3 frequencies.
          </p>

          {/* Price presentation */}
          <div className="my-6 flex items-baseline justify-center gap-2">
            <span className="text-neutral-400 line-through text-lg sm:text-xl font-mono">$97</span>
            <span className="text-4xl sm:text-5xl font-bold font-serif text-amber-400">{PRICE}</span>
            <span className="text-neutral-300 text-xs sm:text-sm uppercase font-mono tracking-wider">one-time payment</span>
          </div>

          {/* Included track bullet points */}
          <div className="text-left max-w-md mx-auto space-y-3 mb-8 text-neutral-200 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>All 12 Solfeggio &amp; Nature MP3 Master Audio Tracks</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Instant Digital Access Delivery to your inbox</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Works on iPhone, Android, Tablet, Mac, Windows</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Lifetime ownership with zero recurring fees</span>
            </div>
          </div>

          {/* Large Gold Buy Button */}
          <button
            type="button"
            onClick={() => handleCheckoutClick('offer_card_buy_button')}
            className="w-full group relative overflow-hidden py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-neutral-950 font-bold text-lg sm:text-xl shadow-[0_0_35px_rgba(245,158,11,0.5)] hover:shadow-[0_0_50px_rgba(245,158,11,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 animate-pulse-gold cursor-pointer"
          >
            <div className="flex items-center justify-center gap-2.5 relative z-10">
              <span>Claim {BRAND_NAME} – {PRICE}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Visible Guarantee Badge with exact sentence */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-300 text-xs font-semibold mb-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{GUARANTEE_DAYS}-Day Money-Back Guarantee</span>
            </div>
            <p className="text-xs text-neutral-300 max-w-sm leading-relaxed">
              If you are not completely satisfied with {BRAND_NAME}, you can easily request a full 100% refund within {GUARANTEE_DAYS} days directly through the purchase platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500/20 to-yellow-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 shadow-inner">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-serif text-white mb-2">
              Our Friendly {GUARANTEE_DAYS}-Day Money-Back Guarantee
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-3">
              We want you to explore these soundscapes completely risk-free. Take a full {GUARANTEE_DAYS} days to listen, unwind, and experience {BRAND_NAME} in your own routine. If you do not feel aligned, simply request a prompt refund directly through the Hotmart customer portal.
            </p>
            <span className="text-xs text-amber-400 font-mono">
              Zero hassle • Full refund • Safe &amp; verified checkout
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I get my files?",
      a: "Immediately upon completing your order through Hotmart, you will receive an automated email containing your private download link and instant access portal. You can download the files directly to your device or stream them online at any time.",
    },
    {
      q: "What is the refund policy?",
      a: `We provide a full ${GUARANTEE_DAYS}-day money-back guarantee. If you are not satisfied with your purchase, you can request a 100% full refund directly through the Hotmart platform or by contacting our support team at ${CONTACT_EMAIL} within ${GUARANTEE_DAYS} days of purchase.`,
    },
    {
      q: "Can I listen on my phone?",
      a: `Yes! ${BRAND_NAME} is formatted in universal high-quality MP3 audio files. You can listen on any iPhone, iPad, Android smartphone, computer, or portable audio device. You can save them directly to your preferred music app or files folder.`,
    },
    {
      q: "Do I need special headphones or equipment?",
      a: "Standard stereo headphones or earbuds will provide a wonderful immersion experience. You may also enjoy listening over room speakers during meditation, yoga, or while resting in your living space.",
    },
    {
      q: "Is there any recurring subscription fee?",
      a: `No. ${BRAND_NAME} is a one-time purchase of ${PRICE}. There are no hidden fees, subscriptions, or recurring memberships. Once you purchase, you enjoy lifetime ownership of all 12 tracks.`,
    },
    {
      q: "When is the best time to listen to each frequency?",
      a: "You can listen whenever you need a peaceful transition: 432Hz is ideal for daytime focus and calming the mind; 528Hz and 639Hz are wonderful during meditation and emotional centering; while 174Hz or the Sounds of Nature are comforting companions for evening unwinding.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono uppercase tracking-wider mb-3">
            Common Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            Clear answers about accessing and experiencing {BRAND_NAME}.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg text-white font-medium">
                    {faq.q}
                  </span>
                  <div className="p-1 rounded-full bg-white/5 text-amber-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-neutral-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative text-center">
      <div className="max-w-3xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-500 mx-auto flex items-center justify-center text-neutral-950 mb-6 shadow-[0_0_30px_rgba(245,158,11,0.5)]">
          <Waves className="w-8 h-8" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight mb-4">
          Begin Your Journey with {BRAND_NAME}
        </h2>
        <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
          Give yourself the gift of daily harmony, grounded clarity, and restorative soundscapes. Backed by our {GUARANTEE_DAYS}-day satisfaction guarantee.
        </p>

        <div className="max-w-md mx-auto">
          <button
            type="button"
            onClick={() => handleCheckoutClick('final_cta_button')}
            className="w-full group relative overflow-hidden py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-neutral-950 font-bold text-lg sm:text-xl shadow-[0_0_35px_rgba(245,158,11,0.5)] hover:shadow-[0_0_50px_rgba(245,158,11,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 animate-pulse-gold cursor-pointer"
          >
            <div className="flex items-center justify-center gap-2.5 relative z-10">
              <span>Get Instant Access – {PRICE}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
          <p className="text-xs text-neutral-400 mt-3">
            Instant digital access • {GUARANTEE_DAYS}-day money-back guarantee • One-time payment
          </p>
        </div>
      </div>
    </section>
  );
};

export const FooterSection: React.FC<SectionsProps> = ({ onOpenModal }) => {
  return (
    <footer className="pt-14 pb-12 px-4 border-t border-white/10 bg-[#05060d] text-neutral-400 text-xs">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5 text-center md:text-left">
          <div>
            <span className="font-serif text-xl font-bold text-white block">
              {BRAND_NAME}
            </span>
            <span className="text-neutral-400 text-xs mt-1 block">
              Sacred Solfeggio &amp; Harmonic Soundscapes
            </span>
          </div>
        </div>

        {/* Modal Links */}
        <div className="py-6 flex flex-wrap items-center justify-center gap-6 text-neutral-300 text-xs font-medium">
          <button
            type="button"
            onClick={() => onOpenModal('privacy')}
            className="hover:text-amber-300 transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            Privacy Policy
          </button>
          <span className="text-neutral-600">•</span>
          <button
            type="button"
            onClick={() => onOpenModal('terms')}
            className="hover:text-amber-300 transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            Terms of Use
          </button>
          <span className="text-neutral-600">•</span>
          <button
            type="button"
            onClick={() => onOpenModal('refund')}
            className="hover:text-amber-300 transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            Refund Policy
          </button>
        </div>

        {/* Mandatory Health / Legal Disclaimer */}
        <div className="space-y-3 max-w-3xl mx-auto text-center text-neutral-400 text-[11px] leading-relaxed pt-2">
          <p>
            <strong>Disclaimer:</strong> This product does not replace medical or therapeutic care. Results may vary. Not intended to diagnose, treat, cure or prevent any disease. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          <p>
            <strong>Meta Advertising Disclaimer:</strong> This site is not part of Facebook or Meta Platforms, Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of META PLATFORMS, Inc.
          </p>
          <p className="pt-2 text-neutral-400">
            Copyright &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
