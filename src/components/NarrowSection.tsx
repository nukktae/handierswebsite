'use client';

import { motion } from "framer-motion";

export default function NarrowSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-3xl mx-auto text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-bold text-black leading-tight mb-8">
            Home repairs made as
            <br />
            easy as Uber—Handiers.
          </h2>
          <button className="mt-8 bg-[#17453B] text-white px-8 py-4 rounded-lg hover:opacity-90 transition-colors">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
} 