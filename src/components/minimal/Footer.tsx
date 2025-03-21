'use client';

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left side - Logo and description */}
          <div className="max-w-md mb-8 md:mb-0">
            <Image
              src="/images/handierslogoblack2.svg"
              alt="Handiers Logo"
              width={150}
              height={50}
              className="mb-6"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Handiers connects homeowners with trusted local repair professionals. Get instant quotes, book services, and pay securely all in one place.
            </p>
          </div>

          {/* Right side - Links */}
          <div className="flex flex-col space-y-4 text-right">
            <Link href="/about" className="text-white hover:text-white/80 transition-colors">About Us</Link>
            <Link href="/privacy" className="text-white hover:text-white/80 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-white hover:text-white/80 transition-colors">Contact</Link>
            <Link href="/terms" className="text-white hover:text-white/80 transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 my-8" />

        {/* Bottom section */}
        <div className="flex justify-between items-center">
          <div className="text-white/70 text-sm">
            © {new Date().getFullYear()} Handiers Inc. All rights reserved.
          </div>
          
          {/* Empty div to maintain the layout structure */}
          <div></div>
        </div>
      </div>
    </footer>
  );
} 