// client/src/components/HomePage.js
import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  // Animation variants for logos
  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50">
      {/* Hero Section with Video Background - Increased height */}
      <div className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Herreklub.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
            Køge Herreklubber
          </h1>
          <h2 className="text-3xl md:text-4xl text-white mb-8">
            Stærke lokale fællesskaber
          </h2>
          <p className="text-xl text-slate-200 max-w-2xl">
            Bliv en del af opstarten i dit lokalområde, med nye venskaber og
            fantastiske oplevelser.
          </p>
        </motion.div>
      </div>

      {/* Support Section - Vi støtter */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Vi støtter...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center mb-16">
            {['kfum-spejderne-logo.png', 'ren-natur-logo.png', 'koege-festuge-logo.png'].map((logo, index) => (
              <motion.img
                key={logo}
                src={`/${logo}`}
                alt={logo.split('.')[0]}
                className="h-24 object-contain"
                variants={logoVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: index * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="w-full h-1 bg-indigo-600"></div>

      {/* Support Section - Vi støttes af */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Vi støttes af...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
            {['koege-kommune-logo.png', 'steno-diabetes-logo.jpg'].map((logo, index) => (
              <motion.img
                key={logo}
                src={`/${logo}`}
                alt={logo.split('.')[0]}
                className="h-24 object-contain"
                variants={logoVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: index * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-x-24">
          <div>
            <h2 className="text-[32px] font-bold text-slate-900 mb-6">Kontakt</h2>
            <div className="space-y-2">
              <p className="text-slate-600">Køge Herreklubber</p>
              <p className="text-slate-600">c/o Karsten Kjær</p>
              <p className="text-slate-600">Moseskrænten 27, Ejby</p>
              <p className="text-slate-600">4623 Lille Skensved</p>
              <a href="/kontakt" className="inline-block mt-2 text-[#6E45E2] hover:text-[#5835c2]">
                Kontakt os
              </a>
            </div>
          </div>
        
          <div>
            <h2 className="text-[32px] font-bold text-slate-900 mb-6">Website</h2>
            <div className="space-y-2">
              <p className="text-slate-600">Legal ejer: Køge Herreklubber</p>
              <a href="/privacy" className="block text-[#6E45E2] hover:text-[#5835c2]">
                Cookie- og Privatlivspolitik
              </a>
              <a href="/kontakt" className="block text-[#6E45E2] hover:text-[#5835c2]">
                Kontakt redaktør
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default HomePage;