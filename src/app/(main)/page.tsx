import HeroSection from "@/components/HeroSection";
import FeatureSections from "@/components/FeatureSections";
import AppShowcase from "@/components/AppShowcase";
import QRCodeSection from "@/components/QRCodeSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <FeatureSections />
      <AppShowcase />
      <QRCodeSection />
    </main>
  );
} 