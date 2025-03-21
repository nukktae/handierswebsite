'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] relative overflow-hidden bg-[#17453B]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] -z-10" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16">
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
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
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

          {/* Right image section - Enhanced mockup display */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            {/* Main mockup image with enhanced presentation */}
            <div className="relative">
              {/* Glow effect behind mockup */}
              <div className="absolute -inset-4 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-[2rem] blur-xl"></div>
              
              {/* Main mockup image */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Image
                  src="/images/mockup.png"
                  alt="Handiers app mockup"
                  width={320}
                  height={650}
                  className="relative z-10 drop-shadow-2xl"
                  priority
                />
                
                {/* Phone frame overlay */}
                <div className="absolute inset-0 border-[8px] border-white/10 rounded-[32px] z-20"></div>
                
                {/* Reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-[32px] z-20"></div>
              </motion.div>
              
              {/* Decorative elements around the mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -top-6 -right-10 bg-white px-4 py-2 rounded-full shadow-xl z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <span className="text-[#17453B] text-sm font-medium whitespace-nowrap">5 handymen nearby</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute top-1/4 -left-12 bg-white p-3 rounded-xl shadow-xl z-20"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#17453B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[#17453B] text-sm font-medium">Los Angeles</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="absolute bottom-1/4 -right-10 bg-white p-3 rounded-xl shadow-xl z-20"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#17453B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[#17453B] text-sm font-medium">Fast response</span>
                </div>
              </motion.div>
              
              {/* New UI element - Bottom notification */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-full shadow-xl z-20"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#17453B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-[#17453B] text-sm font-medium whitespace-nowrap">Tap to find handymen</span>
                </div>
              </motion.div>
              
              {/* Animated circles */}
              <div className="absolute -inset-16 -z-10">
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                <div className="absolute top-2/3 left-1/3 w-12 h-12 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
              </div>
              
              {/* Decorative dots pattern */}
              <div className="absolute -right-16 top-1/4 grid grid-cols-3 gap-2 opacity-20">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                ))}
              </div>
              <div className="absolute -left-16 bottom-1/4 grid grid-cols-3 gap-2 opacity-20">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 