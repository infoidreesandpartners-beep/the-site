import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Scale, Award, Users, Globe } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

export default function AboutPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { lang, isAr } = useLang();
  const tr = t[lang];

  const highlights = [
    { Icon: Scale, text: tr.about_feat_1 },
    { Icon: Award, text: tr.about_feat_2 },
    { Icon: Users, text: tr.about_feat_3 },
    { Icon: Globe, text: tr.about_feat_4 },
  ];

  return (
    <section ref={ref} dir={isAr ? 'rtl' : 'ltr'} className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f5f0e8]/50 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">{tr.about_label}</span>
          </div>
          <h2 className="font-serif-display text-[#0a1628] text-4xl lg:text-5xl xl:text-6xl leading-[1.1] mb-8 max-w-3xl">
            {tr.about_title}
            <span className="text-gold-gradient"> {tr.about_title_accent}</span>
          </h2>
          <p className="text-[#0a1628]/60 text-lg leading-relaxed mb-6 max-w-3xl">{tr.about_p1}</p>
          <p className="text-[#0a1628]/60 text-lg leading-relaxed mb-10 max-w-3xl">{tr.about_p2}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {highlights.map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c9a96e]/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#c9a96e]" />
                </div>
                <span className="text-[#0a1628]/70 text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
          <Link
            to={createPageUrl('About')}
            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
            className="group inline-flex items-center gap-3 text-[#c9a96e] text-sm tracking-[0.15em] uppercase font-medium hover:gap-5 transition-all"
          >
            {tr.about_cta}
            <ArrowRight size={16} className={`group-hover:translate-x-1 transition-transform ${isAr ? 'rotate-180' : ''}`} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}