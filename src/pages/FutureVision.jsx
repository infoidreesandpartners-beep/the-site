import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  FileText, Scale, Briefcase, Mail, BookOpen, MessageSquare, FileCheck, Users,
  ArrowRight, CheckCircle, DollarSign, Clock, Award, MapPin, TrendingUp, Target, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLang } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

function AnimSection({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className={className}>
      {children}
    </motion.div>
  );
}

export default function FutureVision() {
  const [activeCountry, setActiveCountry] = useState(null);
  const { lang, isAr } = useLang();
  const tr = t[lang];

  const benefits = [
    { icon: DollarSign, title: tr.ben_cost, desc: tr.ben_cost_desc },
    { icon: Award, title: tr.ben_quality, desc: tr.ben_quality_desc },
    { icon: Clock, title: tr.ben_speed, desc: tr.ben_speed_desc },
    { icon: CheckCircle, title: tr.ben_flex, desc: tr.ben_flex_desc },
  ];

  const visionPoints = [
    { icon: TrendingUp, title: tr.fv_p1_title, desc: tr.fv_p1_desc },
    { icon: Target, title: tr.fv_p2_title, desc: tr.fv_p2_desc },
    { icon: Zap, title: tr.fv_p3_title, desc: tr.fv_p3_desc },
  ];

  const services = [
    { icon: FileText, title: isAr ? 'صياغة المذكرات القانونية' : 'Legal Memoranda Drafting', desc: isAr ? 'مذكرات قانونية دقيقة متوافقة مع القوانين الخليجية — تحليل معمّق وحجج منظّمة ومراجعة شاملة للتشريعات.' : 'Precise legal memoranda aligned with Gulf laws — in-depth analysis, structured arguments, and comprehensive legislation review.' },
    { icon: Scale, title: isAr ? 'صياغة ومراجعة العقود' : 'Contract Drafting and Review', desc: isAr ? 'خدمات تعاقدية ثنائية اللغة (العربية والإنجليزية) في مختلف القطاعات — ضماناً للدقة والامتثال وحماية العميل.' : 'Bilingual (Arabic & English) contract services across various sectors — ensuring accuracy, compliance, and client protection.' },
    { icon: Briefcase, title: isAr ? 'البلاغات الجنائية' : 'Criminal Complaints', desc: isAr ? 'إعداد وتقديم البلاغات الجنائية إلى الجهات المختصة مع الالتزام الصارم بالإجراءات القانونية.' : 'Preparation and filing of criminal complaints with relevant authorities, with strict adherence to procedural laws.' },
    { icon: Mail, title: isAr ? 'الإخطارات والمراسلات القانونية' : 'Legal Notices and Letters', desc: isAr ? 'صياغة ومراجعة الإخطارات القانونية الرسمية وغير الرسمية وخطابات المطالبة والمراسلات الوقائية.' : 'Drafting and review of official and unofficial legal notices, demand letters, and protective correspondence.' },
    { icon: BookOpen, title: isAr ? 'البحث القانوني' : 'Legal Research', desc: isAr ? 'بحث شامل في القانون المدني والتجاري والمؤسسي والعقاري وقانون العمل والجنائي — بما يشمل الممارسات القضائية.' : 'Thorough research across civil, commercial, corporate, real estate, labor, and criminal law — including judicial practices.' },
    { icon: MessageSquare, title: isAr ? 'الاستشارات القانونية' : 'Legal Consultations', desc: isAr ? 'آراء قانونية مكتوبة شاملة وتوجيه استراتيجي مُصمَّم وفق احتياجاتكم الخاصة والمعايير الإقليمية.' : 'Comprehensive written legal opinions and strategic guidance tailored to your specific needs and regional standards.' },
    { icon: FileCheck, title: isAr ? 'الملخصات القانونية' : 'Legal Summaries', desc: isAr ? 'تحليل وتلخيص القضايا القانونية والأحكام مع إبراز المسائل الرئيسية والتوصيات القابلة للتنفيذ.' : 'Analysis and summarization of legal cases and judgments, highlighting key issues and actionable recommendations.' },
    { icon: Users, title: isAr ? 'دعم قانوني شامل' : 'Comprehensive Legal Support', desc: isAr ? 'دعم قانوني متكامل مُصمَّم وفق متطلبات مكتبكم الفريدة — لتعزيز الإنتاجية والكفاءة التشغيلية.' : "End-to-end legal support tailored to your firm's unique requirements — enhancing productivity and operational efficiency." },
  ];

  const gccCountries = [
    {
      name: isAr ? 'الإمارات العربية المتحدة' : 'United Arab Emirates', flag: '🇦🇪',
      cities: isAr ? ['دبي', 'أبوظبي', 'الشارقة'] : ['Dubai', 'Abu Dhabi', 'Sharjah'],
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      desc: isAr ? 'دعم قانوني متخصص في DIFC وADGM والبر الرئيسي للإمارات — يشمل القضايا المدنية والتجارية والعقارية والمؤسسية.' : 'Specialized legal support across DIFC, ADGM, and mainland UAE — covering civil, commercial, real estate, and corporate matters.',
      services: isAr ? ['القانون المدني والتجاري', 'العقارات', 'النزاعات المؤسسية', 'التحكيم (DIAC/ADCCAC)'] : ['Civil & Commercial Law', 'Real Estate', 'Corporate Disputes', 'Arbitration (DIAC/ADCCAC)'],
    },
    {
      name: isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia', flag: '🇸🇦',
      cities: isAr ? ['الرياض', 'جدة', 'الدمام'] : ['Riyadh', 'Jeddah', 'Dammam'],
      image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=800&q=80',
      desc: isAr ? 'دعم مشاريع رؤية 2030 والمسائل القانونية في المملكة — من العقود التجارية إلى التحكيم أمام SCCA.' : 'Supporting Vision 2030 projects and legal matters across the Kingdom — from commercial contracts to SCCA arbitration.',
      services: isAr ? ['العقود التجارية', 'القانون الإداري', 'تأسيس الشركات', 'التحكيم (SCCA)'] : ['Commercial Contracts', 'Administrative Law', 'Company Formation', 'Arbitration (SCCA)'],
    },
    {
      name: isAr ? 'قطر' : 'Qatar', flag: '🇶🇦',
      cities: isAr ? ['الدوحة', 'الوكرة'] : ['Doha', 'Al Wakrah'],
      image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80',
      desc: isAr ? 'خدمات قانونية متخصصة في مشاريع البنية التحتية والطاقة والقضايا التجارية وفق الأطر المدنية وقانون العمل والعقارات في قطر.' : 'Expert legal services for infrastructure, energy, and commercial projects under Qatari civil, labor, and real estate frameworks.',
      services: isAr ? ['مشاريع البنية التحتية', 'قانون العمل', 'العقارات', 'التحكيم (QICCA)'] : ['Infrastructure Projects', 'Labor Law', 'Real Estate', 'Arbitration (QICCA)'],
    },
    {
      name: isAr ? 'عُمان' : 'Oman', flag: '🇴🇲',
      cities: isAr ? ['مسقط', 'صلالة'] : ['Muscat', 'Salalah'],
      image: 'https://images.unsplash.com/photo-1559564484-e48b3e040ff4?w=800&q=80',
      desc: isAr ? 'خدمات قانونية شاملة للشركات في قطاعات السياحة واللوجستيات والتجارة وفق القانون العُماني.' : 'Comprehensive legal services for businesses in tourism, logistics, and commercial sectors under Omani law.',
      services: isAr ? ['القانون التجاري', 'قانون العمل والتوظيف', 'تأسيس الشركات', 'الامتثال التنظيمي'] : ['Commercial Law', 'Labor & Employment', 'Company Formation', 'Regulatory Compliance'],
    },
  ];

  return (
    <div dir={isAr ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80" alt="Future Vision" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/80" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">{tr.rs_label}</span>
              <div className="w-8 h-px bg-[#c9a96e]" />
            </div>
            <h1 className="font-serif-display text-white text-5xl lg:text-7xl mb-4">{tr.rs_title}</h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">{tr.rs_subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Outsourcing Intro */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimSection className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">{tr.rs_opp_label}</span>
              <div className="w-8 h-px bg-[#c9a96e]" />
            </div>
            <h2 className="font-serif-display text-[#0a1628] text-4xl lg:text-5xl mb-8">
              {tr.rs_opp_title} <span className="text-gold-gradient">{tr.rs_opp_accent}</span>
            </h2>
            <p className="text-[#0a1628]/60 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">{tr.rs_opp_p1}</p>
            <p className="text-[#0a1628]/60 text-lg leading-relaxed max-w-3xl mx-auto">{tr.rs_opp_p2}</p>
          </AnimSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <AnimSection key={b.title}>
                  <div className="flex items-start gap-5 p-6 bg-[#f5f0e8]/50 border-l-2 border-[#c9a96e]/30 hover:border-[#c9a96e] transition-all">
                    <div className="w-12 h-12 bg-[#c9a96e]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-[#c9a96e]" />
                    </div>
                    <div>
                      <h3 className="font-serif-display text-[#0a1628] text-xl mb-2">{b.title}</h3>
                      <p className="text-[#0a1628]/50 text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                </AnimSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Points */}
      <section className="bg-[#f5f0e8] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimSection className="relative">
              <img src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=700&q=80" alt="Our Approach" className="w-full h-[420px] object-cover" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c9a96e]/30 -z-10" />
            </AnimSection>
            <AnimSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#c9a96e]" />
                <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">{tr.rs_approach_label}</span>
              </div>
              <h2 className="font-serif-display text-[#0a1628] text-4xl lg:text-5xl leading-tight mb-8">
                {tr.rs_approach_title} <span className="text-gold-gradient">{tr.rs_approach_accent}</span>
              </h2>
              <div className="space-y-6">
                {visionPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div key={point.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#c9a96e]/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-[#c9a96e]" />
                      </div>
                      <div>
                        <h3 className="font-serif-display text-[#0a1628] text-lg mb-1">{point.title}</h3>
                        <p className="text-[#0a1628]/50 text-sm leading-relaxed">{point.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* Outsourced Services */}
      <section className="bg-[#0a1628] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimSection className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">{tr.rs_services_label}</span>
              <div className="w-8 h-px bg-[#c9a96e]" />
            </div>
            <h2 className="font-serif-display text-white text-4xl lg:text-5xl">
              {tr.rs_services_title} <span className="text-gold-gradient">{tr.rs_services_accent}</span>
            </h2>
            <p className="text-white/40 mt-4 max-w-2xl mx-auto">{tr.rs_services_sub}</p>
          </AnimSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="group p-6 border border-white/[0.06] hover:border-[#c9a96e]/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#c9a96e]/10 flex items-center justify-center mb-5 group-hover:bg-[#c9a96e]/20 transition-colors">
                    <Icon size={20} className="text-[#c9a96e]" />
                  </div>
                  <h3 className="font-serif-display text-white text-lg mb-3 group-hover:text-[#c9a96e] transition-colors leading-snug">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GCC Network */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimSection className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">{tr.rs_gcc_label}</span>
              <div className="w-8 h-px bg-[#c9a96e]" />
            </div>
            <h2 className="font-serif-display text-[#0a1628] text-4xl lg:text-5xl mb-4">
              {tr.rs_gcc_title} <span className="text-gold-gradient">{tr.rs_gcc_accent}</span>
            </h2>
            <p className="text-[#0a1628]/50 max-w-2xl mx-auto">{tr.rs_gcc_sub}</p>
          </AnimSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gccCountries.map((country, i) => (
              <AnimSection key={country.name}>
                <div className="group relative overflow-hidden cursor-pointer hover-lift" onClick={() => setActiveCountry(activeCountry === i ? null : i)}>
                  <div className="relative h-64 overflow-hidden">
                    <img src={country.image} alt={country.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-3xl">{country.flag}</span>
                        <h3 className="font-serif-display text-white text-xl">{country.name}</h3>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin size={12} className="text-[#c9a96e]" />
                        <span className="text-white/60 text-xs">{country.cities.join(' · ')}</span>
                      </div>
                    </div>
                  </div>
                  <AnimatePresence>
                    {activeCountry === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="bg-[#f5f0e8] overflow-hidden">
                        <div className="p-6 space-y-4">
                          <p className="text-[#0a1628]/70 text-sm leading-relaxed">{country.desc}</p>
                          <div className="space-y-2">
                            {country.services.map((s) => (
                              <div key={s} className="flex items-center gap-2">
                                <CheckCircle size={14} className="text-[#c9a96e] flex-shrink-0" />
                                <span className="text-[#0a1628]/80 text-sm">{s}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Egypt HQ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1920&q=80" alt="Egypt Pyramids" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/90" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <AnimSection>
            <span className="text-6xl mb-6 inline-block">🇪🇬</span>
            <h2 className="font-serif-display text-white text-4xl lg:text-5xl mb-6">
              {tr.rs_egypt_title} <span className="text-gold-gradient">{tr.rs_egypt_accent}</span>
            </h2>
            <p className="text-white/70 text-lg mb-4 max-w-2xl mx-auto">{tr.rs_egypt_p1}</p>
            <p className="text-white/50 text-base max-w-xl mx-auto">{tr.rs_egypt_p2}</p>
          </AnimSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0a1628] py-20 text-center">
        <AnimSection>
          <h2 className="font-serif-display text-white text-3xl lg:text-4xl mb-4">{tr.rs_final_title}</h2>
          <p className="text-white/40 mb-8 max-w-xl mx-auto">{tr.rs_final_sub}</p>
          <Link
            to={createPageUrl('Contact')}
            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a96e] text-[#0a1628] text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#dfc59b] transition-all"
          >
            {tr.rs_final_btn} <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
          </Link>
        </AnimSection>
      </section>
    </div>
  );
}