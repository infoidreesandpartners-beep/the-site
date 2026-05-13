import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { lang, isAr } = useLang();
  const tr = t[lang];

  return (
    <section ref={ref} dir={isAr ? 'rtl' : 'ltr'} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="Modern architecture" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1628]/85" />
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">{tr.cta_label}</span>
            <div className="w-8 h-px bg-[#c9a96e]" />
          </div>
          <h2 className="font-serif-display text-white text-4xl lg:text-5xl xl:text-6xl leading-tight mb-8">
            {tr.cta_title}
            <br />
            <span className="text-gold-gradient">{tr.cta_title_accent}</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-12">{tr.cta_desc}</p>
          <Link
            to={createPageUrl('Contact')}
            className="px-10 py-4 bg-[#c9a96e] text-[#0a1628] text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#dfc59b] transition-all duration-300 inline-flex items-center gap-3"
          >
            {tr.cta_btn}
            <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}