// client/src/components/PressePage.js
import React from 'react';
import { motion } from 'framer-motion';

const PressePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content with Background Image */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/IMG.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay for readability */}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold text-white mb-12">
              Pressesektion
            </h1>
            
            <div className="space-y-6 text-lg text-white">
              <p>
                Køge Herreklubber er under etablering, med det formål at bekæmpe mænds ensomhed og 
                mistrivsel gennem meningsfulde aktiviteter og socialt samvær. Klubberne er lokalt forankret, 
                hvor de bringer mænd sammen omkring fælles interesser og skaber et stærkt fællesskab i 
                lokalsamfundet.
              </p>

              <p>
                Formålet med lokale Herreklubber er at skabe et rum, hvor mænd kan mødes og socialisere 
                omkring emner og aktiviteter, der interesserer dem. Dette kan spænde bredt fra at lave mad 
                sammen, brygge øl, til at arrangere events og foredrag. Klubberne tilbyder et aktivt 
                medlemskab, hvor medlemmerne engagerer sig i at styrke fællesskabet ved at deltage i 
                forskellige aktiviteter og bidrage til klubbernes formål.
              </p>

              <p>
                En central del af Herreklubbernes identitet er deres engagement i velgørende formål og lokale 
                initiativer. Klubberne deltager aktivt i lokale projekter og arrangementer, og medlemmerne 
                bidrager gerne til at gøre en positiv forskel i lokalsamfundet.
              </p>

              <p>
                Klubberne tiltrækker en mangfoldig gruppe af mænd fra forskellige aldre og baggrunde. Dette 
                bidrager til et dynamisk og inkluderende fællesskab, hvor medlemmerne kan lære af hinanden 
                og udveksle erfaringer og perspektiver.
              </p>

              <p>
                Gennem vores arbejde opnår vi en positiv indflydelse på lokalsamfundet. Klubberne har skabt 
                et stærkt fællesskab, der ikke kun gavner medlemmerne, men også bidrager til at styrke 
                båndene i lokalsamfundet og fremmer trivsel og samhørighed blandt dets indbyggere.
              </p>
            </div>
          </motion.div>
        </div>
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

export default PressePage;