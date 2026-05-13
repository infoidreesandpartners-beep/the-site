import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
import PracticeAreasPreview from '@/components/home/PracticeAreasPreview';
import GCCMapSection from '@/components/home/GCCMapSection';
import FutureVisionSection from '@/components/home/FutureVisionSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutPreview />
      <PracticeAreasPreview />
      <GCCMapSection />
      <FutureVisionSection />
      <CTASection />
    </div>
  );
}