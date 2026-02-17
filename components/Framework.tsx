
import React from 'react';
import { motion } from 'framer-motion';
import { FRAMEWORK_DATA } from '../constants';
import * as Icons from 'lucide-react';

const Framework: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Theoretical Foundations</h2>
          <p className="text-slate-400">Our analysis is anchored in four pillars of modern strategic science.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FRAMEWORK_DATA.map((card, idx) => {
            const IconComponent = (Icons as any)[card.icon];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-2xl glass border-white/5 hover:bg-white/5 transition-all flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">{card.description}</p>
                
                <div className="text-xs text-blue-500/80 font-mono tracking-tight pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {card.content}
                </div>

                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <IconComponent size={80} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Framework;
