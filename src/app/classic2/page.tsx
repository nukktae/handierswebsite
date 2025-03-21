import HeroSection from "@/components/classic2/HeroSection";
import BenefitsSection from "@/components/classic2/BenefitsSection";
import FeatureSections from "@/components/classic2/FeatureSections";
import AppShowcase from "@/components/classic2/AppShowcase";
import QRCodeSection from "@/components/classic2/QRCodeSection";
import ContactSection from "@/components/classic2/ContactSection";

export default function Classic2Page() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <FeatureSections />
      <AppShowcase />
      <QRCodeSection />
      <ContactSection />
    </main>
  );
} 