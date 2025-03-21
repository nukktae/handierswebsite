'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function QRCodeSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#E6F0EB] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#17453B05_1px,transparent_1px),linear-gradient(to_bottom,#17453B05_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="max-w-[1400px] mx-auto px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#17453B] font-medium mb-4 block">MOBILE APPS</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Download our mobile apps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the full experience on your mobile device. Available for both iOS and Android.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* iOS App */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card bg-white p-8 rounded-2xl text-center">
              <div className="mb-8">
                <div className="inline-block p-3 bg-[#E6F0EB] rounded-2xl mb-6">
                  <svg className="w-10 h-10 text-[#17453B]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  iOS App
                </h3>
                <p className="text-gray-600 mb-8">
                  Download our app from the App Store and get started in minutes.
                </p>
              </div>
              
              <div className="relative w-[200px] h-[200px] mx-auto mb-8">
                <Image
                  src="/images/qr-ios.png"
                  alt="iOS App QR Code"
                  fill
                  className="object-contain transform hover:scale-105 transition-all duration-500"
                />
              </div>

              <button className="w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                Download on App Store
              </button>
            </div>
          </motion.div>

          {/* Android App */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card bg-white p-8 rounded-2xl text-center">
              <div className="mb-8">
                <div className="inline-block p-3 bg-[#E6F0EB] rounded-2xl mb-6">
                  <svg className="w-10 h-10 text-[#17453B]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414C17.523 16.0154 16.9716 16.5669 16.2976 16.5669H15.0781C14.4041 16.5669 13.8527 16.0154 13.8527 15.3414V14.1219C13.8527 13.4479 14.4041 12.8965 15.0781 12.8965H16.2976C16.9716 12.8965 17.523 13.4479 17.523 14.1219V15.3414Z"/>
                    <path d="M10.1475 15.3414C10.1475 16.0154 9.59604 16.5669 8.92201 16.5669H7.70252C7.02849 16.5669 6.47705 16.0154 6.47705 15.3414V14.1219C6.47705 13.4479 7.02849 12.8965 7.70252 12.8965H8.92201C9.59604 12.8965 10.1475 13.4479 10.1475 14.1219V15.3414Z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M3 8.93793C3 7.30899 4.31909 5.9899 5.94803 5.9899H18.0522C19.6811 5.9899 21.0002 7.30899 21.0002 8.93793V15.3414C21.0002 16.9703 19.6811 18.2894 18.0522 18.2894H5.94803C4.31909 18.2894 3 16.9703 3 15.3414V8.93793ZM7.70252 11.6711H8.92201C10.2729 11.6711 11.373 12.7711 11.373 14.1219V15.3414C11.373 16.6922 10.2729 17.7923 8.92201 17.7923H7.70252C6.35168 17.7923 5.25161 16.6922 5.25161 15.3414V14.1219C5.25161 12.7711 6.35168 11.6711 7.70252 11.6711ZM16.2976 11.6711H15.0781C13.7272 11.6711 12.6272 12.7711 12.6272 14.1219V15.3414C12.6272 16.6922 13.7272 17.7923 15.0781 17.7923H16.2976C17.6484 17.7923 18.7485 16.6922 18.7485 15.3414V14.1219C18.7485 12.7711 17.6484 11.6711 16.2976 11.6711Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Android App
                </h3>
                <p className="text-gray-600 mb-8">
                  Get our app from Google Play and join our growing community.
                </p>
              </div>
              
              <div className="relative w-[200px] h-[200px] mx-auto mb-8">
                <Image
                  src="/images/qr-android.png"
                  alt="Android App QR Code"
                  fill
                  className="object-contain transform hover:scale-105 transition-all duration-500"
                />
              </div>

              <button className="w-full py-4 bg-[#17453B] text-white rounded-xl font-medium hover:bg-[#17453B]/90 transition-colors flex items-center justify-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414C17.523 16.0154 16.9716 16.5669 16.2976 16.5669H15.0781C14.4041 16.5669 13.8527 16.0154 13.8527 15.3414V14.1219C13.8527 13.4479 14.4041 12.8965 15.0781 12.8965H16.2976C16.9716 12.8965 17.523 13.4479 17.523 14.1219V15.3414Z"/>
                  <path d="M10.1475 15.3414C10.1475 16.0154 9.59604 16.5669 8.92201 16.5669H7.70252C7.02849 16.5669 6.47705 16.0154 6.47705 15.3414V14.1219C6.47705 13.4479 7.02849 12.8965 7.70252 12.8965H8.92201C9.59604 12.8965 10.1475 13.4479 10.1475 14.1219V15.3414Z"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 8.93793C3 7.30899 4.31909 5.9899 5.94803 5.9899H18.0522C19.6811 5.9899 21.0002 7.30899 21.0002 8.93793V15.3414C21.0002 16.9703 19.6811 18.2894 18.0522 18.2894H5.94803C4.31909 18.2894 3 16.9703 3 15.3414V8.93793ZM7.70252 11.6711H8.92201C10.2729 11.6711 11.373 12.7711 11.373 14.1219V15.3414C11.373 16.6922 10.2729 17.7923 8.92201 17.7923H7.70252C6.35168 17.7923 5.25161 16.6922 5.25161 15.3414V14.1219C5.25161 12.7711 6.35168 11.6711 7.70252 11.6711ZM16.2976 11.6711H15.0781C13.7272 11.6711 12.6272 12.7711 12.6272 14.1219V15.3414C12.6272 16.6922 13.7272 17.7923 15.0781 17.7923H16.2976C17.6484 17.7923 18.7485 16.6922 18.7485 15.3414V14.1219C18.7485 12.7711 17.6484 11.6711 16.2976 11.6711Z"/>
                </svg>
                Get it on Google Play
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 