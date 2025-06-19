
import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { JournalInterface } from '@/components/JournalInterface';
import { FeatureGrid } from '@/components/FeatureGrid';
import { PrivacyBanner } from '@/components/PrivacyBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wellness-neutral via-wellness-light to-wellness-accent/20">
      <Header />
      <main className="relative">
        <HeroSection />
        <PrivacyBanner />
        <JournalInterface />
        <FeatureGrid />
      </main>
    </div>
  );
};

export default Index;
