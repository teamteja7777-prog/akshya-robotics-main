import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MessageCircle, MapPin } from 'lucide-react';
import Map from './Map';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-[#EAB308] border-8 border-black">
      <div className="section-container">
        
        {/* Massive Offset Header */}
        <div className="text-center mb-16 relative">
          <motion.div 
            initial={{ y: -50, rotate: -5 }}
            whileInView={{ y: 0, rotate: -2 }}
            viewport={{ once: true }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black font-black text-2xl md:text-3xl px-8 py-3 w-max border-4 border-black shadow-[8px_8px_0_#0F172A] z-10"
          >
            SAY HELLO 👋
          </motion.div>
          <h2 className="text-6xl md:text-8xl md:max-w-4xl mx-auto font-black leading-none drop-shadow-[5px_5px_0_#fff] text-primary relative z-0 mt-8">
            Parents, let's chat!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Big Chunky Arcade Buttons Area */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 md:gap-10 pt-4"
          >
            <div 
              className="bg-highlight text-primary p-6 md:p-8 border-[6px] border-black shadow-[0_15px_0_#064e3b] rounded-[3rem] text-center cursor-pointer transform transition-all active:translate-y-[15px] active:shadow-none hover:rotate-1" 
              onClick={() => window.location.href = 'tel:+9190144661334'}
            >
              <div className="flex justify-center mb-2">
                <PhoneCall size={80} strokeWidth={2.5} className="animate-bounce" />
              </div>
              <h3 className="text-4xl font-black mb-2 uppercase tracking-tight">Call Now</h3>
              <p className="text-2xl font-bold font-mono bg-white/50 px-4 py-2 rounded-full inline-block border-2 border-black">+91 90144661334</p>
            </div>

            <div 
              className="bg-accent text-white p-6 md:p-8 border-[6px] border-black shadow-[0_15px_0_#312e81] rounded-[3rem] text-center cursor-pointer transform transition-all active:translate-y-[15px] active:shadow-none hover:-rotate-1" 
              onClick={() => window.open('https://wa.me/9190144661334', '_blank')}
            >
              <div className="flex justify-center mb-2">
                 <MessageCircle size={80} strokeWidth={2.5} className="hover:scale-110 transition-transform origin-bottom" />
              </div>
              <h3 className="text-4xl font-black mb-2 uppercase tracking-tight">WhatsApp Us</h3>
              <p className="text-xl font-bold">Tap to instantly connect</p>
            </div>

            <div className="bg-white p-6 rounded-[2rem] border-4 border-black flex items-center justify-center gap-6 shadow-[5px_5px_0_#0F172A] transform rotate-1 hover:rotate-0 transition-transform">
              <div className="bg-primary/10 p-4 rounded-full">
                <MapPin size={48} className="text-primary" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-primary uppercase">Headquarters</h4>
                <p className="text-gray-600 font-bold text-lg">Mind Space, Hyderabad</p>
              </div>
            </div>

          </motion.div>

          {/* Map Display in a playful TV-like container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[450px]"
          >
            <div className="w-full h-full bg-white p-4 rounded-[4rem] border-8 border-black shadow-[15px_15px_0_#0F172A] relative overflow-hidden flex flex-col pt-8">
              
              <div className="flex gap-4 justify-center mb-6 px-4">
                 <div className="w-6 h-6 rounded-full bg-red-400 border-2 border-black"></div>
                 <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-black"></div>
                 <div className="w-6 h-6 rounded-full bg-green-400 border-2 border-black"></div>
              </div>

              <div className="flex-1 w-full bg-black rounded-[3rem] overflow-hidden border-4 border-black">
                <Map />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Decorative Bottom Outline */}
      <div className="absolute -bottom-8 left-0 w-full h-16 bg-white transform -skew-y-2 border-t-[8px] border-b-[8px] border-black z-10" />
    </section>
  );
};

export default Contact;
