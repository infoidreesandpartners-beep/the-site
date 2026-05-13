import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scale, Building, Home, Users, Briefcase, Shield, Globe, ArrowRight, Lightbulb, Network, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLang } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className={className}>
      {children}
    </motion.div>
  );
}

export default function PracticeAreas() {
  const { lang, isAr } = useLang();
  const tr = t[lang];

  const practices = [
    {
      id: 'civil-law', icon: Scale,
      title: isAr ? 'القانون المدني' : 'Civil Law',
      desc: isAr ? 'خدمات تقاضٍ ومشورة مدنية شاملة عبر الإمارات والمملكة العربية السعودية وقطر وعُمان ومصر — تشمل الإصابات الشخصية والنزاعات التعاقدية والمطالبات التقصيرية والالتزامات المدنية.' : 'Comprehensive civil litigation and advisory services across the Gulf region — covering personal injury, contractual disputes, tort claims, and civil obligations under UAE, Saudi, Qatari, Omani, and Egyptian civil codes.',
      services: isAr ? ['دعم التقاضي المدني', 'النزاعات التعاقدية', 'المطالبات التقصيرية', 'الالتزامات المدنية', 'تقييم المسؤولية'] : ['Civil Litigation Support', 'Contractual Disputes', 'Tort Claims', 'Civil Obligations', 'Liability Assessment'],
    },
    {
      id: 'commercial-law', icon: Briefcase,
      title: isAr ? 'القانون التجاري' : 'Commercial Law',
      desc: isAr ? 'استشارات متخصصة في المعاملات التجارية والمنازعات التجارية واتفاقيات الوكالة وعقود الأعمال — مُصممة وفق الأطر القانونية التجارية لجميع الأسواق الخليجية.' : 'Expert counsel on commercial transactions, trade disputes, agency agreements, and business contracts — tailored to the commercial legal frameworks across all Gulf jurisdictions.',
      services: isAr ? ['العقود التجارية', 'المنازعات التجارية', 'اتفاقيات الوكالة', 'اتفاقيات التوزيع', 'التقاضي التجاري'] : ['Commercial Contracts', 'Trade Disputes', 'Agency Agreements', 'Distribution Agreements', 'Commercial Litigation'],
    },
    {
      id: 'real-estate', icon: Home,
      title: isAr ? 'قانون العقارات' : 'Real Estate',
      desc: isAr ? 'خدمات قانونية عقارية متخصصة في الخليج تشمل عمليات الاستحواذ على العقارات واتفاقيات التطوير ونزاعات الإيجار ونقل الملكية والامتثال التنظيمي.' : 'Specialized real estate legal services across the Gulf, including property acquisitions, development agreements, lease disputes, ownership transfers, and regulatory compliance.',
      services: isAr ? ['الاستحواذ على العقارات', 'اتفاقيات التطوير', 'نزاعات الإيجار', 'نقل الملكية', 'الامتثال العقاري'] : ['Property Acquisitions', 'Development Agreements', 'Lease Disputes', 'Ownership Transfers', 'Real Estate Compliance'],
    },
    {
      id: 'labor-employment', icon: Users,
      title: isAr ? 'قانون العمل والتوظيف' : 'Labor & Employment',
      desc: isAr ? 'خدمات قانون العمل الشاملة لأصحاب العمل والموظفين في الأسواق الخليجية — تشمل عقود العمل ونزاعات الإنهاء ومسائل التأمينات الاجتماعية والامتثال التنظيمي وفق قوانين العمل لدول مجلس التعاون.' : 'Full-spectrum labor law services for employers and employees across Gulf markets — covering employment contracts, termination disputes, GOSI matters, and regulatory compliance under GCC labor laws.',
      services: isAr ? ['عقود العمل', 'نزاعات الإنهاء', 'أنظمة العمل', 'الامتثال في مكان العمل', 'الدعم القانوني لإدارة الموارد البشرية'] : ['Employment Contracts', 'Termination Disputes', 'Labor Regulations', 'Workplace Compliance', 'HR Legal Support'],
    },
    {
      id: 'company-formation', icon: Building,
      title: isAr ? 'تأسيس الشركات والمنازعات المؤسسية' : 'Company Formation & Corporate Disputes',
      desc: isAr ? 'دعم متكامل لتأسيس الأعمال والحوكمة المؤسسية عبر الخليج — من الترخيص والهيكلة إلى نزاعات المساهمين وقرارات مجلس الإدارة والاستشارات في الدمج والاستحواذ.' : 'End-to-end support for business establishment and corporate governance across the Gulf — from licensing and structuring to shareholder disputes, board resolutions, and M&A advisory.',
      services: isAr ? ['تأسيس الشركات', 'نزاعات المساهمين', 'حوكمة الشركات', 'الدمج والاستحواذ', 'قرارات مجلس الإدارة'] : ['Company Formation', 'Shareholder Disputes', 'Corporate Governance', 'Mergers & Acquisitions', 'Board Resolutions'],
    },
    {
      id: 'administrative-law', icon: Shield,
      title: isAr ? 'القانون الإداري' : 'Administrative Law',
      desc: isAr ? 'إرشادات بشأن الامتثال التنظيمي والعقود الحكومية ومسائل الترخيص والطعون أمام الهيئات الإدارية في الإمارات والمملكة العربية السعودية وقطر وعُمان ومصر.' : 'Guidance on regulatory compliance, government contracts, licensing matters, and appeals before administrative bodies across UAE, Saudi Arabia, Qatar, Oman, and Egypt.',
      services: isAr ? ['الامتثال التنظيمي', 'العقود الحكومية', 'مسائل الترخيص', 'الطعون الإدارية', 'المشتريات العامة'] : ['Regulatory Compliance', 'Government Contracts', 'Licensing Matters', 'Administrative Appeals', 'Public Procurement'],
    },
    {
      id: 'family-law', icon: Heart,
      title: isAr ? 'قانون الأسرة' : 'Family Law',
      desc: isAr ? 'مشورة قانونية حساسة ومهنية في شؤون الأسرة عبر الأسواق الخليجية — تشمل الزواج والطلاق وحضانة الأطفال والميراث ومنازعات الأحوال الشخصية وفق الأطر القانونية المدنية والشرعية المعمول بها.' : 'Sensitive and professional legal counsel on family matters across Gulf jurisdictions — covering marriage, divorce, child custody, inheritance, and personal status disputes under applicable civil and religious law frameworks.',
      services: isAr ? ['الزواج والطلاق', 'حضانة الأطفال', 'نزاعات الميراث', 'مسائل الأحوال الشخصية', 'الوساطة الأسرية'] : ['Marriage & Divorce', 'Child Custody', 'Inheritance Disputes', 'Personal Status Matters', 'Family Mediation'],
    },
    {
      id: 'intellectual-property', icon: Lightbulb,
      title: isAr ? 'الملكية الفكرية' : 'Intellectual Property',
      desc: isAr ? 'حماية وتطبيق حقوق الملكية الفكرية عبر منطقة الخليج — تشمل العلامات التجارية وحقوق الطبع والبراءات والأسرار التجارية وفق أطر الملكية الفكرية لمجلس التعاون الخليجي والدولية.' : 'Protection and enforcement of intellectual property rights across the Gulf — covering trademarks, copyrights, patents, and trade secrets in compliance with GCC and international IP frameworks.',
      services: isAr ? ['تسجيل العلامات التجارية', 'حماية حقوق الطبع', 'استشارات البراءات', 'إنفاذ حقوق الملكية الفكرية', 'نزاعات الأسرار التجارية'] : ['Trademark Registration', 'Copyright Protection', 'Patent Advisory', 'IP Enforcement', 'Trade Secret Disputes'],
    },
    {
      id: 'cross-border-legal-support', icon: Network,
      title: isAr ? 'الدعم القانوني العابر للحدود' : 'Cross-Border Legal Support',
      desc: isAr ? 'تنسيق قانوني سلس للمعاملات والنزاعات والمسائل التنظيمية عبر الولايات القضائية المتعددة — يجسر المنظومتين القانونيتين المصرية والخليجية بمهنية وكفاءة.' : 'Seamless legal coordination for transactions, disputes, and regulatory matters spanning multiple jurisdictions — bridging Egyptian and Gulf legal systems with professionalism and efficiency.',
      services: isAr ? ['التنسيق متعدد الولايات القضائية', 'العقود العابرة للحدود', 'تنفيذ الأحكام الأجنبية', 'الامتثال التنظيمي', 'المعاملات الدولية'] : ['Multi-Jurisdiction Coordination', 'Cross-Border Contracts', 'Foreign Judgement Enforcement', 'Regulatory Compliance', 'International Transactions'],
    },
    {
      id: 'adr', icon: Globe,
      title: isAr ? 'التسوية البديلة للمنازعات' : 'Alternative Dispute Resolution',
      desc: isAr ? 'تسوية شاملة للنزاعات خارج نطاق القضاء — تشمل التحكيم أمام هيئات DIAC وADCCAC وSCCA وQICCA والغرف الدولية، فضلاً عن خدمات الوساطة والتفاوض والتوفيق المُصممة للسياق الخليجي والعابر للحدود.' : 'Comprehensive dispute resolution beyond litigation — including arbitration at DIAC, ADCCAC, SCCA, QICCA, and international chambers, as well as mediation, negotiation, and conciliation services tailored to Gulf and cross-border contexts.',
      services: isAr ? ['التحكيم (DIAC، ADCCAC، SCCA، QICCA)', 'الوساطة', 'التفاوض والتوفيق', 'تنفيذ الأحكام', 'اتفاقيات التسوية'] : ['Arbitration (DIAC, ADCCAC, SCCA, QICCA)', 'Mediation', 'Negotiation & Conciliation', 'Award Enforcement', 'Settlement Agreements'],
    },
  ];

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, []);

  return (
    <div dir={isAr ? 'rtl' : 'ltr'}>
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80" alt="Legal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/75" />
        </div>
        <div className="relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase">{tr.pa_label}</span>
              <div className="w-8 h-px bg-[#c9a96e]" />
            </div>
            <h1 className="font-serif-display text-white text-5xl lg:text-7xl">{tr.pa_title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-[#0a1628]/60 text-lg leading-relaxed">{tr.pa_intro}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-white pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {practices.map((p, i) => {
              const Icon = p.icon;
              const isEven = i % 2 === 0;
              return (
                <AnimatedSection key={p.id}>
                  <div id={p.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start scroll-mt-24`}>
                    <div className="lg:w-1/3">
                      <div className="w-16 h-16 bg-[#c9a96e]/10 flex items-center justify-center mb-6">
                        <Icon size={28} className="text-[#c9a96e]" />
                      </div>
                      <h3 className="font-serif-display text-[#0a1628] text-2xl lg:text-3xl mb-4">{p.title}</h3>
                      <p className="text-[#0a1628]/50 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                    <div className="lg:w-2/3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {p.services.map((s) => (
                          <div key={s} className="flex items-center gap-3 p-4 bg-[#f5f0e8]/60 border-l-2 border-[#c9a96e]/30 hover:border-[#c9a96e] hover:bg-[#f5f0e8] transition-all">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] flex-shrink-0" />
                            <span className="text-[#0a1628]/70 text-sm">{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {i < practices.length - 1 && <div className="section-divider mt-16" />}
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1628] py-20 text-center">
        <AnimatedSection>
          <h2 className="font-serif-display text-white text-3xl lg:text-4xl mb-4">{tr.pa_cta_title}</h2>
          <p className="text-white/40 mb-8">{tr.pa_cta_sub}</p>
          <Link
            to={createPageUrl('Contact')}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a96e] text-[#0a1628] text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#dfc59b] transition-all"
          >
            {tr.pa_cta_btn} <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}