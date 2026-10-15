import React, { useState, useEffect } from 'react';
import { BRAND_NAME, PRICE, handleCheckoutClick } from '../config';
import { Waves, ArrowRight } from 'lucide-react';

export const StickyHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070913]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-2.5 sm:py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Brand Name & Wave Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group select-none text-left"
          aria-label={BRAND_NAME}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-neutral-950 shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform">
            <Waves className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white block leading-tight">
              {BRAND_NAME}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-amber-400/80 font-mono hidden sm:block">
              Solfeggio Soundscapes
            </span>
          </div>
        </a>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#vsl-presentation"
            className="hidden md:inline-flex text-xs text-neutral-300 hover:text-white transition-colors px-3 py-1.5"
          >
            Watch Video
          </a>
          <button
            type="button"
            onClick={() => handleCheckoutClick('sticky_header')}
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-neutral-950 font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_28px_rgba(245,158,11,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Get Access – {PRICE}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
