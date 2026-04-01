import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Wrench, Code2, Cpu } from 'lucide-react';

const About = () => {
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);

  const cards = [
    { title: 'Build Robots', desc: 'Snap together awesome robotic buddies!', icon: <Wrench size={36} className="text-white" />, color: 'bg-highlight' },
    { title: 'Learn Coding', desc: 'Command your bots to solve challenges!', icon: <Code2 size={36} className="text-white" />, color: 'bg-accent' },
    { title: 'Smart Projects', desc: 'Bring your wildest ideas to life!', icon: <Cpu size={36} className="text-white" />, color: 'bg-[#F43F5E]' }
  ];

  return (
    <section id="about" className="relative w-full py-32 bg-white text-primary overflow-hidden">
      
      {/* Massive SVG Curve Top */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24 md:h-32 transform rotate-180">
          <path d="M321.39,56.44C358.82,11,388.94,0,388.94,0L1200,120H0V0Z" fill="#0F172A"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-24 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
        
        {/* Left Side: Staggered Masonry Cards */}
        <div className="relative h-[500px] w-full perspective-1000 hidden md:block">
          <motion.div style={{ rotateX, transformStyle: 'preserve-3d' }} className="w-full h-full relative">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: i * 0.2 }}
                className={`absolute w-72 h-64 ${card.color} rounded-[3rem] p-8 shadow-2xl flex flex-col justify-between border-[6px] border-black/10`}
                style={{
                  top: `${i * 90}px`,
                  left: `${i * 120}px`,
                  zIndex: 3 - i,
                  transform: `translateZ(${i * -50}px)`
                }}
              >
                <div className="bg-black/20 w-16 h-16 rounded-full flex items-center justify-center">{card.icon}</div>
                <div>
                  <h3 className="text-2xl font-black text-white">{card.title}</h3>
                  <p className="text-white/90 font-bold leading-tight mt-1">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile View: Stacked Cards */}
        <div className="md:hidden flex flex-col gap-6">
          {cards.map((card, i) => (
             <div key={i} className={`${card.color} rounded-[2rem] p-6 shadow-xl border-4 border-black/10`}>
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-black/20 w-12 h-12 rounded-full flex items-center justify-center">{card.icon}</div>
                  <h3 className="text-xl font-black text-white">{card.title}</h3>
                </div>
                <p className="text-white/90 font-bold leading-tight">{card.desc}</p>
             </div>
          ))}
        </div>

        {/* Right Side: Gigantic Typography Overlap */}
        <div className="text-left relative">
          {/* Background Decorative Outline */}
          <span className="absolute -top-16 -left-4 md:-left-10 text-[80px] md:text-[120px] font-black text-gray-100 select-none z-0 hidden sm:block">DO</span>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-primary">
              What <br/>Do We Do?
            </h2>
            <p className="text-2xl text-gray-600 font-bold border-l-[8px] border-accent pl-6 py-2">
              We replace boring textbooks with <span className="text-highlight">gears, wires, and code</span>. Everything is a hands-on adventure designed to push your creativity to the absolute limit.
            </p>
          </motion.div>
        </div>

      </div>

      {/* Massive SVG Curve Bottom */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-32">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#0F172A"></path>
        </svg>
      </div>

    </section>
  );
};

export default About;
