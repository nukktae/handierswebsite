'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Try the Local Handyman Your Neighbors Trust",
    description: "We leverage real connections in your community so you can book a proven local handyman",
    image: "/images/section1.svg",
    alt: "Local handyman illustration",
    points: [
      "Verified local professionals",
      "Community-based recommendations",
      "Background-checked handymen"
    ]
  },
  {
    title: "Uncertain Repair Costs? Get Transparent AI Estimates with Handiers",
    description: "Handiers automatically predicts repair expenses so you can decide with confidence",
    image: "/images/section2.svg",
    alt: "Cost estimation illustration",
    points: [
      "AI-powered cost estimation",
      "No surprise fees or charges",
      "Detailed breakdown of expenses"
    ]
  },
  {
    title: "Snap a Photo and Get an Instant Quote",
    description: "Simply upload a photo or video, and let us handle the rest",
    image: "/images/section3.svg",
    alt: "Photo upload illustration",
    points: [
      "Simple photo/video upload",
      "Instant analysis and quotes",
      "Multiple quotes to compare"
    ]
  },
  {
    title: "Home Repairs via App—From Search to Payment in One Place",
    description: "No more juggling phone calls — our app streamlines your entire repair process start to finish",
    image: "/images/section42.svg",
    alt: "All-in-one app illustration",
    points: [
      "End-to-end service management",
      "Integrated secure payment system",
      "Complete repair history tracking"
    ]
  }
];

export default function FeatureSections() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#E6F0EB]">
      <div className="max-w-[1400px] mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#17453B] font-medium mb-4 block">FEATURES</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need for home repairs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A complete platform that makes home repairs as easy as ordering a ride
          </p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-4">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-3 text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-[#E6F0EB] flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#17453B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E6F0EB] via-[#E6F0EB]/50 to-transparent rounded-[3rem] blur-2xl transform rotate-6" />
                  
                  {/* Main image */}
                  <div className="card relative bg-white rounded-[2rem] p-8 shadow-xl">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={500}
                      height={500}
                      className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -right-4 top-1/4 w-24 h-24 bg-[#E6F0EB] rounded-full opacity-60" />
                  <div className="absolute -left-8 bottom-1/3 w-32 h-32 bg-[#E6F0EB] rounded-full opacity-40" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 