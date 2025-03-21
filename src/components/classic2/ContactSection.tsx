'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundPattern from "../BackgroundPattern";

export default function ContactSection() {
  return (
    <section id="contact-section" className="py-24 bg-white relative overflow-hidden">
      <BackgroundPattern />
      
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#17453B]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#17453B]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#17453B]/80 font-medium mb-4 block">SUPPORT</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#17453B] mb-4">
            Have questions? We're here to help
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our team is ready to assist you with any questions or support you might need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[32px] shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-[#17453B] mb-6">Frequently Asked Questions</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-[#17453B] mb-2">How do I book a handyman?</h4>
                <p className="text-gray-600">
                  Simply download our app, describe your issue or upload a photo, and our AI will match you with available professionals in your area.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-[#17453B] mb-2">Are your handymen verified?</h4>
                <p className="text-gray-600">
                  Yes, all professionals on our platform undergo background checks and skill verification before being accepted.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-[#17453B] mb-2">How accurate are the AI cost estimates?</h4>
                <p className="text-gray-600">
                  Our AI provides estimates based on similar jobs in your area with approximately 85-90% accuracy for common repairs.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-[#17453B] mb-2">Can I ask more questions?</h4>
                <p className="text-gray-600">
                  Absolutely! If you don't see your question answered here, please reach out to our support team using the contact form.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[32px] shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-[#17453B] mb-6">Contact Support</h3>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Have a specific question or need assistance? Our support team is ready to help you with any inquiries.
              </p>
              
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#17453B]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#17453B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Contact us at</p>
                    <Link 
                      href="mailto:support@handiers.com" 
                      className="text-[#17453B] font-medium hover:underline"
                    >
                      support@handiers.com
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 mt-6 border-t border-gray-100">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[#17453B] text-white rounded-xl font-medium hover:bg-[#17453B]/90 transition-colors flex items-center justify-center gap-2"
                  onClick={() => window.location.href = 'mailto:support@handiers.com'}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Support
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 