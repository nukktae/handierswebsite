'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Find Local Professionals",
    description: "Connect with verified handymen in your area through our intuitive map interface",
    image: "/images/section1.svg",
    alt: "Find local professionals illustration"
  },
  {
    title: "AI Cost Estimation",
    description: "Get accurate repair cost estimates powered by our advanced AI technology",
    image: "/images/section2.svg",
    alt: "AI estimation illustration"
  },
  {
    title: "Photo-Based Quotes",
    description: "Simply upload a photo of the issue and receive an instant quote from local handymen",
    image: "/images/section3.svg",
    alt: "Photo quotes illustration"
  },
  {
    title: "All-in-One Solution",
    description: "From search to payment, manage your entire repair process in one place",
    image: "/images/section5.svg",
    alt: "All in one solution illustration"
  }
];

export default function FeatureSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-black mb-6">
            Simple, powerful features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage home repairs efficiently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-3xl bg-gray-50">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 