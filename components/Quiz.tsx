
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUIZ_QUESTIONS } from '../constants';
import { CheckCircle2, AlertTriangle, RefreshCcw } from 'lucide-react';

const Quiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (points: number) => {
    setScore(score + points);
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const getResult = () => {
    if (score >= 8) return { title: 'The Adaptive Visionary', desc: 'You excel at processing high-complexity variables while maintaining long-term stability.', icon: <CheckCircle2 className="text-green-500 w-12 h-12" /> };
    if (score >= 4) return { title: 'The Methodical Analyst', desc: 'You prioritize data and logic, reducing risk but occasionally missing high-speed opportunities.', icon: <CheckCircle2 className="text-blue-500 w-12 h-12" /> };
    if (score >= 0) return { title: 'The Cautious Player', desc: 'You lean towards stability, but might be paralyzed by extreme uncertainty.', icon: <AlertTriangle className="text-yellow-500 w-12 h-12" /> };
    return { title: 'The Reactive Responder', desc: 'You tend to react to noise rather than signal. Strategic depth is your next frontier.', icon: <AlertTriangle className="text-red-500 w-12 h-12" /> };
  };

  const reset = () => {
    setCurrentStep(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <section id="quiz" className="py-24 px-4 bg-slate-950">
      <div className="max-w-3xl mx-auto glass p-10 rounded-3xl border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
          <motion.div 
            className="h-full bg-blue-500" 
            initial={{ width: '0%' }}
            animate={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
          />
        </div>

        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <span className="text-blue-400 font-mono text-sm uppercase tracking-widest">Question {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
              <h2 className="text-3xl font-bold leading-tight">{QUIZ_QUESTIONS[currentStep].question}</h2>
              
              <div className="grid grid-cols-1 gap-4">
                {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.score)}
                    className="p-5 text-left rounded-xl glass border-white/10 hover:border-blue-500/50 hover:bg-white/5 transition-all group flex items-center justify-between"
                  >
                    <span className="text-slate-300 group-hover:text-white transition-colors">{option.text}</span>
                    <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs group-hover:border-blue-500">
                      {String.fromCharCode(65 + idx)}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-10"
            >
              <div className="flex justify-center mb-6">
                {getResult().icon}
              </div>
              <h2 className="text-4xl font-extrabold mb-4">{getResult().title}</h2>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg mx-auto">
                {getResult().desc}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={reset}
                  className="px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-blue-50"
                >
                  <RefreshCcw size={18} />
                  Retake Test
                </button>
                <button
                  className="px-8 py-4 glass border-white/20 text-white font-bold rounded-xl hover:bg-white/10"
                >
                  Share Results
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Quiz;
