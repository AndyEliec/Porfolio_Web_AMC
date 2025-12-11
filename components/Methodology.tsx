import React from 'react';
import { Search, Settings, Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: "Análisis y Eficiencia Operacional",
    icon: <Search className="text-cyan-400" size={32} />,
    description: "Evaluación integral de procesos (contables, administrativos, RR.HH.) para identificar cuellos de botella. Se enfoca en la Eficiencia Operacional y en la Selección/Seguimiento de talento (voluntarios/practicantes), asegurando la optimización de flujos de trabajo."
  },
  {
    id: 2,
    title: "Estrategia Tecnológica y Formación",
    icon: <Settings className="text-emerald-400" size={32} />,
    description: "Diseño e implementación de soluciones a medida, incluyendo el desarrollo de macros en Excel/VBA para reportes y la automatización de conciliaciones complejas. Además, ofrece capacitación en tecnologías (Excel, Power BI, HTML), normativas contables, y redes profesionales (LinkedIn)."
  },
  {
    id: 3,
    title: "Ejecución Contable, Fiscal y Soporte",
    icon: <Rocket className="text-purple-400" size={32} />,
    description: "Realización de registraciones contables diarias, conciliaciones bancarias, liquidación de impuestos (IVA, IIBB) y manejo de aplicativos (AFIP, ARBA, AGIP). Incluye análisis de cuentas, soporte en auditorías, y gestión de documentación legal (legalización de balances, certificación Pyme)."
  }
];

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-semibold tracking-wider text-sm uppercase">Cómo Trabajo</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">De lo Manual a lo Automatizado</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Mi enfoque no es reemplazar al contador, sino darle superpoderes mediante la tecnología.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-cyan-900 via-emerald-900 to-purple-900 -z-10 border-t border-dashed border-slate-700"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center mb-6 border border-slate-700 group-hover:border-cyan-500/50 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300 relative bg-slate-900">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center border border-slate-600 text-slate-300 font-bold">
                  {step.id}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;