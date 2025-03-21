'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] relative overflow-hidden bg-[#17453B]">
      <div className="relative z-10 max-w-[1400px] mx-auto px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center pt-32 pb-20">
          {/* Left content section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl relative"
          >
            {/* Decorative elements */}
            <div className="absolute -left-8 -top-8 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10" />
            <div className="absolute right-0 bottom-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -z-10" />
            
            <motion.div 
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl font-bold text-white mb-8">
                Handiers -
              </h1>
              <div className="space-y-3">
                <h2 className="text-[32px] text-white/90 font-medium leading-tight">
                  A service you've always needed
                </h2>
                <h2 className="text-[32px] text-white font-medium leading-tight">
                  Uber for home repairs
                </h2>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-5 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="group relative px-8 py-4 bg-white text-[#17453B] text-lg rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-0.5">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#17453B]/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                Get Started Today
              </button>
              <button className="group px-8 py-4 rounded-xl text-lg font-semibold border-2 border-white text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 flex items-center gap-2 hover:gap-4">
                How it works
                <svg 
                  className="w-5 h-5 transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Right image section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:-ml-12"
          >
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent -z-10 rounded-[3rem] blur-3xl transform -rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-tl from-white/5 via-white/5 to-transparent -z-10 rounded-[3rem] blur-2xl transform rotate-6" />
              <Image
                src="/images/section42.svg"
                alt="Handiers service illustration"
                fill
                priority
                className="object-contain p-8 hover:scale-105 transition-all duration-700 ease-out hover:rotate-2"
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 