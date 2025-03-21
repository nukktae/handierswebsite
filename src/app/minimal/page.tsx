'use client';

import HeroSection from "@/components/minimal/HeroSection";
import FeatureSection from "@/components/minimal/FeatureSection";
import AppShowcase from "@/components/minimal/AppShowcase";
import QRCodeSection from "@/components/minimal/QRCodeSection";
import ContactSection from "@/components/minimal/ContactSection";

export default function MinimalHome() {
  return (
    <main className="relative">
      <HeroSection />
      <FeatureSection />
      <AppShowcase />
      <ContactSection />
      <QRCodeSection />
    </main>
  );
} 