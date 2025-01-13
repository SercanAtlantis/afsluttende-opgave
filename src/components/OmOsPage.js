// client/src/components/OmOsPage.js
import React from 'react';
import { motion } from 'framer-motion';

const OmOsPage = () => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Udvalg Section */}
          <motion.div 
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              src="/udvalg-image.png" 
              alt="Udvalg" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Udvalg</h2>
              <p className="text-slate-600 mb-4">
                Bliv en del af de inspirerende udvalg.
              </p>
              <a 
                href="/udvalg" 
                className="text-indigo-600 hover:text-indigo-700"
              >
                Læs mere
              </a>
            </div>
          </motion.div>

          {/* En Herreklub Section */}
          <motion.div 
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              src="/herreklub-image.jpeg" 
              alt="En Herreklub" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">En Herreklub ?</h2>
              <p className="text-slate-600 mb-4">
                Nyt liv i Køges lokalområder.
              </p>
              <a 
                href="/herreklub" 
                className="text-indigo-600 hover:text-indigo-700"
              >
                Læs mere
              </a>
            </div>
          </motion.div>

          {/* Bestyrelsen Section */}
          <motion.div 
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              src="/bestyrelse-image.jpeg" 
              alt="Bestyrelsen" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Bestyrelsen</h2>
              <p className="text-slate-600 mb-4">
                Følg med i møderne og kontakt bestyrelsen.
              </p>
              <a 
                href="/bestyrelse" 
                className="text-indigo-600 hover:text-indigo-700"
              >
                Læs mere
              </a>
            </div>
          </motion.div>
        </div>

        {/* Additional Sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Vedtægter Section */}
          <motion.div 
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              src="/vedtaegter-image.jpeg" 
              alt="Vedtægter" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Vedtægter</h2>
              <p className="text-slate-600 mb-4">
                Vedtægterne er endnu ikke færdigskrevet.
              </p>
              <a 
                href="/vedtaegter" 
                className="text-indigo-600 hover:text-indigo-700"
              >
                læs mere
              </a>
            </div>
          </motion.div>

          {/* Generalforsamling Section */}
          <motion.div 
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              src="/generalforsamling-image.jpg" 
              alt="Generalforsamling" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Generalforsamling</h2>
              <p className="text-slate-600 mb-4">
                Følg med i generalforsamlingerne.
              </p>
              <a 
                href="/generalforsamling" 
                className="text-indigo-600 hover:text-indigo-700"
              >
                Læs mere
              </a>
            </div>
          </motion.div>
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

export default OmOsPage;