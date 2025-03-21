'use client';

import Image from "next/image";

export default function HeroSection() {
  const scrollToDownload = () => {
    const element = document.getElementById('download');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-16 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Image */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none relative pt-8">
            <div className="relative w-full aspect-[4/5]">
              <Image
                src="/images/heroimagefinal.png"
                alt="Handiers app interface"
                fill
                className="object-contain scale-110"
                priority
              />
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
                onClick={scrollToDownload}
                className="px-8 py-4 bg-black hover:bg-black/90 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                For Homeowners
              </button>
              <button 
                onClick={scrollToDownload}
                className="px-8 py-4 border-black text-black hover:bg-black/5 border-2 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                For Professionals
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 