// client/src/components/MedlemPage.js
import React from 'react';
import { motion } from 'framer-motion';

const MedlemPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/bestyrelse-image.jpeg" // The gathering image
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Anmodning om medlemskab af en
            <br />
            lokal Herreklub i Køge
          </h1>
        </motion.div>
      </div>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg shadow-xl p-8"
        >
          <p className="text-slate-600 mb-8">
            Anmodninger behandles i den rækkefølge de kommer ind. Du vil snarest efter indsendelse af din anmodning blive kontaktet af Køge Herreklubbers initiativtagere, som vil fortælle dig nærmere om hvad medlemskabet indebærer.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Hvilken bydel hører du til?
              </label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option>Algestrup</option>
                {/* Add other options */}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                For- og efternavn
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Skriv dit fulde navn"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Skriv din email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Mobilnummer
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Skriv dit mobilnummer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Adresse
              </label>
              <textarea
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                rows="3"
                placeholder="Skriv din adresse"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Besked om anmodning om medlemskab
              </label>
              <textarea
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                rows="4"
                placeholder="Skriv lidt om dig selv og hvorfor du gerne vil være en del af en Herreklub"
              />
            </div>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Send
              </motion.button>

              <p className="text-sm text-slate-600">
                Når jeg sender min anmodning om medlemskab til en lokalafdeling under Køge Herreklubber, er jeg indforstået med foreningens gældende samtykkeerklæring til brug af billeder og kontaktoplysninger, foreningens formål samt at blive en del af det forpligtende fællesskab i Ejby Herreklub.
              </p>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Footer - Same as other pages */}
      {/* ... Footer code ... */}
    </div>
  );
};

export default MedlemPage;