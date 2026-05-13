import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scale, Award, Shield, Users, BookOpen, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLang } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

function SectionInView({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className={className}>
      {children}
    </motion.div>);

}

export default function About() {
  const { lang, isAr } = useLang();
  const tr = t[lang];

  const values = [
  { icon: Scale, title: tr.val_integrity, desc: tr.val_integrity_desc },
  { icon: Award, title: tr.val_excellence, desc: tr.val_excellence_desc },
  { icon: Shield, title: tr.val_confidentiality, desc: tr.val_confidentiality_desc },
  { icon: Users, title: tr.val_client, desc: tr.val_client_desc },
  { icon: BookOpen, title: tr.val_expertise, desc: tr.val_expertise_desc },
  { icon: Target, title: tr.val_results, desc: tr.val_results_desc }];

  return (
    <div dir={isAr ? 'rtl' : 'ltr'}>
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="Office" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/75" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">{tr.about_page_label}</span>
              <div className="w-8 h-px bg-[#c9a96e]" />
            </div>
            <h1 className="font-serif-display text-white text-5xl lg:text-7xl">{tr.about_page_title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <SectionInView>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">{tr.about_mission_label}</span>
            </div>
            <h2 className="font-serif-display text-[#0a1628] text-4xl lg:text-5xl leading-tight mb-8">
              {tr.about_mission_title}{' '}
              <span className="text-gold-gradient">{tr.about_mission_accent}</span>
            </h2>
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex items-center gap-3">
                
                
              </div>
              <div className="flex items-center gap-3">
                
                
              </div>
            </div>
            <p className="text-[#0a1628]/60 text-lg leading-relaxed mb-6">{tr.about_mission_p1}</p>
            <p className="text-[#0a1628]/60 text-lg leading-relaxed mb-6">{tr.about_mission_p2}</p>
            <p className="text-[#0a1628]/60 text-lg leading-relaxed">{tr.about_mission_p3}</p>
          </SectionInView>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f5f0e8] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionInView className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">{tr.about_values_label}</span>
              <div className="w-8 h-px bg-[#c9a96e]" />
            </div>
            <h2 className="font-serif-display text-[#0a1628] text-4xl lg:text-5xl">{tr.about_values_title}</h2>
          </SectionInView>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <SectionInView key={v.title}>
                  <div className="bg-white p-8 hover-lift h-full">
                    <div className="w-14 h-14 bg-[#c9a96e]/10 flex items-center justify-center mb-6">
                      <Icon size={24} className="text-[#c9a96e]" />
                    </div>
                    <h3 className="font-serif-display text-[#0a1628] text-xl mb-3">{v.title}</h3>
                    <p className="text-[#0a1628]/50 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </SectionInView>);

            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 text-center">
        <SectionInView>
          <h2 className="font-serif-display text-[#0a1628] text-3xl lg:text-4xl mb-8">{tr.about_cta_title}</h2>
          <Link
            to={createPageUrl('Contact')}
            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a96e] text-[#0a1628] text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#dfc59b] transition-all">
            
            {tr.about_cta_btn}
            <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
          </Link>
        </SectionInView>
      </section>
    </div>);

}