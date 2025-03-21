'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundPattern from "./BackgroundPattern";

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
    image: "/images/hero.svg",
    alt: "All-in-one app illustration",
    reverse: true,
  },
];

export default function FeatureSections() {
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
            className={`py-2 ${index !== 0 ? 'border-t border-gray-50' : ''}`}
          >
            <div className={`grid lg:grid-cols-2 gap-16 lg:gap-32 xl:gap-44 items-center ${feature.reverse ? 'lg:grid-flow-dense' : ''}`}>
              <div className={`space-y-3 ${feature.reverse ? 'lg:col-start-2' : ''}`}>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#17453B] leading-[1.3] tracking-tight mb-6">
                    {feature.title}
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-600 leading-[1.8] max-w-[90%]">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className={`relative ${feature.reverse ? 'lg:col-start-1' : ''}`}>
                <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-contain p-8"
                    unoptimized
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
} 