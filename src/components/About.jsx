"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Code2, Cpu } from 'lucide-react';

const About = () => {

  const cards = [
    { 
      title: 'Build Robots', 
      desc: 'Snap together awesome robotic buddies!', 
      icon: <Wrench size={34} className="text-highlight" />, 
      color: 'bg-highlight', 
      textColor: 'text-primary', 
      descColor: 'text-black',
      iconBg: 'bg-black text-highlight', 
      border: 'border-black',
      shadow: 'shadow-[6px_6px_0_#E3000B]'
    },
    { 
      title: 'Learn Coding', 
      desc: 'Command your bots to solve challenges!', 
      icon: <Code2 size={34} className="text-accent" />, 
      color: 'bg-accent', 
      textColor: 'text-white', 
      descColor: 'text-white',
      iconBg: 'bg-white text-accent', 
      border: 'border-black',
      shadow: 'shadow-[6px_6px_0_#080E4B]'
    },
    { 
      title: 'Smart Projects', 
      desc: 'Bring your wildest ideas to life!', 
      icon: <Cpu size={34} className="text-primary" />, 
      color: 'bg-primary', 
      textColor: 'text-white', 
      descColor: 'text-highlight',
      iconBg: 'bg-highlight text-primary', 
      border: 'border-highlight',
      shadow: 'shadow-[6px_6px_0_#E3000B]'
    }
  ];

  return (
    <section id="about" className="relative w-full py-32 bg-black text-white overflow-hidden isolate">
      
      {/* LEGO Robotics Education Banner Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/about-bg.png"
          alt="LEGO Robotics & Hands-on STEM Education Workshop - Akshaya Robotics"
          className="w-full h-full object-cover object-center brightness-90 contrast-105"
        />
        {/* Soft Contrast Overlays */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      </div>

      {/* Massive SVG Curve Top */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24 md:h-32 transform rotate-180">
          <path d="M321.39,56.44C358.82,11,388.94,0,388.94,0L1200,120H0V0Z" fill="#080E4B"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-24 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-20 items-center">
        
        {/* Left Side: Clearly Spaced, Unobstructed Feature Cards */}
        <div className="flex flex-col gap-6 w-full">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: i * 0.15 }}
              whileHover={{ scale: 1.02, x: 6 }}
              className={`w-full ${card.color} rounded-[2rem] p-5 sm:p-7 flex items-center gap-5 sm:gap-6 border-4 ${card.border} ${card.shadow} transition-all`}
            >
              <div className={`${card.iconBg} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shrink-0 border-2 border-black shadow-md`}>
                {card.icon}
              </div>
              <div className="flex-1">
                <h3 className={`text-2xl sm:text-3xl font-black ${card.textColor} tracking-tight`}>
                  {card.title}
                </h3>
                <p className={`${card.descColor} font-bold text-base sm:text-lg mt-1 leading-snug`}>
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Gigantic Typography Overlap */}
        <div className="text-left relative">
          {/* Background Decorative Outline */}
          <span className="absolute -top-16 -left-4 md:-left-10 text-[80px] md:text-[120px] font-black text-white/10 select-none z-0 hidden sm:block">DO</span>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10 bg-black/75 backdrop-blur-md p-8 md:p-10 rounded-[3rem] border-4 border-white/20 shadow-2xl"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-white">
              What <br/>Do We Do?
            </h2>
            <p className="text-xl md:text-2xl text-white font-bold border-l-[8px] border-accent pl-6 py-2">
              We replace boring textbooks with <span className="bg-highlight text-primary px-2 py-0.5 rounded-lg border-2 border-black font-black">gears, wires, and code</span>. Everything is a hands-on adventure designed to push your creativity to the absolute limit.
            </p>
          </motion.div>
        </div>

      </div>

      {/* Massive SVG Curve Bottom */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-32">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#080E4B"></path>
        </svg>
      </div>

    </section>
  );
};

export default About;
