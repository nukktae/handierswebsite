'use client';

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#17453B] text-white">
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div>
            <Image
              src="/images/handierslogo.png"
              alt="Handiers Logo"
              width={220}
              height={73}
              className="mb-2"
            />
          </div>

          {/* Links on the right */}
          <div className="flex flex-col items-end space-y-2 text-2xl">
            <Link href="/about" className="hover:opacity-80 transition-opacity">
              About us
            </Link>
            <Link href="/privacy" className="hover:opacity-80 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:opacity-80 transition-opacity">
              Terms
            </Link>
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-white/20 my-4" />

        {/* Copyright text */}
        <div className="text-center text-white/80 text-base">
          All rights are Reserved by Handiers Inc.
        </div>
      </div>
    </footer>
  );
} 