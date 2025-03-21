import HeroSection from "@/components/modern/HeroSection";
import FeatureSections from "@/components/modern/FeatureSections";
import AppShowcase from "@/components/modern/AppShowcase";
import QRCodeSection from "@/components/modern/QRCodeSection";
import ContactSection from "@/components/modern/ContactSection";

export default function ModernHome() {
  return (
    <main className="relative">
      <HeroSection />
      <FeatureSections />
      <AppShowcase />
      <QRCodeSection />
      <ContactSection />
    </main>
  );
} 