import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

export default function GCCMapSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { lang, isAr } = useLang();
  const tr = t[lang];

  const countries = [
    { name: isAr ? 'الإمارات' : 'UAE', city: isAr ? 'دبي وأبوظبي' : 'Dubai & Abu Dhabi', flag: '🇦🇪' },
    { name: isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia', city: isAr ? 'الرياض وجدة' : 'Riyadh & Jeddah', flag: '🇸🇦' },
    { name: isAr ? 'قطر' : 'Qatar', city: isAr ? 'الدوحة' : 'Doha', flag: '🇶🇦' },
    { name: isAr ? 'عُمان' : 'Oman', city: isAr ? 'مسقط' : 'Muscat', flag: '🇴🇲' },
    { name: isAr ? 'مصر' : 'Egypt', city: isAr ? 'المقر الرئيسي' : 'Headquarters', flag: '🇪🇬', isHq: true },
  ];

  return (
    <section ref={ref} dir={isAr ? 'rtl' : 'ltr'} className="relative bg-[#f5f0e8] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">{tr.gcc_label}</span>
            <div className="w-8 h-px bg-[#c9a96e]" />
          </div>
          <h2 className="font-serif-display text-[#0a1628] text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
            {tr.gcc_title} <span className="text-gold-gradient">{tr.gcc_title_accent}</span>
          </h2>
          <p className="text-[#0a1628]/50 text-lg max-w-2xl mx-auto">{tr.gcc_desc}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {countries.map((country, i) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className={`relative p-6 bg-white rounded-sm shadow-sm hover-lift cursor-pointer group ${country.isHq ? 'ring-2 ring-[#c9a96e]' : ''}`}
            >
              {country.isHq && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-[#c9a96e] text-[#0a1628] text-[10px] tracking-[0.2em] uppercase font-medium">
                  {tr.gcc_hq}
                </div>
              )}
              <div className="text-3xl mb-3">{country.flag}</div>
              <h3 className="font-serif-display text-[#0a1628] text-lg mb-1">{country.name}</h3>
              <p className="text-[#0a1628]/40 text-sm flex items-center gap-1">
                <MapPin size={12} />
                {country.city}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="text-center mt-12">
          <Link
            to={createPageUrl('FutureVision')}
            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
            className="group inline-flex items-center gap-3 text-[#c9a96e] text-sm tracking-[0.15em] uppercase font-medium"
          >
            {tr.gcc_cta}
            <ArrowRight size={16} className={`group-hover:translate-x-2 transition-transform ${isAr ? 'rotate-180' : ''}`} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}