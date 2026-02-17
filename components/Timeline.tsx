
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TIMELINE_DATA } from '../constants';

const Timeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <section id="experiment" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Inside the Laboratory</h2>
        <p className="text-slate-400 max-w-xl mx-auto">Our multi-stage simulation reconstructs decision architectures used by global market leaders.</p>
      </div>

      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-purple-500/0 hidden md:block"></div>

        <div className="space-y-12 relative">
          {TIMELINE_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full">
                <div 
                  className={`p-6 rounded-2xl glass border-white/10 cursor-pointer transition-all hover:border-blue-500/50 ${activeStage === item.id ? 'ring-2 ring-blue-500/40 bg-white/5' : ''}`}
                  onClick={() => setActiveStage(activeStage === item.id ? null : item.id)}
                >
                  <span className="text-blue-400 font-mono text-sm mb-2 block tracking-widest uppercase">Stage 0{item.id}</span>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                  
                  <AnimatePresence>
                    {activeStage === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-4 pt-4 border-t border-white/10"
                      >
                        <p className="text-sm text-slate-300 leading-relaxed italic">
                          {item.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Connector Dot */}
              <div className="relative z-10">
                <div className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${activeStage === item.id ? 'bg-blue-500 border-white scale-125' : 'bg-slate-900 border-blue-500/50'}`}></div>
              </div>

              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
