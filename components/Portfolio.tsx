import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'Consultor de Padrones (ARBA & AGIP)',
    category: 'Automatización',
    description: 'Herramienta integral desarrollada en Excel para automatizar la búsqueda y cruce de alícuotas de Retenciones y Percepciones. Utiliza Power Query para modelar y conectar padrones mensuales de alto volumen (CABA y Bs. As.) y VBA para permitir consultas dinámicas por CUIT, reduciendo drásticamente el tiempo de validación fiscal.',
    technologies: ['Excel', 'VBA', 'PowerQuery','GitHub'],
    imageUrl: 'imagenes/Portada padrones.PNG', // corregir portada de control de padron perc y ret
    link: 'https://github.com/AndyEliec/PADRON-PERCEPCIONES-Y-RETENCIONES-IIBB.git'
  },
  {
    id: '2',
    title: 'Pagina Web Corporativa',
    category: 'Desarrollo',
    description: 'Desarrollo en curso de un sitio web institucional moderno y escalable. Implementado con arquitectura basada en componentes (.tsx) para garantizar modularidad y reutilización de código. Utiliza TypeScript para el tipado estático robusto y JSON para la gestión dinámica de datos y configuraciones.',
    technologies: ['React', 'TypeScript', 'HTML5', 'JSON', 'IAStudio'],
    imageUrl: 'https://picsum.photos/id/445/600/400', // caratula pagina web
    link: 'https://ai.studio/apps/drive/1ThVCP4tg70aVW9SF5yZODPtmudY25Q9U'
  },
  {
    id: '3',
    title: 'Extracto Bancario de PDF a EXCEL',
    category: 'Automatización',
    description: 'Workflow automatizado en KNIME diseñado para extraer, limpiar y estructurar datos financieros desde archivos PDF no nativos. El proceso transforma datos desordenados en tablas de Excel listas para el análisis y la conciliación bancaria, eliminando la carga manual de datos.',
    technologies: ['KNIME', 'Excel'],
    imageUrl: 'https://lh3.googleusercontent.com/sitesv/AAzXCkdUR_Kmvfa9vAruZdoms8D6M5Rqi9bFw-ORs5P7skmhNKcyPuYdyBTVrCkDLPHnZyLJgFj3Cosi-4-xJsDaeU3tG7tOEo4L4HLMUe-GPNSFI3bWsiT1cBVj091ZmAJeemSLJwEPmnrU08WJG72jLcv_-hFWmpiQAaYL1XWPVho4BNA1chQd8hpGiERVIlRjt0wCo7xVp_FRDoNSYBXd2mIwfcbqqYK5r1o1HGg=w1280', 
    link: 'https://sites.google.com/view/extractobancariodepdfaexcel'
  },
  {
    id: '4',
    title: 'Conciliación Bancaria Automatizada',
    category: 'Contabilidad',
    description: 'Sistema desarrollado en Excel con VBA para optimizar el proceso de conciliacion bancaria, reduciendo el trabajo manual operativo.',
    technologies: ['VBA', 'Excel'],
    imageUrl: 'https://picsum.photos/id/455/600/400', // caratula conciliacion
    link: 'https://github.com/AndyEliec/Conciliacion_Bancaria.git'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
          <p className="text-slate-400">Soluciones reales para problemas complejos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl glass-panel border border-slate-700 transition-all hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                  </div>
                  {project.link && (
                    <a href={project.link} className="text-slate-400 hover:text-white">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;