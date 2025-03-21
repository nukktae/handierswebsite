'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const appScreens = [
  {
    id: 1,
    title: "AI will estimate cost",
    image: "/images/2.png",
    description: "Our AI quickly analyzes your issue, provides an estimated cost, and connects you with the best handyman for the job.",
    features: ["Upload issue photos", "Get instant estimates", "Compare pricing options"]
  },
  {
    id: 2,
    title: "See who trusts them",
    image: "/images/3.png",
    description: "Check a handyman's profile, specialties, and even see if your friends have hired them—so you can book with confidence.",
    features: ["Detailed pro profiles", "Skill verification", "Secure payment system"]
  },
  {
    id: 3,
    title: "Chat with your handyman",
    image: "/images/chat.png",
    description: "Communicate directly with your service provider to discuss details, share photos, and get status updates in real-time.",
    features: ["Real-time messaging", "Photo sharing", "Job status updates"]
  },
  {
    id: 4,
    title: "Receive and pay invoices",
    image: "/images/invoice.png",
    description: "Review your itemized invoice and complete payment securely through the app when the job is done.",
    features: ["Itemized invoices", "Secure payments", "Digital receipts"]
  }
];

export default function AppShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#17453B05_1px,transparent_1px),linear-gradient(to_bottom,#17453B05_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="max-w-[1400px] mx-auto px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#17453B] font-medium mb-4 block">HOW IT WORKS</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple steps to get started
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your repairs done in four easy steps - find, estimate, communicate, and pay
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-[#E6F0EB] via-[#17453B]/20 to-[#E6F0EB]" />
          
          {appScreens.map((screen, index) => (
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Step number */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#17453B] text-white flex items-center justify-center font-bold text-lg shadow-lg z-10">
                {screen.id}
              </div>

              <div className="card bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {screen.title}
                  </h3>
                </div>

                {/* Phone frame */}
                <div className="relative mx-auto w-full mb-6 flex-grow">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#E6F0EB]/50 to-transparent rounded-[24px]" />
                  <Image
                    src={screen.image}
                    alt={screen.title}
                    width={280}
                    height={560}
                    className="w-full rounded-[24px] shadow-lg transform hover:scale-105 transition-all duration-500 mx-auto"
                  />
                </div>

                <div className="text-center mb-4">
                  <p className="text-gray-600">
                    {screen.description}
                  </p>
                </div>

                {/* Feature list */}
                <ul className="space-y-2 mt-auto">
                  {screen.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-700 text-sm">
                      <div className="w-4 h-4 rounded-full bg-[#E6F0EB] flex-shrink-0 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-[#17453B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 