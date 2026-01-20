'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: "Neon Horizon",
    category: "WebGL Experience",
    description: "A procedurally generated terrain visualization using Three.js and GLSL."
  },
  {
    title: "Aether Lens",
    category: "Photography Portfolio",
    description: "Minimalist showcase with custom cursor interactions and smooth state transitions."
  },
  {
    title: "Quantum UI",
    category: "Design System",
    description: "A comprehensive React component library focusing on accessibility and motion."
  }
];

export default function Projects() {
  return (
    <section className="relative z-20 w-full min-h-screen bg-[#121212] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-16 text-white"
        >
          Selected Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[400px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-white/20 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-sm font-mono text-gray-400 mb-2 block">{project.category}</span>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
