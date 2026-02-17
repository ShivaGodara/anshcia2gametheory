
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  ScatterChart, Scatter, ZAxis, Cell 
} from 'recharts';
import { StrategistType, DataPoint } from '../types';

const MOCK_DATA: Record<StrategistType, DataPoint[]> = {
  'Analytical': Array.from({ length: 20 }, (_, i) => ({ time: i, performance: 50 + i * 2 + Math.random() * 5, risk: 30 + Math.random() * 10, volatility: 5 })),
  'Reactive': Array.from({ length: 20 }, (_, i) => ({ time: i, performance: 60 - i + Math.random() * 20, risk: 20 + Math.random() * 60, volatility: 40 })),
  'High-Risk': Array.from({ length: 20 }, (_, i) => ({ time: i, performance: 40 + (i % 2 === 0 ? 30 : -20), risk: 80 + Math.random() * 15, volatility: 70 })),
  'Adaptive': Array.from({ length: 20 }, (_, i) => ({ time: i, performance: 50 + i * 1.5 + Math.random() * 10, risk: 40 + Math.random() * 20, volatility: 15 })),
};

const Dashboard: React.FC = () => {
  const [selectedType, setSelectedType] = useState<StrategistType>('Analytical');

  const data = useMemo(() => MOCK_DATA[selectedType], [selectedType]);

  return (
    <section className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experimental Data</h2>
            <p className="text-slate-400">Real-time performance metrics across behavioral cohorts.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {(['Analytical', 'Reactive', 'High-Risk', 'Adaptive'] as StrategistType[]).map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${selectedType === type ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 p-8 rounded-3xl glass border-white/10 h-[400px]">
            <h3 className="text-lg font-semibold mb-6">Performance Stability</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="time" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                  itemStyle={{ color: '#60a5fa' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="performance" 
                  stroke="#3b82f6" 
                  strokeWidth={3} 
                  dot={{ r: 4 }} 
                  activeDot={{ r: 8 }} 
                  animationDuration={1000}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Scatter Chart */}
          <div className="p-8 rounded-3xl glass border-white/10 h-[400px]">
            <h3 className="text-lg font-semibold mb-6">Risk vs Return Variance</h3>
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis type="number" dataKey="risk" name="Risk" stroke="#94a3b8" />
                <YAxis type="number" dataKey="performance" name="Performance" stroke="#94a3b8" />
                <ZAxis type="number" dataKey="volatility" range={[60, 400]} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Participants" data={data} fill="#8b5cf6">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.performance > 60 ? '#22c55e' : '#ef4444'} opacity={0.6} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 rounded-2xl glass border-white/5 text-center">
            <p className="text-slate-500 text-sm uppercase font-bold mb-1">Average Entropy</p>
            <p className="text-3xl font-bold text-white">
              {selectedType === 'Reactive' ? 'High' : selectedType === 'Analytical' ? 'Low' : 'Moderate'}
            </p>
          </div>
          <div className="p-6 rounded-2xl glass border-white/5 text-center">
            <p className="text-slate-500 text-sm uppercase font-bold mb-1">Decisional Velocity</p>
            <p className="text-3xl font-bold text-white">
              {selectedType === 'High-Risk' ? 'Ultra-Fast' : 'Controlled'}
            </p>
          </div>
          <div className="p-6 rounded-2xl glass border-white/5 text-center">
            <p className="text-slate-500 text-sm uppercase font-bold mb-1">Feedback Sensitivity</p>
            <p className="text-3xl font-bold text-white">
              {Math.floor(Math.random() * 20 + 70)}%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
