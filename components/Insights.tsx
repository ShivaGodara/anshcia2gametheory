
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target } from 'lucide-react';

const Insights: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const insights = [
    { id: 'cog', title: 'Cognitive Structure', icon: <Target className="w-6 h-6" />, desc: 'The architectural blueprint of how information is processed and filtered before a choice is made.', x: '50%', y: '10%' },
    { id: 'risk', title: 'Risk Calibration', icon: <Shield className="w-6 h-6" />, desc: 'The continuous dynamic adjustment of exposure based on evolving environmental noise.', x: '15%', y: '80%' },
    { id: 'flex', title: 'Adaptive Flexibility', icon: <Zap className="w-6 h-6" />, desc: 'The ability to discard a failing strategy in favor of high-uncertainty alternatives.', x: '85%', y: '80%' },
  ];

  return (
    <section className="py-24 px-4 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Strategic Dimensions</h2>
          <p className="text-slate-400">The triad of success identified in 10,000+ hours of simulation data.</p>
        </div>

        <div className="relative aspect-square max-w-2xl mx-auto mb-20">
          {/* Central Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 400 400">
            <line x1="200" y1="60" x2="80" y2="300" stroke="white" strokeWidth="1" />
            <line x1="80" y1="300" x2="320" y2="300" stroke="white" strokeWidth="1" />
            <line x1="320" y1="300" x2="200" y2="60" stroke="white" strokeWidth="1" />
          </svg>

          {insights.map((node) => (
            <motion.div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
              style={{ top: node.y, left: node.x }}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.1 }}
            >
              <div className={`p-6 rounded-full glass border-2 transition-colors ${hovered === node.id ? 'border-blue-500 bg-blue-500/20' : 'border-white/20'}`}>
                {node.icon}
              </div>
              
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap text-center transition-opacity duration-300 ${hovered === node.id ? 'opacity-100' : 'opacity-40'}`}>
                <h4 className="font-bold">{node.title}</h4>
              </div>
            </motion.div>
          ))}

          {/* Center Pulsing Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 animate-pulse">
             <span className="text-blue-400 font-bold text-sm">Strategic Core</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((node) => (
            <div 
              key={node.id}
              className={`p-8 rounded-2xl glass border-white/5 transition-all ${hovered === node.id ? 'ring-1 ring-blue-500 bg-white/5' : ''}`}
            >
              <h3 className="text-xl font-bold mb-4">{node.title}</h3>
              <p className="text-slate-400 leading-relaxed">{node.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
