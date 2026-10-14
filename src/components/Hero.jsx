"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { Rocket, Sparkles, Bot, Blocks } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden isolate">
      
      {/* Main Futuristic Robotics Workshop Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/hero-bg.png"
          alt="Futuristic Robotics Workshop & STEM Laboratory - Akshaya Robotics Hyderabad"
          className="w-full h-full object-cover object-center brightness-90 contrast-105"
        />
        {/* Soft Vignette Overlay to ensure workshop visibility and text readability */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Brand Accent Ambient Glows */}
      <motion.div style={{ y: y1 }} className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-accent/25 rounded-[100px] rotate-12 blur-[100px] origin-center z-0 pointer-events-none animate-pulse" />
      <motion.div style={{ y: y2 }} className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-highlight/15 rounded-full blur-[120px] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col items-center justify-center text-center z-10 w-full relative">
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className="absolute top-0 right-10 md:right-32 text-highlight rotate-12 drop-shadow-[0_10px_10px_rgba(255,237,0,0.5)]"
        >
          <Sparkles size={80} strokeWidth={2} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="absolute bottom-20 left-10 md:left-20 text-accent -rotate-12 drop-shadow-[0_10px_10px_rgba(227,0,11,0.5)]"
        >
          <Blocks size={100} strokeWidth={1.5} />
        </motion.div>

        <motion.div
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          className="mb-4 z-20"
        >
          <img 
            src="/logo.png" 
            alt="Akshaya Robotics Minifigure Badge Mascot - Kids Robotics Learning Academy" 
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_15px_30px_rgba(227,0,11,0.5)] animate-float"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          className="text-5xl sm:text-[4.5rem] md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-tighter text-white drop-shadow-2xl flex flex-col items-center relative z-20"
        >
          <span className="block -rotate-2 -ml-8 overflow-visible z-10">AKSHAYA</span>
          <span className="block rotate-2 ml-8 text-transparent bg-clip-text bg-gradient-to-br from-highlight via-white to-accent drop-shadow-[0_10px_30px_rgba(227,0,11,0.5)] z-20">ROBOTICS</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 md:mt-12 max-w-2xl bg-black/60 backdrop-blur-2xl p-4 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-white/20 shadow-2xl relative z-30 transform -rotate-1 mx-4 sm:mx-0"
        >
          <p className="text-lg sm:text-xl md:text-3xl font-bold text-white">
            Unleash your imagination. Learn to code, build robots, and construct the future! 
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 md:mt-12 flex gap-6 z-30"
        >
          <Link
            to="courses"
            smooth={true}
            duration={500}
            className="chunky-btn chunky-highlight px-6 py-4 md:px-10 md:py-5 text-xl md:text-3xl rounded-[2rem] flex items-center gap-3 cursor-pointer z-50 transform hover:scale-105"
          >
            PLAY NOW <Rocket size={32} />
          </Link>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none opacity-50 z-0 hidden md:block"
      >
        <Bot size={400} strokeWidth={0.5} className="text-white/10" />
      </motion.div>
    </section>
  );
};

export default Hero;
