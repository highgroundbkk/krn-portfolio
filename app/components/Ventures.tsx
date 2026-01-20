'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Network, Share2 } from 'lucide-react';

export default function Ventures() {
  return (
    <section id="brainchain" className="w-full bg-[#121212] py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold text-white max-w-xl"
            >
                Other Ventures & <br /><span className="text-gray-500">Explorations</span>
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-gray-400"
            >
                <div className="h-[1px] w-12 bg-gray-600" />
                <span className="uppercase tracking-widest text-sm">Innovating at the edge</span>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brainchain Labs Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 group relative h-[500px] rounded-3xl bg-[#0f0f0f] border border-white/10 overflow-hidden hover:border-purple-500/30 transition-colors"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             
             <div className="absolute top-8 right-8">
                <ArrowUpRight className="text-gray-500 group-hover:text-purple-400 w-8 h-8 transition-colors" />
             </div>

             <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex items-center gap-3 mb-4 text-purple-400">
                    <Cpu size={24} />
                    <span className="font-mono text-sm uppercase tracking-widest">Web3 & AI Research</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Brainchain Labs</h3>
                <p className="text-gray-400 text-lg max-w-lg mb-8">
                    An experimental lab dedicated to exploring the intersection of decentralized networks and artificial intelligence. 
                    Building the infrastructure for the next generation of autonomous agents.
                </p>
                <div className="flex gap-4">
                    <span className="px-4 py-2 rounded-full border border-white/10 text-xs text-gray-400">Blockchain</span>
                    <span className="px-4 py-2 rounded-full border border-white/10 text-xs text-gray-400">GenAI</span>
                </div>
             </div>
          </motion.div>

          {/* Collaborations Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative h-[500px] rounded-3xl bg-[#0f0f0f] border border-white/10 overflow-hidden hover:border-blue-500/30 transition-colors flex flex-col justify-between p-8 md:p-12"
          >
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
               <div className="flex justify-between items-start">
                   <div className="flex items-center gap-3 text-blue-400">
                        <Share2 size={24} />
                    </div>
                   <ArrowUpRight className="text-gray-500 group-hover:text-blue-400 w-8 h-8 transition-colors" />
               </div>

               <div>
                    <h3 className="text-3xl font-bold text-white mb-4">Collaborations</h3>
                    <p className="text-gray-400 text-sm mb-8">
                        Partnering with forward-thinking brands and startups to solve complex problems through design and technology.
                    </p>
                    
                    <ul className="space-y-4">
                        {["FinTech Stealth", "ArtBlock DAO", "Urban Retail Group"].map((item, i) => (
                             <li key={i} className="flex items-center gap-3 text-gray-300 border-b border-white/5 pb-2">
                                <Network size={16} className="text-gray-600" />
                                {item}
                             </li>
                        ))}
                    </ul>
               </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
