import React from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, Rocket, Bot, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    { title: "Hands-on Muck", icon: <Target size={56} className="text-white" />, color: "bg-[#EF4444]", rotate: "rotate-6" },
    { title: "Crazy Ideas", icon: <Brain size={56} className="text-white" />, color: "bg-[#8B5CF6]", rotate: "-rotate-6" },
    { title: "Super Skills", icon: <Rocket size={56} className="text-white" />, color: "bg-[#3B82F6]", rotate: "rotate-12" },
    { title: "Real Metal", icon: <Bot size={56} className="text-primary" />, color: "bg-highlight", rotate: "-rotate-12" },
  ];

  return (
    <section id="features" className="py-32 bg-[#0a0f1d] relative z-20 overflow-hidden">
      <div className="section-container text-center flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-[6rem] font-black inline-flex flex-col items-center leading-none mb-16 md:mb-20 relative z-30"
        >
          <span className="text-highlight px-6 py-2 bg-highlight/20 border-8 border-highlight rounded-[3rem] transform -rotate-3 mb-4 shadow-[0_10px_0_#16a34a]">WHY US?</span>
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
              <div className={`w-32 h-32 md:w-48 md:h-48 ${feat.color} rounded-[2rem] md:rounded-[3rem] flex items-center justify-center shadow-[0_15px_0_rgba(0,0,0,0.5)] active:translate-y-[10px] active:shadow-none transition-all border-4 md:border-8 border-black/20 relative z-10`}>
                <span className="group-hover:animate-bounce block">{feat.icon}</span>
              </div>
              <h3 className="text-xl md:text-3xl font-black mt-4 md:mt-6 text-white bg-black/50 px-4 md:px-6 py-2 rounded-full border-2 border-white/10 group-hover:text-highlight transition-colors max-w-[150px] md:max-w-[200px] leading-tight z-20">
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
