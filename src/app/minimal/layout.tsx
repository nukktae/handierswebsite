import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/minimal/Footer";

export const metadata: Metadata = {
  title: "Handiers - Minimal Design",
  description: "Minimal design version of Handiers platform for home repair services",
};

export default function MinimalLayout({
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