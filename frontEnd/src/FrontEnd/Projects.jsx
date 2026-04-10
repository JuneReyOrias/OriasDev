import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Rocket, Hammer, X, Globe, Cpu, 
  ChevronRight, Maximize2, Layers, Monitor, Code2
} from 'lucide-react';

const cardVariants = {
  offscreen: { y: 20, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 }
  }
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      section: "Foundation",
      image: "/Webprojects/ZamboAgrimap.png",
      title: "Agri-Map GIS",
      desc: "A GIS-powered agricultural platform to manage and visualize rice farming data across Zamboanga City. It enables local government units to track crop distribution and yield in real-time.",
      role: "Full-stack Developer",
      tech: ["Laravel", "JS", "Google Maps API", "MySQL"],
      link: "https://agri-map-web-app.vercel.app/",
      accent: "blue"
    },
    {
      id: 2,
      section: "Foundation",
      image: "/Webprojects/wmsu-upress-project.png",
      title: "Upress CMS",
      desc: "Academic publishing Content Management System designed specifically for WMSU. Streamlines the workflow from manuscript submission to final printing and distribution.",
      role: "Full-stack Developer",
      tech: ["Laravel", "Bootstrap", "MySQL", "PHP"],
      link: "https://upress-wmsu-system.vercel.app/",
      accent: "blue"
    },
    {
      id: 3,
      section: "Foundation",
      image: "/Webprojects/simpleBanking.png",
      title: "Banking System",
      desc: "Secure transaction app developed during OJT experience. Features real-time balance updates, transaction history, and secure fund transfers between accounts.",
      role: "Full-stack Developer",
      tech: ["React", "Tailwind", "PHP", "Axios"],
      link: "https://simple-banking-sytem.vercel.app/",
      accent: "blue"
    },
    {
      id: 4,
      section: "Latest",
      image: "/Webprojects/Mi_Porfolios.png",
      title: "Mi Portfolios",
      desc: "A personal portfolio hub built with modern UI standards. Showcases a high-performance architectural approach to personal branding for developers.",
      role: "Full-stack Developer",
      tech: ["Tailwind", "Django", "Framer Motion"],
      link: "https://mi-porfolios.vercel.app/",
      accent: "yellow"
    },
    {
      id: 5,
      section: "Latest",
      image: "/Webprojects/FashionGyrl.png",
      title: "FashionGyrl Ecom",
      desc: "Luxury ecommerce experience featuring dynamic product management and responsive checkout system.",
      role: "Full-stack Developer",
      tech: ["React", "Vite", "Django"],
      link: "https://fashion-gyrl.vercel.app/",
      accent: "yellow"
    },
    {
      id: 6,
      section: "Latest",
      image: "/Webprojects/BayanihanUI.png",
      title: "BayanihanUI 2.0",
      desc: "Comprehensive SaaS component library built with React for the Filipino developer community.",
      role: "Full-stack Developer",
      tech: ["React", "Tailwind", "Vite"],
      link: "https://bayanihan-ui-2-0.vercel.app/category/saas",
      accent: "yellow"
    },
        {
      id: 7,
      section: "Latest",
      image: "/Webprojects/lifer_refuge.png",
      title: "Life & Refuge",
      desc: "A web app you can visit to find a verse that will provide you guidance and peace.",
      role: "Full-stack Developer",
      tech: ["React", "Tailwind", "Vite"],
      link: "https://light-refuge-app.vercel.app/",
      accent: "yellow"
    },
     {
      id: 8,
      section: "Latest",
      image: "/Webprojects/htmlversion.png",
      title: "BayanihanUI 1.0 html",
      desc: "A minimalist web app designed to help users discover verses that inspire guidance and calm. Built with simplicity in mind, it offers a smooth, distraction-free experience.",
      role: "Full-stack Developer",
      tech: ["Pure Html", "CSS"],
      link: "https://bayanihan-ui-html.vercel.app/",
      accent: "yellow"
    },
    {
  id: 9,
  section: "Latest",
  image: "/Webprojects/avelune-v-realestate-core.png", // Recommended: Move to public/assets/
  title: "Avelune V-RealEstate 1.0",
  desc: "The definitive digital command center for global property collectors. Fusing high-fidelity architectural showcases with a sovereign financial analytics engine, designed to manage ultra-prime portfolios with absolute precision and privacy.",
  role: "Lead Systems Architect",
  tech: ["Vue.js 3", "Vite", "Tailwind CSS", "Chart.js"], // Updated to reflect your actual tech stack
  link: "https://v-real-state.vercel.app/", // Update this to your final Vercel URL
  accent: "emerald"
}
  ];

  return (
    <div className="scroll-mt-20 bg-slate-950 py-16 md:py-24 px-4 md:px-6 relative overflow-hidden font-sans" id="ProjectWeb">
      {/* Background Heritage Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-20 px-2">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 mb-6">
            <Layers size={12} className="text-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Portfolio Archive</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic leading-none"
          >
           Build<span className="text-blue-600">Folio.</span>
          </motion.h1>
          <p className="max-w-2xl mx-auto text-slate-500 text-sm md:text-lg font-medium italic leading-relaxed">
      A personal showcase of the systems and products I’ve built.Click to explore the full blueprints.
          </p>
        </header>

        {/* SECTION: FOUNDATION */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-900 pb-4">
            <Hammer className="text-blue-500" size={24} />
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">Foundational Builds</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.section === "Foundation").map(project => (
              <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </div>
        </div>

        {/* SECTION: LATEST */}
        <div>
          <div className="flex items-center gap-4 mb-10 border-b border-slate-900 pb-4">
            <Rocket className="text-yellow-500" size={24} />
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">Latest Deployments</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.section === "Latest").map(project => (
              <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </div>
        </div>
      </div>

      {/* FULL VIEW MODAL SYSTEM */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-2 sm:p-4 md:p-8">
            {/* Backdrop with Blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl"
            />

            {/* Modal Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-5xl bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col shadow-3xl max-h-[95vh] lg:max-h-[90vh]"
            >
              {/* Modal Header Toolbar */}
              <div className="p-4 md:p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 backdrop-blur-md sticky top-0 z-20">
                <div className="flex items-center gap-3">
                   <div className="flex gap-1.5 px-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                   </div>
                   <h2 className="text-sm md:text-xl font-black text-white uppercase tracking-tighter italic truncate max-w-[200px] sm:max-w-md">
                    {selectedProject.title}
                   </h2>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-slate-800 hover:bg-red-600 text-white rounded-xl transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto no-scrollbar">
                {/* FULL IMAGE VIEWPORT */}
                <div className="bg-slate-950 p-4 md:p-10 border-b border-slate-800 flex justify-center items-start min-h-[300px] md:min-h-[500px]">
                   <div className="relative group/img w-full">
                      <img 
                        src={selectedProject.image} 
                        className="w-full h-auto rounded-2xl shadow-2xl border border-white/5 object-contain"
                        alt={selectedProject.title}
                      />
                      <div className="absolute top-4 right-4 p-3 bg-blue-600 rounded-full text-white shadow-xl opacity-0 group-hover/img:opacity-100 transition-opacity hidden md:block">
                        <Maximize2 size={20} />
                      </div>
                   </div>
                </div>

                {/* PROJECT DETAILS PANEL */}
                <div className="p-6 md:p-12 bg-slate-900">
                   <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
                      
                      {/* Left: Summary */}
                      <div className="lg:col-span-7 space-y-6">
                         <div className="flex items-center gap-2 text-blue-500">
                            <Monitor size={16} />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Project Intelligence</span>
                         </div>
                         <p className="text-slate-300 text-base md:text-xl leading-relaxed font-medium italic">
                            {selectedProject.desc}
                         </p>
                      </div>

                      {/* Right: Technicals */}
                      <div className="lg:col-span-5 space-y-8">
                         <div className="grid grid-cols-1 gap-8">
                            <div className="space-y-3">
                               <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                  <Cpu size={12} className="text-blue-500" /> Engineering Role
                               </h5>
                               <p className="text-white text-sm font-bold uppercase tracking-tight">{selectedProject.role}</p>
                            </div>
                            <div className="space-y-4">
                               <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                  <Code2 size={12} className="text-blue-500" /> Technology Stack
                               </h5>
                               <div className="flex flex-wrap gap-2">
                                  {selectedProject.tech.map(t => (
                                    <span key={t} className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-[9px] font-black text-slate-400 uppercase tracking-tighter">
                                       {t}
                                    </span>
                                  ))}
                               </div>
                            </div>
                         </div>

                         <div className="pt-8 border-t border-slate-800">
                            <a 
                              href={selectedProject.link} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-600/20 active:scale-95"
                            >
                              <Globe size={18} /> Launch Global Engine
                            </a>
                         </div>
                      </div>

                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- REUSABLE CARD COMPONENT ---
function ProjectCard({ project, onOpen }) {
  return (
    <motion.div 
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      onClick={() => onOpen(project)}
      className="group relative rounded-[2.5rem] bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl cursor-pointer hover:border-blue-500/50 transition-all duration-500"
    >
      <div className="relative h-64 md:h-72 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-8">
            <div className="flex justify-between items-end">
               <div className="space-y-1">
                  <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">View Prototype</span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic leading-none">{project.title}</h3>
               </div>
               <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                  <ChevronRight size={24} />
               </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;