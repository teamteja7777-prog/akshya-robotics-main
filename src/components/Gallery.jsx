"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, ZoomIn, AlertCircle } from 'lucide-react';
import { galleryImages as images } from '../data/galleryImages';


// Helper to generate extremely unpredictable random rotations and shifts for polaroid scattering
const generateRandomStyle = () => {
  const rotate = Math.floor(Math.random() * 30) - 15; // -15 to +15 deg
  const xOffset = Math.floor(Math.random() * 20) - 10;
  const yOffset = Math.floor(Math.random() * 20) - 10;
  return { rotate, xOffset, yOffset };
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="relative min-h-screen py-32 bg-[#E2E8F0] text-primary overflow-hidden">
      {/* Background "Desk" Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#1e293b 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

      <div className="section-container">
        
        <div className="absolute top-10 left-10 md:left-24 rotate-[-10deg] bg-highlight border-8 border-black text-black font-black text-6xl p-4 shadow-[10px_10px_0_#000] z-0">
          SNAP! <Camera size={64} className="inline ml-4" />
        </div>

        <div className="text-right mb-24 relative z-10 w-full flex justify-end">
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-10 rounded-[3rem] border-8 border-black shadow-[15px_15px_0_#6366F1] max-w-2xl transform rotate-3"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase">
              The Wall of <br/> Awesomeness
            </h2>
            <p className="text-xl font-bold">
              Check out these real builds from our students.
            </p>
          </motion.div>
        </div>

        {images.length > 0 ? (
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 mt-20 relative">
            {images.map((src, idx) => {
              const { rotate, xOffset, yOffset } = generateRandomStyle();
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 2 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 50, delay: Math.random() * 0.5 }}
                  style={{ transform: `translate(${xOffset}px, ${yOffset}px) rotate(${rotate}deg)` }}
                  className="polaroid-pic w-48 md:w-80 group mt-4 z-10"
                  onClick={() => setSelectedImage(src)}
                >
                  <div className="w-full h-40 md:h-64 overflow-hidden bg-gray-200 border-2 border-gray-300">
                    <img
                      src={src}
                      alt={`Student Work`}
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-4 left-0 w-full text-center">
                    <p className="font-handwriting text-2xl text-gray-800 font-bold -rotate-2">Project #{idx + 1}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        ) : (
          <div className="text-center p-12 bg-white rounded-3xl border-8 border-dashed border-gray-400 flex flex-col items-center gap-4 mx-auto max-w-md shadow-xl transform rotate-2">
            <AlertCircle size={64} className="text-red-500" />
            <p className="text-2xl font-black text-gray-600">No photos on the desk yet!</p>
          </div>
        )}
      </div>

      {/* Fun Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-accent/90 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-primary bg-highlight border-8 border-primary p-4 rounded-full shadow-[0_8px_0_#0F172A] hover:translate-y-2 hover:shadow-none active:scale-95 transition-all z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} strokeWidth={4} />
            </button>
            <motion.img
              initial={{ scale: 0.5, rotate: -20, y: 500 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              exit={{ scale: 0.5, rotate: 20, y: 500 }}
              transition={{ type: "spring", bounce: 0.4 }}
              src={selectedImage}
              alt="Expanded"
              className="max-w-full max-h-[85vh] object-contain bg-white p-6 pb-20 rounded-md border-2 border-gray-300 drop-shadow-[0_40px_40px_rgba(0,0,0,0.5)] cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
