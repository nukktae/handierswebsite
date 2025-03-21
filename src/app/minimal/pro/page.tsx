import HeroSection from "@/components/minimal/HeroSection";
import FeatureSection from "@/components/minimal/FeatureSection";
import AppShowcase from "@/components/minimal/AppShowcase";
import QRCodeSection from "@/components/minimal/QRCodeSection";
import ContactSectionPro from "@/components/minimal/ContactSectionPro";

export default function MinimalProHome() {
  return (
    <main className="relative">
      <HeroSection />
      <FeatureSection />
      <AppShowcase />
      <ContactSectionPro />
      <QRCodeSection />
    </main>
  );
} 