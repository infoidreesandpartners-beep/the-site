import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

const slideBgs = [
  { bg: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80', location: 'Dubai, UAE' },
  { bg: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1920&q=80', location: 'Giza, Egypt' },
  { bg: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=1920&q=80', location: 'Riyadh, Saudi Arabia' },
  { bg: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1920&q=80', location: 'Doha, Qatar' },
  { bg: 'https://images.unsplash.com/photo-1559564484-e48b3e040ff4?w=1920&q=80', location: 'Muscat, Oman' },
];

const INTERVAL = 5000;

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const { lang, isAr } = useLang();
  const tr = t[lang];

  const slides = slideBgs.map((s, i) => ({
    ...s,
    tag: tr[`hero_tag_${i}`],
    headline: tr[`hero_headline_${i}`],
    description: tr[`hero_desc_${i}`],
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section dir={isAr ? 'rtl' : 'ltr'} className="relative h-screen w-full overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <img src={slide.bg} alt={slide.location} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/40 via-[#0a1628]/25 to-[#0a1628]/65" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #c9a96e 1px, transparent 0)`, backgroundSize: '50px 50px' }} />

      <div className="absolute inset-0 z-[1] flex items-end justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-serif-display text-[35vw] leading-none text-white/[0.02] font-bold -mb-[5vw]">I</span>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8 pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: isAr ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isAr ? -60 : 60 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="max-w-2xl xl:max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">{slide.tag}</span>
            </div>
            <h1 className="font-serif-display text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.08] whitespace-pre-line mb-6">
              {slide.headline}
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
              {slide.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={createPageUrl('About')}
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className="px-8 py-4 bg-[#c9a96e] text-[#0a1628] text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#dfc59b] transition-all duration-300"
              >
                {tr.hero_cta_discover}
              </Link>
              <Link
                to={createPageUrl('Contact')}
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className="px-8 py-4 border border-white/30 text-white text-sm tracking-[0.15em] uppercase hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
              >
                {tr.hero_cta_consult}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`loc-${index}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-16 right-6 lg:right-8 z-10 hidden sm:flex items-center gap-2"
        >
          <MapPin size={12} className="text-[#c9a96e]" />
          <span className="text-white/40 text-xs tracking-[0.25em] uppercase">{slide.location}</span>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-10 left-6 lg:left-8 z-10 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="relative h-0.5 overflow-hidden rounded-full transition-all duration-300"
            style={{ width: i === index ? 40 : 14 }}
          >
            <div className="absolute inset-0 bg-white/20 rounded-full" />
            {i === index && (
              <motion.div
                className="absolute inset-0 bg-[#c9a96e] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                style={{ transformOrigin: 'left' }}
              />
            )}
          </button>
        ))}
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={16} className="text-[#c9a96e]" />
      </motion.div>
    </section>
  );
}