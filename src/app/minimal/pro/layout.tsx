import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/minimal/Footer";

export const metadata: Metadata = {
  title: "Handiers Pro - For Professionals",
  description: "Join Handiers as a professional and grow your home repair business",
};

export default function MinimalProLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
} 