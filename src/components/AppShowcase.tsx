'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import React, { JSX } from 'react';
import BackgroundPattern from "./BackgroundPattern";

interface AppScreen {
  id: number;
  title: string;
  image: string;
  description: string;
}

const appScreens: AppScreen[] = [
  {
    id: 1,
    title: "AI will estimate cost",
    image: "/images/2.png",
    description: "Our AI quickly analyzes your issue, provides an estimated cost, and connects you with the best handyman for the job."
  },
  {
    id: 2,
    title: "See who trusts them",
    image: "/images/3.png",
    description: "Check a handyman's profile, specialties, and even see if your friends have hired them—so you can book with confidence."
  },
  {
    id: 3,
    title: "Chat with your handyman",
    image: "/images/chat.png",
    description: "Communicate directly with your service provider to discuss details, share photos, and get status updates in real-time."
  },
  {
    id: 4,
    title: "Receive and pay invoices",
    image: "/images/invoice.png",
    description: "Review your itemized invoice and complete payment securely through the app when the job is done."
  }
];

function AppShowcase(): JSX.Element {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <BackgroundPattern />
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#17453B]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#17453B]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-[#17453B]/80 font-medium mb-4 block">SIMPLE STEPS</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#17453B] mb-4">
            How it works?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get your repairs done in four easy steps - find, estimate, communicate, and pay
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connection lines between phones */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#17453B]/0 via-[#17453B]/10 to-[#17453B]/0 -z-10" />
          
          {appScreens.map((screen) => (
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: screen.id * 0.2 }}
              className="relative group"
            >
              <div className="relative flex flex-col items-center">
                {/* Step number */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#17453B] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  {screen.id}
                </div>
                
                <div className="text-center mb-6 mt-8">
                  <h3 className="text-xl font-bold text-[#17453B] group-hover:text-[#17453B]/80 transition-colors">
                    {screen.title}
                  </h3>
                </div>

                <div className="relative w-full max-w-[280px] mx-auto">
                  {/* Phone frame effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/0 rounded-[32px]" />
                  <div className="absolute inset-0 shadow-2xl shadow-black/10 rounded-[32px]" />
                  
                  <Image
                    src={screen.image}
                    alt={screen.title}
                    width={280}
                    height={580}
                    className="w-full rounded-[32px] shadow-lg transform hover:scale-105 transition-all duration-500 ease-out"
                    priority
                  />
                </div>

                <div className="mt-8 text-center max-w-sm">
                  <p className="text-base text-gray-600 group-hover:text-gray-800 transition-colors">
                    {screen.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AppShowcase; 