"use client";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Lightbulb, GraduationCap, Phone, Star, Menu, X, Bot } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when pressing Escape key
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero', icon: <Home size={32} /> },
    { name: 'About', to: 'about', icon: <Lightbulb size={32} /> },
    { name: 'Courses', to: 'courses', icon: <GraduationCap size={32} /> },
    { name: 'Features', to: 'features', icon: <Star size={32} /> },
    { name: 'Contact', to: 'contact', icon: <Phone size={32} /> },
  ];

  return (
    <>
      {/* Floating Menu Button (Always Top Right) */}
      <motion.button
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.6, delay: 0.2 }}
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-[60] bg-highlight text-primary p-3 sm:p-4 rounded-[2rem] border-4 border-black shadow-[5px_5px_0_#E3000B] hover:-translate-y-1 hover:shadow-[5px_10px_0_#E3000B] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-2.5 cursor-pointer"
        aria-label="Open Navigation"
      >
        <img src="/badge-logo.png" alt="Akshaya Robotics" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
        <Menu size={28} strokeWidth={3} />
        <span className="hidden md:block font-black text-xl uppercase tracking-widest leading-none">Menu</span>
      </motion.button>

      {/* Floating Brand Badge (Top Left) - Links to Home */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.5 }}
        className="fixed top-4 left-4 md:top-6 md:left-6 z-[50] flex items-center"
      >
        <Link
          to="hero"
          smooth={true}
          duration={500}
          aria-label="Akshaya Robotics Home"
          className="cursor-pointer hover:scale-105 active:scale-95 transition-transform select-none block"
        >
          <img
            src="/badge-logo.png"
            alt="Akshaya Robotics Badge Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
          />
        </Link>
      </motion.div>

      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90] cursor-pointer"
          />
        )}
      </AnimatePresence>

      {/* Slide-Out Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } }}
            transition={{ type: 'spring', bounce: 0.2 }}
            className="fixed top-0 right-0 w-80 md:w-96 h-full bg-[#080E4B] border-l-8 border-[#E3000B] shadow-[-20px_0_50px_rgba(8,14,75,0.8)] z-[100] flex flex-col p-8 overflow-y-auto no-scrollbar"
          >
            <div className="flex justify-between items-center mb-12">
              <Link
                to="hero"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                aria-label="Akshaya Robotics Home"
                className="text-3xl font-black text-white flex items-center gap-3 cursor-pointer group hover:opacity-90 transition-opacity"
              >
                <img src="/badge-logo.png" alt="Akshaya Robotics Logo" className="w-12 h-12 object-contain group-hover:rotate-6 transition-transform" />
                ROBO<span className="text-highlight">NAV</span>
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="bg-[#E3000B] text-white p-3 rounded-full border-4 border-black shadow-[4px_4px_0_#FFED00] hover:-translate-y-1 hover:shadow-[4px_8px_0_#FFED00] active:translate-y-1 active:shadow-none transition-all"
                aria-label="Close Navigation"
              >
                <X size={28} strokeWidth={4} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 w-full flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  aria-label={`Navigate to ${link.name} section`}
                  className="group flex items-center gap-4 bg-white text-primary p-4 rounded-[2rem] border-4 border-black shadow-[5px_5px_0_#E3000B] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_#FFED00] hover:bg-highlight active:translate-y-2 active:translate-x-2 active:shadow-none transition-all cursor-pointer overflow-hidden relative"
                >
                  {/* Decorative Slide Background */}
                  <div className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></div>
                  
                  <div className="bg-primary/10 p-3 rounded-full relative z-10 group-hover:bg-white group-hover:text-primary transition-colors">
                     {link.icon}
                  </div>
                  <span className="text-2xl font-black uppercase tracking-widest relative z-10 group-hover:text-white transition-colors">{link.name}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-12 text-center text-white/80 font-bold">
               <p>© Akshaya Robotics</p>
               <p className="text-highlight">Game On. 🚀</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
