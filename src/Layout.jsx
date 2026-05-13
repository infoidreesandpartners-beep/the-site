import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { LanguageProvider } from '@/lib/LanguageContext';

export default function Layout({ children }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a1628]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}