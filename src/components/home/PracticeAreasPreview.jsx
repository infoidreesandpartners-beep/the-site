import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Scale, Briefcase, Home, Users, Building, Globe } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

export default function PracticeAreasPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();
  const { lang, isAr } = useLang();
  const tr = t[lang];

  const areas = [
    { icon: Scale, title: tr.practice_civil, anchor: 'civil-law', desc: tr.practice_civil_desc },
    { icon: Briefcase, title: tr.practice_commercial, anchor: 'commercial-law', desc: tr.practice_commercial_desc },
    { icon: Home, title: tr.practice_realestate, anchor: 'real-estate', desc: tr.practice_realestate_desc },
    { icon: Users, title: tr.practice_labor, anchor: 'labor-employment', desc: tr.practice_labor_desc },
    { icon: Building, title: tr.practice_corporate, anchor: 'company-formation', desc: tr.practice_corporate_desc },
    { icon: Globe, title: tr.practice_adr, anchor: 'adr', desc: tr.practice_adr_desc },
  ];

  const handleAreaClick = (anchor) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(`/PracticeAreas#${anchor}`);
  };

  return (
    <section ref={ref} dir={isAr ? 'rtl' : 'ltr'} className="relative bg-[#0a1628] py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #c9a96e 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">{tr.practice_label}</span>
            <div className="w-8 h-px bg-[#c9a96e]" />
          </div>
          <h2 className="font-serif-display text-white text-4xl lg:text-5xl xl:text-6xl leading-tight">
            {tr.practice_title} <span className="text-gold-gradient">{tr.practice_title_accent}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.anchor}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                onClick={() => handleAreaClick(area.anchor)}
                className="group relative p-8 border border-white/[0.06] hover:border-[#c9a96e]/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover-lift cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-[#c9a96e] to-transparent transition-all duration-700" />
                <div className="w-14 h-14 rounded-sm bg-[#c9a96e]/10 flex items-center justify-center mb-6 group-hover:bg-[#c9a96e]/20 transition-colors">
                  <Icon size={24} className="text-[#c9a96e]" />
                </div>
                <h3 className="font-serif-display text-white text-xl mb-3 group-hover:text-[#c9a96e] transition-colors">{area.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{area.desc}</p>
                <ArrowRight size={16} className={`text-[#c9a96e] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all ${isAr ? 'rotate-180' : ''}`} />
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="text-center mt-12">
          <Link
            to={createPageUrl('PracticeAreas')}
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#c9a96e] text-[#c9a96e] text-sm tracking-[0.15em] uppercase hover:bg-[#c9a96e] hover:text-[#0a1628] transition-all duration-300"
          >
            {tr.practice_cta}
            <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}