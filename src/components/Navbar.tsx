'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're on the minimal path
  const isMinimal = pathname === '/minimal';

  // Apply minimal styling only on the minimal path
  const navbarStyle = isMinimal
    ? {
        bg: scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100' : 'bg-white/80 backdrop-blur-sm',
        textColor: 'text-black',
        hoverBg: 'hover:bg-black/5',
        buttonBg: 'bg-black',
        buttonText: 'text-white',
        buttonHover: 'hover:bg-black/90',
        logo: '/images/handierslogoblack2.svg',
        logoClass: '',
      }
    : {
        bg: scrolled ? 'bg-white shadow-lg border-b border-gray-100' : 'bg-white',
        textColor: 'text-[var(--primary)]',
        hoverBg: 'hover:bg-[var(--primary)]/5',
        buttonBg: 'bg-[var(--primary)]',
        buttonText: 'text-white',
        buttonHover: 'hover:bg-[var(--primary)]/90',
        logo: '/images/handierslogoblack.svg',
        logoClass: '',
      };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${navbarStyle.bg}`}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center h-20 px-6 md:px-8 lg:px-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative flex items-center gap-2 hover:opacity-90 transition-opacity"
            aria-label="Go to homepage"
          >
            <Image
              src={navbarStyle.logo}
              alt="Handiers Logo"
              width={130}
              height={43}
              priority
              className={`object-contain ${navbarStyle.logoClass}`}
            />
          </Link>

          {/* Navigation Links - About and Contact only */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/about" 
              className={`relative text-sm font-medium transition-all ${navbarStyle.textColor} hover:opacity-80`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${navbarStyle.buttonBg} ${navbarStyle.buttonText} ${navbarStyle.buttonHover}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 