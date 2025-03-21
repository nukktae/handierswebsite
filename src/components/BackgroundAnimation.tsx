'use client';

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function BackgroundAnimation() {
  const { currentTheme } = useTheme();

  // Modern theme has a more subtle, professional pattern
  if (currentTheme === 'modern') {
    return (
      <div className="fixed inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb05_1px,transparent_1px),linear-gradient(to_bottom,#2563eb05_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.03, 0.05, 0.03],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-[#2563eb] blur-[128px]"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.04, 0.06, 0.04],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute left-0 bottom-0 -z-10 h-[600px] w-[600px] rounded-full bg-[#3b82f6] blur-[128px]"
        />
      </div>
    );
  }

  // Default background for other themes
  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[var(--primary)] opacity-10 blur-[100px]" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 0.15, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute right-1/4 top-1/4 -z-10 h-[320px] w-[320px] rounded-full bg-[var(--primary)] opacity-10 blur-[100px]"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute left-1/3 bottom-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-[var(--primary)] opacity-10 blur-[100px]"
      />
    </div>
  );
} 