"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, Rocket, Bot, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    { title: "Hands-on Muck", icon: <Target size={56} className="text-white" />, color: "bg-accent", border: "border-black", rotate: "rotate-6" },
    { title: "Crazy Ideas", icon: <Brain size={56} className="text-primary" />, color: "bg-highlight", border: "border-black", rotate: "-rotate-6" },
    { title: "Super Skills", icon: <Rocket size={56} className="text-accent" />, color: "bg-white", border: "border-black", rotate: "rotate-12" },
    { title: "Real Metal", icon: <Bot size={56} className="text-highlight" />, color: "bg-black", border: "border-highlight", rotate: "-rotate-12" },
  ];

  return (
    <section id="features" className="py-32 bg-black relative z-20 overflow-hidden isolate">
      
      {/* Base Layer: Golden Robotics Waveform Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/features-bg.png"
          alt="Golden Robotics Waveform Graphic - Akshaya Robotics Academy"
          className="w-full h-full object-cover object-center brightness-90 contrast-105"
        />
        {/* Soft Vignette Overlay ensuring waveform visibility and high text contrast */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Frame Layer: Futuristic Robotics Tech Frame Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/tech-frame-overlay.png"
          alt="Futuristic Robotics Tech Frame Overlay - Akshaya Robotics"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="section-container text-center flex flex-col items-center relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-[6rem] font-black inline-flex flex-col items-center leading-none mb-16 md:mb-20 relative z-30"
        >
          <span className="text-primary px-8 py-3 bg-highlight border-8 border-black rounded-[3rem] transform -rotate-3 mb-4 shadow-[0_10px_0_#E3000B]">WHY US?</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-x-12 lg:gap-x-20 max-w-5xl">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', bounce: 0.7 }}
              whileHover={{ scale: 1.15, zIndex: 50, rotate: 0 }}
              className={`group flex flex-col items-center cursor-pointer ${feat.rotate} transition-transform`}
            >
              <div className={`w-32 h-32 md:w-48 md:h-48 ${feat.color} rounded-[2rem] md:rounded-[3rem] flex items-center justify-center shadow-[0_15px_0_#080E4B] active:translate-y-[10px] active:shadow-none transition-all border-4 md:border-8 ${feat.border} relative z-10`}>
                <span className="group-hover:animate-bounce block">{feat.icon}</span>
              </div>
              <h3 className="text-xl md:text-3xl font-black mt-4 md:mt-6 text-white bg-black px-4 md:px-6 py-2 rounded-full border-2 border-white/30 group-hover:text-highlight group-hover:border-highlight transition-colors max-w-[150px] md:max-w-[200px] leading-tight z-20">
                {feat.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
