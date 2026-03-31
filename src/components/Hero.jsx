import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { Rocket, Sparkles, Bot, Blocks } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Massive Overlapping Gradient Background Blocks */}
      <motion.div style={{ y: y1 }} className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-accent/40 rounded-[100px] rotate-12 blur-[80px] origin-center -z-10 animate-pulse" />
      <motion.div style={{ y: y2 }} className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-highlight/30 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150vh] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTEyIDBMMjQgMTJIMTBPMiAweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIvPjwvc3ZnPg==')] opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col items-center justify-center text-center z-10 w-full relative">
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className="absolute top-0 right-10 md:right-32 text-highlight rotate-12 drop-shadow-[0_10px_10px_rgba(34,197,94,0.5)]"
        >
          <Sparkles size={80} strokeWidth={2} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="absolute bottom-20 left-10 md:left-20 text-accent -rotate-12 drop-shadow-[0_10px_10px_rgba(99,102,241,0.5)]"
        >
          <Blocks size={100} strokeWidth={1.5} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          className="text-[4.5rem] md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-tighter text-white drop-shadow-2xl flex flex-col items-center relative z-20"
        >
          <span className="block -rotate-2 -ml-8 overflow-visible z-10">AKSHAYA</span>
          <span className="block rotate-2 ml-8 text-transparent bg-clip-text bg-gradient-to-br from-highlight via-green-400 to-emerald-600 drop-shadow-[0_10px_30px_rgba(34,197,94,0.3)] z-20">ROBOTICS</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 md:mt-12 max-w-2xl bg-white/5 backdrop-blur-2xl p-6 md:p-8 rounded-[3rem] border border-white/20 shadow-2xl relative z-30 transform -rotate-1"
        >
          <p className="text-xl md:text-3xl font-bold text-gray-200">
            Unleash your imagination. Learn to code, build robots, and construct the future! 
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex gap-6 z-30"
        >
          <Link
            to="courses"
            smooth={true}
            duration={500}
            className="chunky-btn chunky-highlight px-10 py-5 text-2xl md:text-3xl rounded-[2rem] flex items-center gap-3 cursor-pointer z-50 transform hover:scale-105"
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
