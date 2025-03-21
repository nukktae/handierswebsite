'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function QRCodeSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#17453B]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#17453B]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-[#17453B]/80 font-medium mb-4 block">MOBILE APPS</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#17453B] mb-4">
            It's easier in the apps
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Download our mobile apps for a seamless experience on both iOS and Android devices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Connection line between cards */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#17453B]/0 via-[#17453B]/10 to-[#17453B]/0 -z-10" />

          {/* iOS App Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="bg-white p-8 rounded-[32px] shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#17453B] group-hover:text-[#17453B]/80 transition-colors">
                    iOS App
                  </h3>
                </div>
                
                <div className="relative w-[200px] h-[200px] mx-auto mb-6">
                  <Image
                    src="/images/qr-ios.png"
                    alt="Customer App QR Code"
                    fill
                    className="object-contain transform hover:scale-105 transition-all duration-500 ease-out"
                  />
                </div>

                <p className="text-lg text-gray-600 group-hover:text-gray-800 transition-colors">
                  Scan with your iPhone camera to download the app
                </p>
              </div>
            </div>
          </motion.div>

          {/* Android App Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className="bg-white p-8 rounded-[32px] shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#17453B] group-hover:text-[#17453B]/80 transition-colors">
                    Android App
                  </h3>
                </div>
                
                <div className="relative w-[200px] h-[200px] mx-auto mb-6">
                  <Image
                    src="/images/qr-android.png"
                    alt="Handyman App QR Code"
                    fill
                    className="object-contain transform hover:scale-105 transition-all duration-500 ease-out"
                  />
                </div>

                <p className="text-lg text-gray-600 group-hover:text-gray-800 transition-colors">
                  Scan with your Android camera to download the app
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 