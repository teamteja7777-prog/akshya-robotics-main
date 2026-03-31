import React from 'react';
import { Link } from 'react-scroll';
import { Bot, Home, Info, GraduationCap, Image, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', icon: <Home size={22} />, to: 'hero' },
    { name: 'About', icon: <Info size={22} />, to: 'about' },
    { name: 'Courses', icon: <GraduationCap size={22} />, to: 'courses' },
    { name: 'Gallery', icon: <Image size={22} />, to: 'gallery' },
    { name: 'Contact', icon: <PhoneCall size={22} />, to: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', bounce: 0.6, delay: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-2xl"
    >
      <div className="bg-primary/80 backdrop-blur-xl border-[4px] border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] rounded-full px-4 md:px-8 py-3 flex items-center justify-between">
        
        {/* Playful Floating Logo */}
        <Link to="hero" smooth={true} duration={500} className="hidden md:flex cursor-pointer text-highlight mr-4 hover:scale-125 transition-transform">
          <Bot size={36} strokeWidth={2.5} />
        </Link>

        {/* Floating Dock Links */}
        <nav className="flex items-center justify-around w-full md:w-auto md:gap-4 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="bg-highlight text-primary shadow-inner scale-110 -translate-y-2 border-none"
              className="flex flex-col items-center justify-center gap-1 text-gray-300 hover:text-white cursor-pointer transition-all p-2 rounded-2xl min-w-[64px] border border-transparent hover:border-white/10 hover:bg-white/5 active:scale-90"
            >
              {link.icon}
              <span className="text-[10px] uppercase font-black tracking-widest">{link.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
