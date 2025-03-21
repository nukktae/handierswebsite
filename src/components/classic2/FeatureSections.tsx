'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundPattern from "../BackgroundPattern";

const features = [
  {
    title: "Try the Local Handyman Your Neighbors Trust",
    description: "We leverage real connections in your community so you can book a proven local handyman",
    image: "/images/section1.svg",
    alt: "Local handyman illustration",
    reverse: true,
  },
  {
    title: "Snap a Photo and Get an Instant Quote",
    description: "Simply upload a photo or video, and let us handle the rest",
    image: "/images/section3.svg",
    alt: "Photo upload illustration",
    reverse: false,
  },
  {
    title: "Home Repairs via App—From Search to Payment in One Place",
    description: "No more juggling phone calls — our app streamlines your entire repair process start to finish",
    image: "/images/section42.svg",
    alt: "All-in-one app illustration",
    reverse: true,
  },
];

export default function FeatureSections() {
  const scrollToQRSection = () => {
    const qrSection = document.getElementById('qr-code-section');
    if (qrSection) {
      qrSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-2 bg-white relative">
      <BackgroundPattern />
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
        {features.map((feature, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`py-16 ${index !== 0 ? 'border-t border-gray-50' : ''}`}
          >
            <div className={`grid lg:grid-cols-2 gap-16 lg:gap-32 xl:gap-44 items-center ${feature.reverse ? 'lg:grid-flow-dense' : ''}`}>
              <div className={`space-y-6 ${feature.reverse ? 'lg:col-start-2' : ''}`}>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#17453B] leading-[1.3] tracking-tight mb-6">
                    {feature.title}
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-600 leading-[1.8] max-w-[90%]">
                    {feature.description}
                  </p>
                </div>
                
                <motion.button
                  onClick={scrollToQRSection}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#17453B] text-white rounded-lg hover:bg-[#0F2A24] transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Our App
                </motion.button>
              </div>
              <div className={`relative ${feature.reverse ? 'lg:col-start-1' : ''}`}>
                <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E6F0EB] via-[#E6F0EB]/50 to-transparent rounded-[3rem] blur-2xl transform rotate-6" />
                  
                  {/* Main image */}
                  <div className="card relative bg-white rounded-[2rem] p-8 shadow-xl flex items-center justify-center h-full">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={500}
                      height={500}
                      className="w-full h-auto max-h-[400px] object-contain transform hover:scale-105 transition-transform duration-500"
                      unoptimized
                      priority
                    />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -right-4 top-1/4 w-24 h-24 bg-[#E6F0EB] rounded-full opacity-60" />
                  <div className="absolute -left-8 bottom-1/3 w-32 h-32 bg-[#E6F0EB] rounded-full opacity-40" />
                </div>
              </div>
            </div>
          </motion.section>
        ))}
        
        {/* Main CTA Section */}
        <motion.div
          className="py-16 my-8 bg-[#17453B] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience the Handiers Difference</h3>
              <p className="text-white/80 text-lg">
                Download our app now and join thousands of homeowners who've simplified their home repair process.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                onClick={scrollToQRSection}
                className="px-6 py-3 bg-white text-[#17453B] rounded-xl font-semibold hover:bg-white/90 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                iOS App
              </motion.button>
              <motion.button 
                onClick={scrollToQRSection}
                className="px-6 py-3 bg-white text-[#17453B] rounded-xl font-semibold hover:bg-white/90 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
                </svg>
                Android App
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 