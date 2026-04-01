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
        className="fixed top-6 right-6 z-[60] bg-highlight text-primary p-4 rounded-[2rem] border-4 border-black shadow-[5px_5px_0_#0F172A] hover:-translate-y-1 hover:shadow-[5px_10px_0_#0F172A] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-2"
        aria-label="Open Navigation"
      >
        <Menu size={32} strokeWidth={3} />
        <span className="hidden md:block font-black text-xl uppercase tracking-widest leading-none">Menu</span>
      </motion.button>

      {/* Floating Brand Badge (Top Left) */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.5 }}
        className="fixed top-6 left-6 z-[50] hidden md:flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-[2rem] border-4 border-black shadow-[5px_5px_0_#6366F1]"
      >
        <Bot size={32} className="text-highlight" />
        <span className="font-black text-xl tracking-widest uppercase">Akshaya<span className="text-accent underline decoration-wavy">Robotics</span></span>
      </motion.div>

      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-primary/60 backdrop-blur-sm z-[90] cursor-pointer"
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
            className="fixed top-0 right-0 w-80 md:w-96 h-full bg-[#E2E8F0] border-l-8 border-black shadow-[-20px_0_50px_rgba(0,0,0,0.5)] z-[100] flex flex-col p-8 overflow-y-auto no-scrollbar"
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-black text-primary flex items-center gap-2"><Bot size={40} className="text-accent" /> ROBO<span className="text-highlight">NAV</span></h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="bg-red-500 text-white p-3 rounded-full border-4 border-black shadow-[4px_4px_0_#0F172A] hover:-translate-y-1 hover:shadow-[4px_8px_0_#0F172A] active:translate-y-1 active:shadow-none transition-all"
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
                  className="group flex items-center gap-4 bg-white text-primary p-4 rounded-[2rem] border-4 border-black shadow-[5px_5px_0_#6366F1] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_#6366F1] hover:bg-highlight active:translate-y-2 active:translate-x-2 active:shadow-none transition-all cursor-pointer overflow-hidden relative"
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

            <div className="mt-12 text-center text-gray-500 font-bold">
               <p>© Akshaya Robotics</p>
               <p>Game On. 🚀</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
