'use client';

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left side - Image */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none relative">
            <div className="relative w-full aspect-square">
              <Image
                src="/images/heroimage7.png"
                alt="Handiers app interface"
                fill
                className="object-contain"
                priority
              />
              
              {/* Floating labels */}
              <div className="absolute top-1/4 right-0 bg-black text-white px-4 py-2 rounded-full z-20 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                </div>
                Find nearby handymen
              </div>
              
              <div className="absolute bottom-1/3 left-0 bg-black text-white px-4 py-2 rounded-full z-20 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                Trusted by locals
              </div>
              
              <div className="absolute bottom-1/4 right-0 bg-black text-white px-4 py-2 rounded-full z-20 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z" />
                  </svg>
                </div>
                AI photo diagnosis
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">
                Handiers -<br />
                Uber for home repairs
              </h1>
              <p className="text-[#4B5563] text-lg lg:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
                A service you've always needed. Handiers is the revolutionary platform connecting homeowners with trusted local repair professionals in minutes. Get instant quotes, book services, and pay securely all in one place
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                className="px-8 py-4 bg-black hover:bg-black/90 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download on the App Store
              </button>
              <button 
                className="px-8 py-4 border-black text-black hover:bg-black/5 border-2 rounded-xl font-medium transition-colors"
              >
                Get it on Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 