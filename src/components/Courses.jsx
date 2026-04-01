import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Gamepad2, BatteryCharging, BrainCircuit, Trophy } from 'lucide-react';

const Courses = () => {
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const courses = [
    { icon: <Gamepad2 size={64} />, title: 'Level 1: Novice Builder', desc: 'Starting from scratch! Build simple toys that move and light up.', color: 'bg-[#22C55E]', text: 'text-primary' },
    { icon: <BatteryCharging size={64} />, title: 'Level 2: Circuit Master', desc: 'Dive into electronics. Learn how circuits and microcontrollers work together!', color: 'bg-[#6366F1]', text: 'text-white' },
    { icon: <BrainCircuit size={64} />, title: 'Level 3: Logic Brain', desc: 'Teach robots how to see and think! Introduction to fun, block-based AI logic.', color: 'bg-[#F43F5E]', text: 'text-white' },
    { icon: <Trophy size={64} />, title: 'Boss Level: Pro', desc: 'Race cars, battle-bots, and obstacle courses. Put your skills to the ultimate test!', color: 'bg-[#EAB308]', text: 'text-primary' },
  ];

  return (
    <section id="courses" className="relative py-32 bg-primary overflow-hidden">
      <div className="section-container relative z-10">
        
        <div className="absolute top-0 right-10 md:right-32 w-64 h-64 border-[30px] border-accent/20 rounded-full blur-[2px] -z-10" />

        <div className="mb-24 flex items-center gap-6">
          <Gamepad2 size={80} strokeWidth={2.5} className="text-highlight hidden md:block" />
          <h2 className="text-5xl md:text-8xl font-black leading-none drop-shadow-2xl">
            Choose Your <br/> <span className="text-accent underline decoration-wavy decoration-highlight">Adventure</span>
          </h2>
        </div>

        {/* Puzzle/ZigZag Layout */}
        <div className="flex flex-col gap-8 md:gap-4 relative pl-4 md:pl-0">
          {/* Vertical Path Line */}
          <div className="absolute left-[34px] md:left-1/2 top-0 bottom-0 w-4 bg-white/10 rounded-full transform md:-translate-x-1/2 z-0 hidden md:block"></div>

          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
              className={`flex w-full ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} relative z-10`}
            >
              <div className={`relative ${course.color} ${course.text} w-full md:w-[45%] rounded-[3rem] p-8 md:p-12 shadow-[0_15px_0_rgba(0,0,0,0.4)] border-8 border-black/10 transform transition-transform hover:-translate-y-4`}>
                
                {/* Connector Dot */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-white ${course.color} z-20 hidden md:block ${i % 2 === 0 ? '-right-[calc(5.5%+2rem)]' : '-left-[calc(5.5%+2rem)]'}`} />

                <div className="flex items-start gap-6">
                  <div className="bg-white/20 p-4 rounded-3xl shrink-0">
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black mb-3">{course.title}</h3>
                    <p className="font-bold text-xl leading-snug">{course.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
