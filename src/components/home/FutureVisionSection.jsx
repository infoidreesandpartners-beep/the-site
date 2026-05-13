import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, TrendingUp, Target, Zap } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

export default function FutureVisionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { lang, isAr } = useLang();
  const tr = t[lang];

  const visionPoints = [
    { icon: TrendingUp, title: tr.fv_p1_title, desc: tr.fv_p1_desc },
    { icon: Target, title: tr.fv_p2_title, desc: tr.fv_p2_desc },
    { icon: Zap, title: tr.fv_p3_title, desc: tr.fv_p3_desc },
  ];

  return (
    <section ref={ref} dir={isAr ? 'rtl' : 'ltr'} className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#f5f0e8]/50 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="relative">
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80"
              alt="Future Vision"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c9a96e]/30 -z-10" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">{tr.fv_label}</span>
            </div>
            <h2 className="font-serif-display text-[#0a1628] text-4xl lg:text-5xl leading-tight mb-8">
              {tr.fv_title}{' '}
              <span className="text-gold-gradient">{tr.fv_title_accent}</span>
            </h2>
            <p className="text-[#0a1628]/60 text-lg leading-relaxed mb-8">{tr.fv_desc}</p>
            <div className="space-y-6 mb-10">
              {visionPoints.map((point, i) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-sm bg-[#c9a96e]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-[#c9a96e]" />
                    </div>
                    <div>
                      <h3 className="font-serif-display text-[#0a1628] text-lg mb-2">{point.title}</h3>
                      <p className="text-[#0a1628]/50 text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <Link
              to={createPageUrl('FutureVision')}
              className="group inline-flex items-center gap-3 text-[#c9a96e] text-sm tracking-[0.15em] uppercase font-medium"
            >
              {tr.fv_cta}
              <ArrowRight size={16} className={`group-hover:translate-x-2 transition-transform ${isAr ? 'rotate-180' : ''}`} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}