'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact-section" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#17453B05_1px,transparent_1px),linear-gradient(to_bottom,#17453B05_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="max-w-[1400px] mx-auto px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#17453B] font-medium mb-4 block">SUPPORT</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Questions? We've got answers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the support you need or ask us anything about our services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
              
              <div className="space-y-8">
                <div className="bg-[#E6F0EB] p-6 rounded-2xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">How do I book a handyman?</h4>
                  <p className="text-gray-700">
                    Simply download our app, describe your issue or upload a photo, and our AI will match you with available professionals in your area.
                  </p>
                </div>
                
                <div className="bg-[#E6F0EB] p-6 rounded-2xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Are your handymen verified?</h4>
                  <p className="text-gray-700">
                    Yes, all professionals on our platform undergo background checks and skill verification before being accepted.
                  </p>
                </div>
                
                <div className="bg-[#E6F0EB] p-6 rounded-2xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">How accurate are the AI cost estimates?</h4>
                  <p className="text-gray-700">
                    Our AI provides estimates based on similar jobs in your area with approximately 85-90% accuracy for common repairs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-[#17453B] p-10 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <p className="text-white/80 mb-8">
                Have a specific question or need assistance? Our support team is ready to help you with any inquiries.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Contact us at</p>
                    <Link 
                      href="mailto:support@handiers.com" 
                      className="text-white font-medium hover:underline"
                    >
                      support@handiers.com
                    </Link>
                  </div>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-white text-[#17453B] rounded-xl font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                onClick={() => window.location.href = 'mailto:support@handiers.com'}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Support
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 