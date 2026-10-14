"use client";

import React from 'react';
import { Bot, Settings, Rocket, Phone, MessageCircle, Instagram, Youtube, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full pt-32 pb-16 bg-black flex flex-col items-center justify-center relative overflow-hidden isolate">

      {/* Futuristic Robotics Goldwave Banner Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/footer-bg.png"
          alt="Futuristic Robotics Goldwave Banner - Akshaya Robotics Academy Hyderabad"
          className="w-full h-full object-cover object-center brightness-90 contrast-105"
        />
        {/* Soft Vignette Overlay ensuring banner artwork visibility and high text contrast */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* Playful Floating SVG Elements */}
      <Bot size={120} className="absolute top-10 left-10 text-white/5 -rotate-12 z-0 pointer-events-none" />
      <Settings size={150} className="absolute bottom-10 right-10 text-white/5 rotate-45 z-0 pointer-events-none" />

      <a 
        href="tel:+919014466133" 
        aria-label="Call Akshaya Robotics at +91 9014466133"
        className="flex flex-col sm:flex-row items-center gap-4 text-primary text-lg sm:text-xl font-black uppercase tracking-widest bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-full border-4 border-black shadow-[8px_8px_0_#E3000B] relative z-10 mb-8 transform -rotate-1 hover:rotate-1 hover:-translate-y-1 hover:shadow-[8px_12px_0_#FFED00] active:translate-y-2 active:shadow-none transition-all max-w-[90%] mx-auto text-center cursor-pointer"
      >
        <Phone size={28} className="text-accent fill-accent" />
        +91 9014466133
      </a>

      {/* Social & Contact Quick Action Icons */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 relative z-10 mb-8 px-4">
        <a
          href="https://wa.me/919014466133"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Akshaya Robotics on WhatsApp"
          className="group relative bg-[#FFED00] text-[#080E4B] p-3.5 sm:p-4 rounded-full border-4 border-black shadow-[4px_4px_0_#E3000B] hover:-translate-y-1.5 hover:shadow-[4px_8px_0_#E3000B] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
        >
          <MessageCircle size={28} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
          <span className="sr-only">WhatsApp</span>
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Akshaya Robotics on Instagram"
          className="group relative bg-[#E3000B] text-white p-3.5 sm:p-4 rounded-full border-4 border-black shadow-[4px_4px_0_#FFED00] hover:-translate-y-1.5 hover:shadow-[4px_8px_0_#FFED00] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
        >
          <Instagram size={28} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
          <span className="sr-only">Instagram</span>
        </a>

        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch Akshaya Robotics on YouTube"
          className="group relative bg-white text-[#E3000B] p-3.5 sm:p-4 rounded-full border-4 border-black shadow-[4px_4px_0_#080E4B] hover:-translate-y-1.5 hover:shadow-[4px_8px_0_#080E4B] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
        >
          <Youtube size={28} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
          <span className="sr-only">YouTube</span>
        </a>

        <a
          href="#contact"
          aria-label="View Location in Mind Space Hyderabad"
          className="group relative bg-[#FFED00] text-[#E3000B] p-3.5 sm:p-4 rounded-full border-4 border-black shadow-[4px_4px_0_#080E4B] hover:-translate-y-1.5 hover:shadow-[4px_8px_0_#080E4B] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
        >
          <MapPin size={28} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
          <span className="sr-only">Location Map</span>
        </a>

        <a
          href="mailto:contact@akshayarobotics.com"
          aria-label="Email Akshaya Robotics"
          className="group relative bg-white text-[#080E4B] p-3.5 sm:p-4 rounded-full border-4 border-black shadow-[4px_4px_0_#E3000B] hover:-translate-y-1.5 hover:shadow-[4px_8px_0_#E3000B] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
        >
          <Mail size={28} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
          <span className="sr-only">Email Us</span>
        </a>
      </div>

      <p className="text-white/80 font-bold mt-4 flex-col sm:flex-row flex items-center gap-3 relative z-10 bg-black border border-white/20 px-6 py-2 rounded-full">
        © {new Date().getFullYear()} Akshaya Robotics. Building the future, block by block! <Rocket size={24} className="text-highlight drop-shadow-lg" />
      </p>

    </footer>
  );
};

export default Footer;
