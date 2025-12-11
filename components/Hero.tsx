import React from 'react';
import { ArrowRight, FileSpreadsheet, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold border border-cyan-500/20 mb-4">
              Disponible para nuevos proyectos
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              Más allá de los <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">Números.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-400 max-w-lg">
              Soy Andrea Corimayo. Combino la precisión de la <span className="text-slate-200 font-semibold">Contabilidad</span> con la eficiencia de la <span className="text-slate-200 font-semibold">Programación</span> para optimizar procesos y transformar negocios.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="#portfolio" 
              onClick={(e) => scrollToSection(e, 'portfolio')}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              Ver Proyectos <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-8 py-3 rounded-lg glass-panel text-slate-300 font-medium hover:bg-slate-800 transition-all border border-slate-700 cursor-pointer"
            >
              Contactar
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative z-10 glass-panel p-8 rounded-2xl border border-slate-600/50 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-slate-500">analysis_tool.py</div>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="text-pink-400">import <span className="text-white">pandas</span> as <span className="text-white">pd</span></div>
              <div className="text-pink-400">import <span className="text-white">finance_tools</span></div>
              <br />
              <div className="text-slate-400"># Optimizando flujo de caja</div>
              <div>
                <span className="text-purple-400">def</span> <span className="text-blue-400">optimize_process</span>(data):
              </div>
              <div className="pl-4">
                <span className="text-slate-300">analysis</span> = data.<span className="text-yellow-400">analyze_trends</span>()
              </div>
              <div className="pl-4">
                <span className="text-purple-400">return</span> analysis.<span className="text-yellow-400">maximize_efficiency</span>()
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 -left-10 glass-panel p-6 rounded-2xl border border-slate-600/50 shadow-xl transform -rotate-6 z-0 w-64">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                <FileSpreadsheet size={20} />
              </div>
              <span className="font-bold text-slate-200">Reporte Q3</span>
            </div>
            <div className="h-2 w-full bg-slate-700 rounded-full mb-2">
              <div className="h-2 bg-green-500 rounded-full w-3/4"></div>
            </div>
            <div className="text-xs text-right text-green-400">100% Automatizado</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;