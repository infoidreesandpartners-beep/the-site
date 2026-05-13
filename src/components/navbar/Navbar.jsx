import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang, isAr } = useLang();
  const tr = t[lang];

  const navLinks = [
    { name: tr.nav_home, page: 'Home' },
    { name: tr.nav_firm, page: 'About' },
    { name: tr.nav_practice, page: 'PracticeAreas' },
    { name: tr.nav_regional, page: 'FutureVision' },
    { name: tr.nav_contact, page: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        dir={isAr ? 'rtl' : 'ltr'}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#0a1628]/95 backdrop-blur-xl shadow-lg shadow-black/20 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to={createPageUrl('Home')} onClick={handleNavClick} className="group flex-shrink-0">
            <div>
              <p className="font-serif-display text-white text-lg lg:text-xl tracking-wide leading-tight group-hover:text-[#c9a96e] transition-colors">
                {isAr ? 'إدريس وشركاه' : 'Idrees & Partners'}
              </p>
              <p className="text-[#c9a96e] text-[9px] tracking-[0.3em] uppercase group-hover:text-[#dfc59b] transition-colors">
                {isAr ? 'استشارات قانونية' : 'Legal Consultancy'}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className={`hidden lg:flex items-center gap-7 ${isAr ? 'mr-auto' : 'ml-auto'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                onClick={handleNavClick}
                className="nav-link-underline text-white/80 hover:text-[#c9a96e] text-sm tracking-wider uppercase transition-colors duration-300 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-[#c9a96e]/40 text-[#c9a96e] text-xs tracking-wider hover:bg-[#c9a96e] hover:text-[#0a1628] transition-all duration-300 font-medium"
            >
              {isAr ? 'EN' : 'عربي'}
            </button>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className={`lg:hidden flex items-center gap-3 ${isAr ? 'mr-auto' : 'ml-auto'}`}>
            <button
              onClick={toggleLang}
              className="px-2.5 py-1 border border-[#c9a96e]/40 text-[#c9a96e] text-xs hover:bg-[#c9a96e] hover:text-[#0a1628] transition-all font-medium"
            >
              {isAr ? 'EN' : 'عربي'}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white p-2">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            dir={isAr ? 'rtl' : 'ltr'}
            className="fixed inset-0 z-40 bg-[#0a1628]/98 backdrop-blur-xl pt-24 px-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.page}
                  initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={createPageUrl(link.page)}
                    onClick={handleNavClick}
                    className="text-white/90 hover:text-[#c9a96e] text-2xl font-serif-display tracking-wide transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}