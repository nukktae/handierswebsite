'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-white pt-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#17453B05_1px,transparent_1px),linear-gradient(to_bottom,#17453B05_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
          {/* Left content section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <motion.div 
              className="mb-8 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-[#E6F0EB] text-[#17453B] px-4 py-2 rounded-full text-sm font-medium">
                Uber for home repairs 🔧
              </span>
            </motion.div>

            <motion.h1 
              className="text-6xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Handiers -
              <br />
              <span className="text-[#17453B]">A service you've always needed</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Connect with trusted local handymen, get instant AI-powered cost estimates, and book repairs—all in one place.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button className="bg-[#17453B] hover:bg-[#17453B]/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                Get Started Today
              </button>
              <button className="px-8 py-4 rounded-xl text-lg font-semibold border-2 border-gray-200 text-gray-700 hover:border-[#17453B] hover:text-[#17453B] transition-colors flex items-center justify-center gap-2">
                How it works
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

            <motion.div 
              className="mt-12 flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2 text-[#17453B]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-medium">Verified Professionals</span>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="flex items-center gap-2 text-[#17453B]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Fast Response</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right image section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E6F0EB] via-[#E6F0EB]/50 to-transparent rounded-[3rem] blur-3xl transform -rotate-6" />
              <Image
                src="/images/hero.svg"
                alt="Handiers service illustration"
                fill
                priority
                className="object-contain p-8 hover:scale-105 transition-all duration-700 ease-out hover:rotate-2"
                unoptimized
              />
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -right-8 top-1/4 bg-white rounded-xl shadow-lg p-4 card"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#17453B] rounded-full flex items-center justify-center text-white">✓</div>
                <div>
                  <div className="font-medium">Task Complete</div>
                  <div className="text-sm text-gray-500">Leaky faucet fixed</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-8 bottom-1/4 bg-white rounded-xl shadow-lg p-4 card"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#17453B] rounded-full flex items-center justify-center text-white">$</div>
                <div>
                  <div className="font-medium">Instant Quote</div>
                  <div className="text-sm text-gray-500">AI-powered estimate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 