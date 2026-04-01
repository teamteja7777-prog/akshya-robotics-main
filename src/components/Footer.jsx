import React from 'react';
import { Bot, Settings, Rocket, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full pt-32 pb-16 bg-[#0F172A] flex flex-col items-center justify-center relative overflow-hidden">

      {/* Playful Floating SVG Elements */}
      <Bot size={120} className="absolute top-10 left-10 text-white/5 -rotate-12" />
      <Settings size={150} className="absolute bottom-10 right-10 text-white/5 rotate-45" />

      <div className="flex flex-col md:flex-row items-center gap-6 mb-12 relative z-10 px-4 text-center">
         <div className="bg-highlight p-4 rounded-full border-4 border-black shadow-[5px_5px_0_#000]">
           <Bot size={48} className="text-primary" strokeWidth={2.5} />
         </div>
         <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white flex flex-col md:flex-row items-center gap-2 md:gap-3">
           Akshaya<span className="text-accent underline decoration-wavy decoration-highlight">Robotics</span>
         </h3>
      </div>

      <a href="tel:+919014466133" className="flex flex-col sm:flex-row items-center gap-4 text-primary text-lg sm:text-xl font-black uppercase tracking-widest bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-full border-4 border-black shadow-[8px_8px_0_#6366F1] relative z-10 mb-8 transform -rotate-1 hover:rotate-1 hover:-translate-y-1 hover:shadow-[8px_12px_0_#6366F1] active:translate-y-2 active:shadow-none transition-all max-w-[90%] mx-auto text-center cursor-pointer">
        <Phone size={28} className="text-highlight fill-highlight" />
        +91 9014466133
      </a>

      <p className="text-gray-400 font-bold mt-8 flex-col sm:flex-row flex items-center gap-3 relative z-10 bg-black/50 px-6 py-2 rounded-full">
        © {new Date().getFullYear()} Akshaya Robotics. Building the future, block by block! <Rocket size={24} className="text-highlight drop-shadow-lg" />
      </p>

    </footer>
  );
};

export default Footer;
