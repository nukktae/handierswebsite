'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function QRCodeSection() {
  return (
    <section id="download" className="py-12 bg-gray-50 relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-black/80 font-medium mb-3 block">DOWNLOAD OUR APPS</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-3">
            Get started with Handiers
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Download the app that's right for you - whether you're a homeowner or a handyman
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Connection line between cards */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-black/0 via-black/10 to-black/0 -z-10" />

          {/* Consumer App Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="bg-white p-6 rounded-[24px] shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-black group-hover:text-black/80 transition-colors">
                    For Homeowners
                  </h3>
                </div>
                
                <div className="relative w-[150px] h-[150px] mx-auto mb-4">
                  <Image
                    src="/images/qr-ios.png"
                    alt="Consumer App QR Code"
                    fill
                    className="object-contain transform hover:scale-105 transition-all duration-500 ease-out"
                  />
                </div>

                <p className="text-base text-gray-600 group-hover:text-gray-800 transition-colors">
                  Find and book trusted handymen
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pro App Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className="bg-white p-6 rounded-[24px] shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-black group-hover:text-black/80 transition-colors">
                    For Handymen
                  </h3>
                </div>
                
                <div className="relative w-[150px] h-[150px] mx-auto mb-4">
                  <Image
                    src="/images/qr-ios.png"
                    alt="Pro App QR Code"
                    fill
                    className="object-contain transform hover:scale-105 transition-all duration-500 ease-out"
                  />
                </div>

                <p className="text-base text-gray-600 group-hover:text-gray-800 transition-colors">
                  Grow your business with Handiers
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 