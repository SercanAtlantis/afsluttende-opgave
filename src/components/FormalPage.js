// client/src/components/FormalPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // We'll need to install framer-motion

const FormalPage = () => {
  

  // Animation variants
  const cardVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800">
          <img
            src="/holger-danske.jpg" // Replace with actual Holger Danske image
            alt="Holger Danske Statue"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
            Køge Herreklubbers formål
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Et stærkt fællesskab for mænd i Køge
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Mission Statement Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg shadow-xl p-8 mb-12"
        >
          <blockquote className="text-2xl md:text-3xl font-serif text-slate-800 border-l-4 border-indigo-600 pl-6 py-2">
            "Herreklubbernes primære formål er at forebygge ensomhed og mistrivsel blandt mænd i Køge ved at tilbyde meningsfulde aktiviteter, som opbygger og vedligeholder relationer, samt ved at yde støtte gennem vores forpligtende fællesskaber."
          </blockquote>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
  <motion.div 
    variants={cardVariants}
    whileHover="hover"
    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
  >
    {/* Card Content Container */}
    <div className="relative h-48">
      {/* Split background with image */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-indigo-600"></div>
      <div className="absolute top-0 right-0 w-2/3 h-full">
        <img
          src="/holger-close.jpg"
          alt="Vision"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Optional: Add small text overlay on the blue part */}
      <div className="absolute top-2 left-2 text-white text-sm">
        Vision
      </div>
    </div>
    
    {/* Text content below the split image */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-800 mb-2">Vores Vision</h3>
      <p className="text-slate-600">
        Læs mere om vores vision for fremtiden og hvordan vi arbejder mod vores mål.
      </p>
    </div>
  </motion.div>

  {/* Repeat similar structure for other cards */}
  <motion.div 
    variants={cardVariants}
    whileHover="hover"
    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
  >
    <div className="relative h-48">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-indigo-600"></div>
      <div className="absolute top-0 right-0 w-2/3 h-full">
        <img
          src="/activities.jpg"
          alt="Aktiviteter"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-2 left-2 text-white text-sm">
        Aktiviteter
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-800 mb-2">Aktiviteter</h3>
      <p className="text-slate-600">
        Udforsk vores mange forskellige aktiviteter og arrangementer.
      </p>
    </div>
  </motion.div>

  <motion.div 
    variants={cardVariants}
    whileHover="hover"
    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
  >
    <div className="relative h-48">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-indigo-600"></div>
      <div className="absolute top-0 right-0 w-2/3 h-full">
        <img
          src="/impact.jpg"
          alt="Indflydelse"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-2 left-2 text-white text-sm">
        Indflydelse
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-800 mb-2">Vores Indflydelse</h3>
      <p className="text-slate-600">
        Se hvordan vi gør en forskel i lokalsamfundet.
      </p>
    </div>
  </motion.div>
</div>

        {/* Description Section with Interactive Elements */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Om Vores Indsats</h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p className="mb-6">
                Det er afgørende, at vi som samfund aktivt bekæmper ensomhed og mistrivsel lokalt, da disse er direkte kilder til dårlig mental sundhed, herunder depression og angst.
              </p>
              <p>
                I Herreklubben tager vi initiativ til at lede an i denne kamp og er ivrige efter at dele vores erfaringer med andre, der ønsker at iværksætte lignende projekter.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Kontakt</h2>
            <div className="space-y-3 text-slate-600">
              <p>Køge Herreklubber</p>
              <p>c/o Karsten Kjær</p>
              <p>Moseskrænten 27, Ejby</p>
              <p>4623 Lille Skensved</p>
              <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                Kontakt os
              </button>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Website</h2>
            <div className="space-y-3 text-slate-600">
              <p>Legal ejer: Køge Herreklubber</p>
              <button className="text-indigo-600 hover:text-indigo-700 transition-colors">
                Cookie- og Privatlivspolitik
              </button>
              <button className="block text-indigo-600 hover:text-indigo-700 transition-colors">
                Kontakt redaktør
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FormalPage;