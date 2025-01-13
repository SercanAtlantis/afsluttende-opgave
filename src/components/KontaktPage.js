// client/src/components/KontaktPage.js
import React from 'react';
import { motion } from 'framer-motion';

const KontaktPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12"
        >
          <h1 className="text-4xl font-bold text-center text-slate-800 mb-12">
            Kontakt Køge Herreklubber
          </h1>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                For- og efternavn
              </label>
              <input
                type="text"
                placeholder="Skriv dit fulde navn"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors placeholder-slate-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Skriv din email"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors placeholder-slate-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Mobilnummer
              </label>
              <input
                type="tel"
                placeholder="Skriv dit mobilnummer"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors placeholder-slate-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Besked til Køge Herreklubber
              </label>
              <textarea
                rows="4"
                placeholder="Skriv din besked her"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors placeholder-slate-400"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium"
            >
              Send
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Separator Line */}
      <div className="w-full h-1 bg-indigo-600"></div>

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

export default KontaktPage;