// client/src/components/BookOsPage.js
import React from 'react';
import { motion } from 'framer-motion';

const BookOsPage = () => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Book en lokal Herreklub. Vi hjælper lokalsamfundet, og gerne andre foreninger...
            </h1>
            <p className="text-slate-600 mb-12">
              Vi udfører foreningsarbejde mod en beskeden honorering til vores klub. Kontakt os for at høre mere om hvordan vi kan hjælpe jeres forening.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Praktisk arbejde */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              src="/praktisk-arbejde.jpeg"
              alt="Praktisk arbejde"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Praktisk arbejde</h3>
              <p className="text-slate-600">
                Skal I have forskønnet jeres klubhus eller lavet andet praktisk arbejde i jeres idrætsforening, så kan den lokale HerreKlub hjælpe jer. Vores indsats gavner både jeres og vores forening.
              </p>
            </div>
          </motion.div>

          {/* Servering i baren */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              src="/servering.jpeg"
              alt="Servering i baren"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Servering i baren</h3>
              <p className="text-slate-600">
                Afholder i byfest, halfest eller anden foreningstjenes fest, så hjælper den lokale Herreklub gerne til i baren eller med andet arbejde. Vi er alle voksne mænd, som forstår at sætte op om den festlige stemning.
              </p>
            </div>
          </motion.div>

          {/* Andre opgaver */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              src="/andre-opgaver.jpg"
              alt="Andre opgaver"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Andre opgaver</h3>
              <p className="text-slate-600">
                Planlægger i en affaldsindsamling eller anden god gerning, så kan den lokale Herreklub hjælpe med arbejdet. Vi er alle ansvarsbevidste og ønsker at efterlade en ren planet til nye generationer.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 ">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Kontakt Køge Herreklubber
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Fornavn
                  </label>
                  <input
                    type="text"
                    placeholder="Indtast dit fornavn"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Efternavn
                  </label>
                  <input
                    type="text"
                    placeholder="Indtast dit efternavn"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Mail
                  </label>
                  <input
                    type="email"
                    placeholder="Indtast din mail"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Mobil
                  </label>
                  <input
                    type="tel"
                    placeholder="Indtast dit mobilnr"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Book Køge Herreklubber
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Skriv hvad din henvendelse drejer sig om"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Send
                </button>
              </form>
            </div>

           
            <div className="h-[400px] rounded-lg overflow-hidden bg-slate-100">
        <img
          src="/Køge-midtby.png"
          alt="Køge Midtby"
          className="w-full h-full object-cover"
        />
      </div>
          </div>
        </div>
      </div>

      <div className="w-full h-1 bg-indigo-600"></div>

      {/* Footer - Same as other pages */}
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

export default BookOsPage;