import type { Metadata } from "next";
import { Outfit } from 'next/font/google';
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { ThemeProvider } from "@/context/ThemeContext";

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "Handiers - Home Repair Services",
  description: "Your trusted platform for home repair services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className={outfit.className}>
        <ThemeProvider>
          <BackgroundAnimation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
