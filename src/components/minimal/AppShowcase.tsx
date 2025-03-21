'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const appContent = {
  customer: {
    title: "How it works",
    description: "Get your repairs done in three easy steps – find, estimate, and pay with confidence!",
    screens: [
      {
        id: 1,
        title: "AI will estimate cost",
        image: "/images/1.png",
        description: "Upload a photo, and our AI will quickly analyze the issue, estimate the cost, and connect you with the best handyman for the job"
      },
      {
        id: 2,
        title: "See who trusts them",
        image: "/images/2.png",
        description: "Check a handyman's profile, specialties, and even see if your friends have hired them—so you can book with confidence"
      },
      {
        id: 3,
        title: "Receive and pay invoices",
        image: "/images/3.png",
        description: "Receive invoices and make secure payments seamlessly right from your phone"
      }
    ]
  },
  pro: {
    title: "How it works",
    description: "Everything you need to connect with customers and grow your business",
    screens: [
      {
        id: 1,
        title: "Find Local Customers",
        image: "/images/pro0.png",
        description: "Browse and accept jobs in your area through our interactive map. See where your potential customers are located and plan your routes efficiently."
      },
      {
        id: 2,
        title: "Chat & Schedule",
        image: "/images/pro1.png",
        description: "Communicate directly with customers, discuss job details, and manage your appointments all in one place. Keep your schedule organized and clients informed."
      },
      {
        id: 3,
        title: "Manage Your Quotes",
        image: "/images/pro2.png",
        description: "Create professional quotes quickly and easily. Track all your estimates and convert them into jobs with just a few taps."
      }
    ]
  }
};

export default function AppShowcase() {
  const [activeView, setActiveView] = useState<'customer' | 'pro'>('customer');
  const content = appContent[activeView];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          {/* Toggle switch */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <button
                onClick={() => setActiveView('customer')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeView === 'customer'
                    ? 'bg-[#17453B] text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                For Customers
              </button>
              <button
                onClick={() => setActiveView('pro')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeView === 'pro'
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                For Professionals
              </button>
            </div>
          </div>

          <span className="text-black/80 font-medium mb-4 block">SIMPLE STEPS</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            {content.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connection lines between phones */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-black/0 via-black/10 to-black/0 -z-10" />
          
          {content.screens.map((screen) => (
            <div
              key={screen.id}
              className="relative group"
            >
              <div className="relative flex flex-col items-center">
                {/* Step number */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  {screen.id}
                </div>
                
                <div className="text-center mb-6 mt-8">
                  <h3 className="text-xl font-bold text-black group-hover:text-black/80 transition-colors">
                    {screen.title}
                  </h3>
                </div>

                <div className="relative w-full max-w-[260px] mx-auto">
                  {/* Phone frame effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent rounded-[32px]" />
                  <div className="absolute inset-0 shadow-2xl shadow-black/10 rounded-[32px]" />
                  
                  <Image
                    src={screen.image}
                    alt={screen.title}
                    width={260}
                    height={520}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 