
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp, Menu, X, Microscope } from 'lucide-react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Framework from './components/Framework';
import Dashboard from './components/FindingsDashboard';
import Insights from './components/Insights';
import Quiz from './components/Quiz';

const App: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experiment', href: '#experiment' },
    { name: 'Data', href: '#data' },
    { name: 'Insights', href: '#insights' },
    { name: 'Test Profile', href: '#quiz' },
  ];

  return (
    <div className="relative selection:bg-blue-500/30">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
        <nav className="glass rounded-2xl px-6 py-4 flex items-center justify-between border-white/10 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Microscope size={22} />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">STRATAGEM</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-slate-400"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-slate-950/95 z-40 md:hidden transition-transform duration-500 ${isNavOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-bold"
              onClick={() => setIsNavOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <main>
        <Hero />
        
        <div id="experiment">
          <Timeline />
        </div>
        
        <Framework />
        
        <div id="data">
          <Dashboard />
        </div>
        
        <div id="insights">
          <Insights />
        </div>

        {/* Implications Banner */}
        <section className="py-24 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 text-center">
           <div className="max-w-4xl mx-auto">
             <h2 className="text-4xl font-bold mb-6">Strategic Imperatives</h2>
             <p className="text-xl text-slate-400 leading-relaxed italic">
               "Strategy is not the decision. It is the thinking model behind it."
             </p>
             <div className="flex flex-wrap justify-center gap-4 mt-12">
                {['Leadership', 'Public Policy', 'Entrepreneurship', 'Crisis Mgmt'].map(tag => (
                  <span key={tag} className="px-6 py-2 rounded-full glass border-white/10 text-xs font-bold uppercase tracking-widest text-blue-400">
                    {tag}
                  </span>
                ))}
             </div>
           </div>
        </section>

        <Quiz />
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © 2024 Stratagem Decision Lab. All experimental data simulated.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Methodology</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Team</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0.5 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 glass rounded-full text-blue-400 border-white/20 hover:bg-white/5 z-50"
      >
        <ArrowUp size={20} />
      </motion.button>
    </div>
  );
};

export default App;
