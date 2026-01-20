'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Layers, Map, Sparkles, Smartphone, ArrowRight } from 'lucide-react';

const incubations = [
  {
    title: "mapii.ai",
    tagline: "Intelligent Spatial Mapping",
    description: "Next-generation location intelligence powered by proprietary AI models. Redefining how we visualize and interact with urban data.",
    icon: <Map className="w-8 h-8 text-blue-400" />,
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
    status: "In Development"
  },
  {
    title: "auraholo.app",
    tagline: "Spatial Computing Interface",
    description: "An augmented reality platform for immersive holographic experiences. Bridging the physical and digital worlds seamlessly.",
    icon: <Sparkles className="w-8 h-8 text-purple-400" />,
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
    status: "Early Access"
  }
];

const selectedWork = [
  {
    title: "Neon Horizon",
    category: "WebGL Experience",
    description: "Procedurally generated terrain visualization using Three.js."
  },
  {
    title: "Quantum UI",
    category: "Design System",
    description: "Comprehensive React component library for modern apps."
  }
];

export default function Projects() {
  return (
    <section className="relative z-20 w-full bg-[#121212] py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold text-white tracking-tight"
            >
                Selected <span className="text-gray-600">Works</span><br />
                & Incubations
            </motion.h2>
             <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-400 max-w-sm text-right"
            >
                Building the future of spatial interaction and AI-driven utilities.
            </motion.p>
        </div>

        {/* Startups / Incubations (Hero Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {incubations.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`group relative h-[450px] rounded-3xl border border-white/10 bg-[#0f0f0f] overflow-hidden ${project.border} transition-colors duration-500`}
                >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    
                    <div className="absolute top-8 right-8 flex items-center gap-3">
                         <span className="px-3 py-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-xs font-mono text-white/70">
                            {project.status}
                         </span>
                         <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                            <ExternalLink size={18} />
                         </div>
                    </div>

                    <div className="absolute top-8 left-8 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                        {project.icon}
                    </div>

                    <div className="absolute bottom-0 left-0 p-10 w-full">
                        <h3 className="text-4xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-lg font-medium text-gray-300 mb-4">{project.tagline}</p>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                            {project.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Other Projects List */}
        <div className="border-t border-white/10 pt-16">
            <h3 className="text-2xl font-bold text-white mb-12">Recent Experiments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-80 hover:opacity-100 transition-opacity">
                 {selectedWork.map((project, i) => (
                     <motion.a 
                        href="#"
                        key={i}
                        className="group flex items-center justify-between p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                     >
                        <div>
                             <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                             <span className="text-sm font-mono text-gray-500">{project.category}</span>
                        </div>
                        <ArrowRight className="text-gray-600 group-hover:text-white -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
                     </motion.a>
                 ))}
            </div>
        </div>

      </div>
    </section>
  );
}
