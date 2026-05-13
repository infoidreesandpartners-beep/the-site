import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

const handleLinkClick = () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
};

export default function Footer() {
  const { lang, isAr } = useLang();
  const tr = t[lang];

  const quickLinks = [
    { name: tr.nav_firm, page: 'About' },
    { name: tr.nav_practice, page: 'PracticeAreas' },
    { name: tr.nav_regional, page: 'FutureVision' },
    { name: tr.nav_contact, page: 'Contact' },
  ];

  return (
    <footer dir={isAr ? 'rtl' : 'ltr'} className="bg-[#0a1628] text-white relative overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-serif-display text-[20vw] text-white/[0.02] font-bold">I</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p className="font-serif-display text-white text-xl">
                {isAr ? 'إدريس وشركاه' : 'Idrees & Partners'}
              </p>
              <p className="text-[#c9a96e] text-[9px] tracking-[0.3em] uppercase">
                {isAr ? 'استشارات قانونية' : 'Legal Consultancy'}
              </p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">{tr.footer_tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-6">{tr.footer_links}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <Link
                    to={createPageUrl(link.page)}
                    onClick={handleLinkClick}
                    className="text-white/60 hover:text-[#c9a96e] text-sm flex items-center gap-2 group transition-colors"
                  >
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office */}
          <div>
            <h4 className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-6">{tr.footer_office}</h4>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-[#c9a96e] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white/80 text-sm font-medium">{tr.footer_office_name}</p>
                <p className="text-white/40 text-xs">{tr.footer_office_sub}</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-6">{tr.footer_contact}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#c9a96e] flex-shrink-0" />
                <span className="text-white/60 text-sm">+201121175157</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-[#c9a96e] flex-shrink-0" />
                <span className="text-white/60 text-sm">info@idreesandpartners.cn.mt</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex justify-center items-center">
          <p className="text-white/30 text-xs">{tr.footer_copy}</p>
        </div>
      </div>
    </footer>
  );
}